type ClassValue = string | false | null | undefined

/** Une clases de CSS ignorando los valores vacíos o falsos. */
export function cx(...values: ClassValue[]): string {
  return values.filter(Boolean).join(' ')
}
