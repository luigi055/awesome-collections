export interface BasicLinkedList<T = any> {
  /**
   * @returns the number of elements in the Linked list.
   */
  readonly size: number;

  /**
   * @returns the first element of the linked list
   */
  readonly head: T | undefined;

  /**
   * @returns the last element of the linked list
   */
  readonly tail: T | undefined;

  /**
   * Appends new elements to the end of a linked list, and returns the new length of the linked list.
   * @param items New elements to add to the linked list.
   */
  push(...items: T[]): number;

  /**
   * Inserts new elements at the start of an linked list, and returns the new length of the linked list.
   * @param items Elements to insert at the start of the linked list.
   */
  unshift(...items: T[]): number;

  /**
   * Removes the last element from an linked list and returns it.
   * If the linked list is empty, undefined is returned and the linked list is not modified.
   */
  pop(): T | undefined;

  /**
   * Removes the first element from an linked list and returns it.
   * If the linked list is empty, undefined is returned and the linked list is not modified.
   */
  shift(): T | undefined;
}
