export interface Reversible<T> {
  /**
   * Reverses the elements in an linked list in place.
   * This method mutates the linked list and returns a reference to the same linked list.
   */
  reverse(): Reversible<T>;
}
