/**
 * Filters the updatable protocol parameters based on the original object,
 * reference object, and optional filter-out keys.
 *
 * @param originalObject - The original object containing the protocol parameters.
 * @param referenceObject - The reference object containing the updated protocol parameters.
 * @param filterOutKeys - An optional array of keys to be excluded from the final object.
 * @returns The filtered object containing the updatable protocol parameters or null.
 */
export declare const filterUpdatableProtocolParams: (originalObject?: Record<string, unknown> | null, referenceObject?: Record<string, unknown> | null, filterOutKeys?: string[]) => Record<string, unknown> | null;
