/**
 * Sleep for a specified amount of time.
 *
 * @param wait - The number of milliseconds to sleep.
 * @returns A promise that resolves after the specified time.
 */
export const sleep = async (wait: number) =>
  new Promise(resolve => setTimeout(resolve, wait));
