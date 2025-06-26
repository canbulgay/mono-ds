/**
 * Checks if a given string is a valid JSON string
 *
 * @param str - The string to be validated as JSON
 * @returns boolean - Returns true if the string is valid JSON, false otherwise
 *
 * @example
 * isJsonString('{"name": "John"}') // Returns true
 * isJsonString('invalid json') // Returns false
 * isJsonString(123) // Returns false (not a string)
 */
export function isJsonString(str: string) {
  try {
    if (typeof str !== "string") {
      return false;
    }
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

/**
 * Safely parses a JSON string into an object
 *
 * @param str - The JSON string to parse
 * @param throwError - If true, will throw an error on parsing failure; otherwise returns null
 * @returns The parsed JSON object or null if parsing fails
 *
 * @example
 * parseJson('{"name": "John"}') // Returns { name: 'John' }
 * parseJson('invalid json') // Returns null
 */
export function parseJson(str: string, throwError = false) {
  try {
    return JSON.parse(str);
  } catch (e) {
    if (throwError) {
      throw new Error(`Invalid JSON string: ${str}`);
    }
    return null;
  }
}

/**
 * Compares two values by converting them to JSON strings
 * Useful for deep equality comparison of objects and arrays
 *
 * @param a - First value to compare
 * @param b - Second value to compare
 * @returns boolean - True if the JSON string representations are identical
 *
 * @example
 * compareJson({a: 1}, {a: 1}) // Returns true
 * compareJson([1,2], [1,2]) // Returns true
 * compareJson({a: 1}, {a: 2}) // Returns false
 */
export function compareJson(a: any, b: any) {
  return JSON.stringify(a) === JSON.stringify(b);
}
