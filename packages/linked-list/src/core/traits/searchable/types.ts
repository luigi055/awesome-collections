export interface Searchable<T> {
  /**
   * Returns the item located at the specified index.
   * @param index The zero-based index of the desired code unit. A negative index will count back from the last item.
   */
  at(index: number): T | undefined;

  /**
   * Returns the index of the first occurrence of a value in an linked list, or -1 if it is not present.
   * @param searchElement The value to locate in the linked list.
   * @param fromIndex The linked list index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
   */
  indexOf(searchElement: T, fromIndex?: number): number;

  /**
   * Returns the index of the last occurrence of a specified value in an Linked List, or -1 if it is not present.
   * @param searchElement The value to locate in the Linked List.
   * @param fromIndex The Linked List index at which to begin searching backward. If fromIndex is omitted, the search starts at the last index in the LinkedList.
   */
  lastIndexOf(searchElement: T, fromIndex: number): number;
}
