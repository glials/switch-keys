/**
 * Metadata for a keyboard layout template.
 */
export interface KeyboardMetadata {
  id: string;
  name: string;
  vendorId?: string;
  productIds?: string[];
  default?: boolean;
}

/**
 * Index of all available keyboard layouts.
 */
export interface KeyboardIndex {
  keyboards: KeyboardMetadata[];
}
