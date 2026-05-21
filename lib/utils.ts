/**
 * Utility to merge class names cleanly and conditionally
 */
export function cn(...inputs: (string | undefined | null | boolean | { [key: string]: boolean | undefined | null })[]) {
  return inputs
    .flatMap((input) => {
      if (!input) return [];
      if (typeof input === 'string') return input.trim().split(/\s+/);
      if (typeof input === 'object') {
        return Object.entries(input)
          .filter(([, value]) => Boolean(value))
          .map(([key]) => key);
      }
      return [];
    })
    .filter(Boolean)
    .join(' ');
}
