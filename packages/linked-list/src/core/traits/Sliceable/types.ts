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
}
