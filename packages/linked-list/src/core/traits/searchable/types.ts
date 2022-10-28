import { DoublyLinkedList } from './../../../linked-list/types';

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
  indexOf(searchElement: T, fromIndex: number): number;

  /**
   * Returns the index of the last occurrence of a specified value in an Linked List, or -1 if it is not present.
   * @param searchElement The value to locate in the Linked List.
   * @param fromIndex The Linked List index at which to begin searching backward. If fromIndex is omitted, the search starts at the last index in the LinkedList.
   */
  lastIndexOf(searchElement: T, fromIndex: number): number;

  /**
   * Determines whether an linked list includes a certain element, returning true or false as appropriate.
   * @param searchElement The element to search for.
   * @param fromIndex The position in this linked list at which to begin searching for searchElement.
   */
  includes<T>(searchElement: T, fromIndex: number): boolean;

  /**
   * Returns the value of the first element in the linked list where predicate is true, and undefined
   * otherwise.
   * @param predicate find calls predicate once for each element of the linked list, in ascending
   * order, until it finds one where predicate returns true. If such an element is found, find
   * immediately returns that element value. Otherwise, find returns undefined.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  find<S extends T>(
    predicate: (
      this: void,
      value: T,
      index: number,
      obj: DoublyLinkedList<T>
    ) => value is S,
    thisArg?: any
  ): S | undefined;
  find(
    predicate: (value: T, index: number, obj: DoublyLinkedList<T>) => unknown,
    thisArg?: any
  ): T | undefined;

  /**
   * Returns the index of the first element in the linked list where predicate is true, and -1
   * otherwise.
   * @param predicate find calls predicate once for each element of the linked list, in ascending
   * order, until it finds one where predicate returns true. If such an element is found,
   * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
   * @param thisArg If provided, it will be used as the this value for each invocation of
   * predicate. If it is not provided, undefined is used instead.
   */
  findIndex(
    predicate: (value: T, index: number, obj: DoublyLinkedList<T>) => boolean,
    thisArg?: any
  ): number;

  /**
   * Determines whether the specified callback function returns true for any element of an linked list.
   * @param predicate A function that accepts up to three arguments. The some method calls
   * the predicate function for each element in the linked list until the predicate returns a value
   * which is coercible to the Boolean value true, or until the end of the linked list.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  some(
    cb: (value: T, index: number, obj: DoublyLinkedList<T>) => boolean,
    thisArg?: any
  ): boolean;
}
