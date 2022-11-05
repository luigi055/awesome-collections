export interface FlatMap<T> {
  /**
   * Calls a defined callback function on each element of an linked list. Then, flattens the result into
   * a new linked list.
   * This is identical to a map followed by flat with depth 1.
   *
   * @param callback A function that accepts up to three arguments. The flatMap method calls the
   * callback function one time for each element in the linked list.
   * @param thisArg An object to which the this keyword can refer in the callback function. If
   * thisArg is omitted, undefined is used as the this value.
   */
  flatMap<U, This = undefined>(
    callback: (
      this: This,
      value: T,
      index?: number,
      linkedList?: FlatMap<T>
    ) => U | FlatMap<U>,
    thisArg?: This
  ): FlatMap<U>;
}
