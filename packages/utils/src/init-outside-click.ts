/**
 * Options to initialize an outside-click listener.
 */
interface OutsideClickOptions {
  /** The container element to treat as “inside.” */
  container: HTMLElement;
  /** Callback fired once when a click happens outside `container`. */
  onOutsideClick: () => void;
  /**
   * If `true`, automatically remove the listener after the first outside click.
   * Otherwise you must call the cleanup function manually.
   * @default false
   */
  once?: boolean;
}

/**
 * Attaches a document-level mousedown listener that calls `onOutsideClick()` whenever the user clicks outside of `container`. Returns a cleanup function.
 * This is useful for closing dropdowns, modals, or other UI elements when the user clicks outside of them.
 * * @param options - Configuration for the outside click listener.
 * * @returns An object with a `cleanup` function to remove the listener.
 * * @example
 */
export function initOutsideClick({
  container,
  onOutsideClick,
  once = false,
}: OutsideClickOptions): { cleanup: () => void } {
  const handleClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement | null;
    if (!target || !container.contains(target)) {
      onOutsideClick();
      if (once) cleanup();
    }
  };

  document.addEventListener('mousedown', handleClick);

  function cleanup() {
    document.removeEventListener('mousedown', handleClick);
  }

  return { cleanup };
}
