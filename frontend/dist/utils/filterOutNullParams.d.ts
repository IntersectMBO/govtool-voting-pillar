/**
 * Filters out null parameters from the original object and returns a new object.
 *
 * @param originalObject - The original object to filter.
 * @param filterOutKeys - An optional array of keys to exclude from the filtering process.
 * @returns The filtered object without null parameters.
 */
export declare const filterOutNullParams: (originalObject?: Record<string, unknown> | undefined | null, filterOutKeys?: string[]) => Record<string, unknown> | null;
