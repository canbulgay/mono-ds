/**
 * Yields to the main thread, allowing the browser to perform other tasks.
 * Uses the scheduler.yield() API if available, otherwise falls back to setTimeout.
 *
 * @example
 * // Yield to the main thread during heavy operations
 * async function processLargeData(items) {
 *   for (let i = 0; i < items.length; i++) {
 *     // Process item
 *     processItem(items[i]);
 *
 *     // Every 100 items, yield to the main thread
 *     if (i % 100 === 0) {
 *       await yieldToMain();
 *     }
 *   }
 * }
 *
 * @returns {Promise<void>} A promise that resolves when execution can continue
 */
export const yieldToMain = (): Promise<void> => {
  // Use scheduler.yield() if available (modern browsers)
  if (
    typeof window !== "undefined" &&
    "scheduler" in window &&
    "yield" in (window as any).scheduler
  ) {
    return (window as any).scheduler.yield();
  }

  // Fall back to setTimeout for older browsers
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
};

/**
 * Creates a yielding version of an async function that periodically yields to the main thread.
 * Useful for wrapping heavy operations to prevent UI blocking.
 *
 * @param fn The function to wrap
 * @param yieldInterval How many iterations to process before yielding (default: 100)
 * @returns A wrapped function that yields periodically
 */
export const createYieldingFunction = <T, R>(
  fn: (item: T) => Promise<R> | R,
  yieldInterval = 100
): ((items: T[]) => Promise<R[]>) => {
  return async (items: T[]): Promise<R[]> => {
    const results: R[] = [];

    for (let i = 0; i < items.length; i++) {
      // Process the current item
      results.push(await fn(items[i]));

      // Yield to main thread based on the specified interval
      if (i > 0 && i % yieldInterval === 0) {
        await yieldToMain();
      }
    }

    return results;
  };
};

/**
 * Controls execution flow to ensure UI responsiveness during heavy operations
 */
export const YieldController = {
  /**
   * Yields to the main thread
   */
  yield: yieldToMain,

  /**
   * Processes an array of items with periodic yielding
   *
   * @param items Array of items to process
   * @param processFn Function to process each item
   * @param yieldInterval How many iterations to process before yielding (default: 50)
   * @returns Array of processed results
   */
  async processWithYield<T, R>(
    items: T[],
    processFn: (item: T, index: number) => Promise<R> | R,
    yieldInterval = 50
  ): Promise<R[]> {
    const results: R[] = [];

    for (let i = 0; i < items.length; i++) {
      // Process the current item
      results.push(await processFn(items[i], i));

      // Yield to main thread based on the specified interval
      if (i > 0 && i % yieldInterval === 0) {
        await this.yield();
      }
    }

    return results;
  },
};
