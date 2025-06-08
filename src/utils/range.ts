// Utility function to generate an array of numbers from 1 to max (inclusive)
export function range(max: number): number[] {
  return Array.from({ length: max }, (_, i) => i + 1);
}
