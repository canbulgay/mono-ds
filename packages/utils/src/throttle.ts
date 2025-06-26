export function throttle<T extends (...args: any[]) => void>(
  func: T,
  wait: number,
  options: { leading?: boolean; trailing?: boolean } = {}
): T {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  let lastArgs: any[] | null = null;

  const throttled = function (this: any, ...args: any[]) {
    if (!timeout) {
      if (options.leading) {
        func.apply(this, args);
      }
      lastArgs = args;
      timeout = setTimeout(() => {
        if (options.trailing && lastArgs) {
          func.apply(this, lastArgs);
        }
        timeout = null;
        lastArgs = null;
      }, wait);
    } else {
      lastArgs = args;
    }
  };

  return throttled as T;
}
