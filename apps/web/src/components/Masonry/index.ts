/**
 * High-Performance Masonry Layout System
 *
 * A production-ready, framework-agnostic masonry layout component
 * optimized for performance, accessibility, and developer experience.
 *
 * @example
 * ```tsx
 * import { Masonry, MasonryItem } from '@/components/ui/Masonry';
 *
 * <Masonry
 *   config={{
 *     columns: { mobile: 1, tablet: 2, desktop: 3, wide: 4 },
 *     gap: { mobile: 16, tablet: 20, desktop: 24, wide: 28 }
 *   }}
 *   ariaLabel="Product gallery"
 * >
 *   {items.map(item => (
 *     <MasonryItem key={item.id}>
 *       <ProductCard {...item} />
 *     </MasonryItem>
 *   ))}
 * </Masonry>
 * ```
 */

export { Masonry, MasonryItem } from './Masonry';
export type { MasonryProps, MasonryItemProps, MasonryConfig } from './Masonry';

// Re-export as default for convenience
export { Masonry as default } from './Masonry';
