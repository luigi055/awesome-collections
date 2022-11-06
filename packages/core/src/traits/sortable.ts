export interface Sortable<T> {
  /**
   * Sorts an linked list in place.
   * This method mutates the linked list and returns a reference to the same linked list.
   * @param compareFn Function used to determine the order of the elements. It is expected to return
   * a negative value if the first argument is less than the second argument, zero if they're equal, and a positive
   * value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
   * ```ts
   * new LinkedList([11,2,22,1]).sort((a, b) => a - b)
   * ```
   */
  sort(compareFn?: (a: T, b: T) => number): this;
}
