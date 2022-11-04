export interface Format {
  /**
   * Returns a string representation of an linked list.
   */
  toString(): string;

  /**
   * Adds all the elements of an linked list into a string, separated by the specified separator string.
   * @param separator A string used to separate one element of the linked list from the next in the resulting string. If omitted, the linked list elements are separated with a comma.
   */
  join(separator?: string): string;
}
