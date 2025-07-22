/**
 * High-Performance Masonry Layout Component
 *
 * Design Philosophy (ultraThink):
 * 1. Performance First: CSS-native approach minimizes reflows/repaints
 * 2. Progressive Enhancement: Graceful degradation for older browsers
 * 3. Developer Ergonomics: Simple API, maximum flexibility
 * 4. Accessibility Native: WCAG 2.1 AA compliant by default
 * 5. Framework Agnostic: Pure CSS + minimal JS for universal adoption
 */

'use client';

import { cn } from '@design-system/utils';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type HTMLAttributes,
  type ReactNode,
} from 'react';

import styles from './Masonry.module.css';

// ========================================================================================
// TYPE DEFINITIONS
// ========================================================================================

export interface MasonryConfig {
  /** Number of columns for different breakpoints */
  columns: {
    mobile: number;
    tablet: number;
    desktop: number;
    wide: number;
  };
  /** Gap between items in pixels */
  gap: {
    mobile: number;
    tablet: number;
    desktop: number;
    wide: number;
  };
  /** Enable intersection observer for progressive loading */
  progressiveLoading?: boolean;
  /** Custom breakpoints in pixels */
  breakpoints?: {
    tablet: number;
    desktop: number;
    wide: number;
  };
}

export interface MasonryItemProps {
  children: ReactNode;
  className?: string;
  priority?: boolean; // For above-the-fold content
  'data-testid'?: string;
}

export interface MasonryProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  children: ReactNode;
  config?: Partial<MasonryConfig>;
  className?: string;
  itemClassName?: string;
  /** Render prop for custom item wrapper */
  renderItem?: (children: ReactNode, index: number) => ReactNode;
  /** Accessibility label for the masonry grid */
  ariaLabel?: string;
  /** Enable reduced motion support */
  respectReducedMotion?: boolean;
}

// ========================================================================================
// DEFAULT CONFIGURATION
// ========================================================================================

const DEFAULT_CONFIG: MasonryConfig = {
  columns: {
    mobile: 1,
    tablet: 2,
    desktop: 3,
    wide: 4,
  },
  gap: {
    mobile: 10,
    tablet: 20,
    desktop: 24,
    wide: 28,
  },
  progressiveLoading: true,
  breakpoints: {
    tablet: 768,
    desktop: 1024,
    wide: 1400,
  },
};

// ========================================================================================
// PERFORMANCE HOOKS
// ========================================================================================

/**
 * Custom hook for optimized resize handling
 * Uses ResizeObserver for better performance than window resize events
 */
const useOptimizedResize = (
  callback: () => void,
  element: HTMLElement | null
) => {
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  useEffect(() => {
    if (!element || typeof ResizeObserver === 'undefined') return;

    const resizeObserver = new ResizeObserver(_entries => {
      // Use requestAnimationFrame to avoid layout thrashing
      requestAnimationFrame(() => {
        callbackRef.current();
      });
    });

    resizeObserver.observe(element);

    return () => {
      resizeObserver.disconnect();
    };
  }, [element]);
};

/**
 * Hook for managing intersection observer with performance optimizations
 */
const useProgressiveLoading = (enabled: boolean) => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!enabled || typeof IntersectionObserver === 'undefined') return;

    observerRef.current = new IntersectionObserver(
      entries => {
        // Batch DOM updates to avoid layout thrashing
        const updates = new Set<number>();

        entries.forEach(entry => {
          const index = parseInt(
            entry.target.getAttribute('data-index') ?? '0'
          );
          if (entry.isIntersecting) {
            updates.add(index);
          }
        });

        if (updates.size > 0) {
          setVisibleItems(prev => new Set([...prev, ...updates]));
        }
      },
      {
        root: null,
        rootMargin: '50px',
        threshold: 0.1,
      }
    );

    return () => {
      observerRef.current?.disconnect();
    };
  }, [enabled]);

  const observeElement = useCallback((element: HTMLElement, index: number) => {
    if (observerRef.current) {
      element.setAttribute('data-index', index.toString());
      observerRef.current.observe(element);
    }
  }, []);

  return { visibleItems, observeElement };
};

// ========================================================================================
// MASONRY ITEM COMPONENT
// ========================================================================================

export const MasonryItem = React.forwardRef<HTMLDivElement, MasonryItemProps>(
  (
    { children, className, priority = false, 'data-testid': testId, ...props },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(styles['masonry-item'], className)}
        data-priority={priority}
        data-testid={testId}
        {...props}
      >
        {children}
      </div>
    );
  }
);

MasonryItem.displayName = 'MasonryItem';

// ========================================================================================
// MAIN MASONRY COMPONENT
// ========================================================================================

export const Masonry = React.forwardRef<HTMLDivElement, MasonryProps>(
  (
    {
      children,
      config: userConfig,
      className,
      itemClassName,
      renderItem,
      ariaLabel = 'Masonry grid layout',
      respectReducedMotion = true,
      ...props
    },
    ref
  ) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isReady, setIsReady] = useState(false);
    const [currentBreakpoint, setCurrentBreakpoint] =
      useState<keyof MasonryConfig['columns']>('desktop');

    // Merge user config with defaults
    const config = useMemo(
      () => ({
        ...DEFAULT_CONFIG,
        ...userConfig,
        columns: { ...DEFAULT_CONFIG.columns, ...userConfig?.columns },
        gap: { ...DEFAULT_CONFIG.gap, ...userConfig?.gap },
        breakpoints: {
          ...DEFAULT_CONFIG.breakpoints,
          ...userConfig?.breakpoints,
        },
      }),
      [userConfig]
    );

    const { visibleItems, observeElement } = useProgressiveLoading(
      config.progressiveLoading ?? true
    );

    // ========================================================================================
    // RESPONSIVE BREAKPOINT DETECTION
    // ========================================================================================

    const updateBreakpoint = useCallback(() => {
      if (typeof window === 'undefined') return;

      const width = window.innerWidth;
      const { tablet, desktop, wide } = config.breakpoints;

      if (width >= wide) setCurrentBreakpoint('wide');
      else if (width >= desktop) setCurrentBreakpoint('desktop');
      else if (width >= tablet) setCurrentBreakpoint('tablet');
      else setCurrentBreakpoint('mobile');
    }, [config.breakpoints]);

    // Optimized resize handling
    useOptimizedResize(updateBreakpoint, containerRef.current);

    // Initial breakpoint detection
    useEffect(() => {
      updateBreakpoint();
      setIsReady(true);
    }, [updateBreakpoint]);

    // ========================================================================================
    // CSS CUSTOM PROPERTIES GENERATION
    // ========================================================================================

    const cssVariables = useMemo(() => {
      const currentColumns = config.columns[currentBreakpoint];
      const currentGap = config.gap[currentBreakpoint];

      return {
        '--masonry-columns': currentColumns.toString(),
        '--masonry-gap': `${currentGap}px`,
        '--masonry-mobile-columns': config.columns.mobile.toString(),
        '--masonry-mobile-gap': `${config.gap.mobile}px`,
        '--masonry-tablet-columns': config.columns.tablet.toString(),
        '--masonry-tablet-gap': `${config.gap.tablet}px`,
        '--masonry-desktop-columns': config.columns.desktop.toString(),
        '--masonry-desktop-gap': `${config.gap.desktop}px`,
        '--masonry-wide-columns': config.columns.wide.toString(),
        '--masonry-wide-gap': `${config.gap.wide}px`,
      } as React.CSSProperties;
    }, [config, currentBreakpoint]);

    // ========================================================================================
    // RENDER CHILDREN WITH PROGRESSIVE LOADING
    // ========================================================================================

    const renderChildren = useMemo(() => {
      const childrenArray = React.Children.toArray(children);

      return childrenArray.map((child, index) => {
        const isVisible = !config.progressiveLoading || visibleItems.has(index);
        const shouldRender = isVisible || index < 4; // Always render first 4 items

        const itemContent = shouldRender ? (
          child
        ) : (
          <div aria-hidden='true' className={styles.placeholder} />
        );

        const wrappedChild = renderItem
          ? renderItem(itemContent, index)
          : itemContent;

        // Add intersection observer for progressive loading
        return React.cloneElement(wrappedChild as React.ReactElement, {
          key: index,
          ref: (el: HTMLElement) => {
            if (el && config.progressiveLoading) {
              observeElement(el, index);
            }
          },
        });
      });
    }, [
      children,
      config.progressiveLoading,
      visibleItems,
      renderItem,
      itemClassName,
      observeElement,
    ]);

    // ========================================================================================
    // RENDER
    // ========================================================================================

    return (
      <div
        ref={node => {
          containerRef.current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) ref.current = node;
        }}
        aria-label={ariaLabel}
        className={cn(
          styles['masonry-container'],
          respectReducedMotion && styles['respect-motion'],
          !isReady && styles.loading,
          className
        )}
        data-testid='masonry-container'
        role='grid'
        style={cssVariables}
        {...props}
      >
        <div className={styles['masonry-grid']} data-testid='masonry-grid'>
          {renderChildren}
        </div>
      </div>
    );
  }
);

Masonry.displayName = 'Masonry';

// ========================================================================================
// EXPORT DEFAULT
// ========================================================================================

export default Masonry;
