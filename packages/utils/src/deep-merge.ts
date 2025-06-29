type IIsObject = (item: unknown) => item is Record<string, unknown>;

type IObject = Record<string, unknown>;

type IDeepMerge = (target: IObject, ...sources: IObject[]) => IObject;

/**
 * @description Method to check if an item is an object. Date and Function are considered
 * an object, so if you need to exclude those, please update the method accordingly.
 * @param item - The item that needs to be checked
 * @return {Boolean} Whether or not @item is an object
 */
export const isObject: IIsObject = (
  item: unknown
): item is Record<string, unknown> => {
  return item !== null && typeof item === 'object' && !Array.isArray(item);
};

/**
 * @description Method to perform a deep merge of objects
 * @param {Object} target - The targeted object that needs to be merged with the supplied @sources
 * @param {Array<Object>} sources - The source(s) that will be used to update the @target object
 * @return {Object} The final merged object
 */
export const deepMerge: IDeepMerge = (
  target: IObject,
  ...sources: IObject[]
): IObject => {
  // return the target if no sources passed
  if (!sources.length) {
    return target;
  }

  const result: IObject = { ...target };

  if (isObject(result)) {
    const len: number = sources.length;

    for (let i = 0; i < len; i += 1) {
      const source: IObject | undefined = sources[i];

      if (source && isObject(source)) {
        for (const key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            const sourceValue = source[key];
            const resultValue = result[key];

            if (isObject(sourceValue)) {
              if (!resultValue || !isObject(resultValue)) {
                result[key] = {};
              }
              result[key] = deepMerge(result[key] as IObject, sourceValue);
            } else {
              if (Array.isArray(resultValue) && Array.isArray(sourceValue)) {
                // concatenate the two arrays and remove any duplicate primitive values
                const combinedArray = (resultValue as unknown[]).concat(
                  sourceValue as unknown[]
                );
                result[key] = Array.from(new Set(combinedArray));
              } else {
                result[key] = sourceValue;
              }
            }
          }
        }
      }
    }
  }

  return result;
};
