import { emptyString } from "./safeString";

/**
 * Options for formatting price values
 */
type PriceSeparatorOptions = {
  /** The value to be formatted. Can be a string or number */
  value?: string | number | null;
  /** Whether to append "ریال" (Rial) to the formatted price. Defaults to true */
  withRial?: boolean;
  /** Whether to return "0" for negative values. Defaults to false */
  showZero?: boolean;
};

/**
 * Formats a numeric value as a price string with thousand separators and optional Rial currency suffix.
 *
 * @param options - Configuration options for price formatting
 * @param options.value - The value to be formatted (string or number)
 * @param options.withRial - Whether to append "ریال" to the formatted price (default: true)
 * @param options.showZero - Whether to return "0" for negative values (default: false)
 * @returns Formatted price string
 *
 * @example
 * // Basic usage
 * priceSeparator({ value: 1000000 }) // Returns "1,000,000 ریال"
 *
 * @example
 * // Without Rial suffix
 * priceSeparator({ value: 1000000, withRial: false }) // Returns "1,000,000"
 *
 * @example
 * // Handling negative values
 * priceSeparator({ value: -1000, showZero: true }) // Returns "0"
 * priceSeparator({ value: -1000, showZero: false }) // Returns "-1,000 ریال"
 *
 * @example
 * // Handling invalid input
 * priceSeparator({ value: "invalid" }) // Returns "0"
 * priceSeparator({ value: undefined }) // Returns ""
 */

export const priceSeparator = ({
  value,
  withRial = true,
  showZero = false,
}: PriceSeparatorOptions): string => {
  if (value === undefined) {
    return emptyString();
  }

  const numericValue = Number(value);

  if (isNaN(numericValue)) {
    return "0";
  }

  if (showZero && numericValue < 0) {
    return "0";
  }

  const formattedPrice = numericValue.toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return withRial ? `${formattedPrice} ریال` : formattedPrice;
};
