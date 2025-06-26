// Write a function that handles capitilize first letter of a string using typescript types for the input and output.
/**
 * Capitalizes the first letter of a string
 *
 * @param str - The string to capitalize
 * @returns The string with the first letter capitalized
 *
 * @example
 * capitalizeFirstLetter('hello') // Returns 'Hello'
 * capitalizeFirstLetter('world') // Returns 'World'
 */
export function capitalizeFirstLetter(str: string): string {
  if (typeof str !== "string" || str.length === 0) {
    return str; // Return the original string if it's not valid
  }

  return str.charAt(0).toUpperCase() + str.slice(1);
}
