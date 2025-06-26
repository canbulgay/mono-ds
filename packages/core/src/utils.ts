/**
 * Core utility functions for the design system
 */

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function formatters() {
  return {
    // Placeholder for formatting utilities
  };
}
