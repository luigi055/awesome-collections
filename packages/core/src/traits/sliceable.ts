export interface Sliceable<T = any> {
  /**
   * Returns a copy of a section of an linked list.
   * For both start and end, a negative index can be used to indicate an offset from the end of the linked list.
   * For example, -2 refers to the second to last element of the linked list.
   * @param start The beginning index of the specified portion of the linked list.
   * If start is undefined, then the slice begins at index 0.
   * @param end The end index of the specified portion of the linked list. This is exclusive of the element at the index 'end'.
   * If end is undefined, then the slice extends to the end of the linked list.
   */
  slice(start: number, end: number): Sliceable<T>;

  /**
   *
   * @returns a copy of the linked list.
   *
   * convenient way to express copy of the entire element before mutations
   * this is just a mask for the **shift** method without arguments
   */
  copy(): void;

  /**
   * Removes elements from a linked list and, if necessary, inserts new elements in their place, returning the deleted elements.
   * @param start The zero-based location in the linked list from which to start removing elements.
   * @param deleteCount The number of elements to remove.
   * @returns An linked list containing the elements that were deleted.
   */
  splice(start: number, deleteCount?: number): Sliceable<T>;
  /**
   * Removes elements from an linked list and, if necessary, inserts new elements in their place, returning the deleted elements.
   * @param start The zero-based location in the linked list from which to start removing elements.
   * @param deleteCount The number of elements to remove.
   * @param items Elements to insert into the linked list in place of the deleted elements.
   * @returns A linked list containing the elements that were deleted.
   */
  splice(start: number, deleteCount: number, ...items: T[]): Sliceable<T>;
}
