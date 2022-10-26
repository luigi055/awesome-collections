export interface Searchable<T> {
  /**
   * Returns the item located at the specified index.
   * @param index The zero-based index of the desired code unit. A negative index will count back from the last item.
   */
  at<T = any>(index: number): T | undefined;

  /**
   * Returns the index of the first occurrence of a value in an linked list, or -1 if it is not present.
   * @param searchElement The value to locate in the linked list.
   * @param fromIndex The linked list index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
   */
  indexOf<T = any>(searchElement: T, fromIndex?: number): number;
}
