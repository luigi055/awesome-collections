export interface Concatenate<T> {
  /**
   * Combines two or more linked lists.
   * This method returns a new linked list without modifying any existing linked lists.
   * @param items Additional linked lists and/or items to add to the end of the linked list.
   */
  concat(...items: (Concatenate<T> | T)[]): Concatenate<T>;
}
