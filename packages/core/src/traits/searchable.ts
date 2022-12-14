export interface Searchable<T> {
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
      obj: Searchable<T>
    ) => value is S,
    thisArg?: any
  ): S | undefined;
  find(
    predicate: (value: T, index: number, obj: Searchable<T>) => unknown,
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
    predicate: (value: T, index: number, obj: Searchable<T>) => boolean,
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
    cb: (value: T, index: number, obj: Searchable<T>) => boolean,
    thisArg?: any
  ): boolean;

  /**
   * Determines whether all the members of an linked list satisfy the specified test.
   * @param predicate A function that accepts up to three arguments. The every method calls
   * the predicate function for each element in the linked list until the predicate returns a value
   * which is coercible to the Boolean value false, or until the end of the linked list.
   * @param thisArg An object to which the this keyword can refer in the predicate function.
   * If thisArg is omitted, undefined is used as the this value.
   */
  every<S extends T>(
    predicate: (value: T, index: number, obj: Searchable<T>) => value is S,
    thisArg?: any
  ): this is Searchable<S>;
  every(
    predicate: (value: T, index: number, obj: Searchable<T>) => unknown,
    thisArg?: any
  ): boolean;
  every(
    predicate: (value: T, index: number, obj: Searchable<T>) => boolean,
    thisArg?: any
  ): boolean;
}
