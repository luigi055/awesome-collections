export interface Reducible<T = any> {
  /**
   * Calls the specified callback function for all the elements in an linked list. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
   * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the linked list.
   * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an linked list value.
   */
  reduce(
    callbackfn: (
      previousValue: T,
      currentValue: T,
      currentIndex: number,
      Reducible: Reducible<T>
    ) => T
  ): T;
  reduce(
    callbackfn: (
      previousValue: T,
      currentValue: T,
      currentIndex: number,
      Reducible: Reducible<T>
    ) => T,
    initialValue: T
  ): T;
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: T,
      currentIndex: number,
      Reducible: Reducible<T>
    ) => U,
    initialValue: U
  ): U;
  reduce<U>(
    callbackfn: (
      previousValue: U | T,
      currentValue: T,
      currentIndex: number,
      Reducible: Reducible<T>
    ) => U | T,
    initialValue?: U | T
  ): U | T;
}
