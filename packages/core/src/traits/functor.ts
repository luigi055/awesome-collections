export interface Functor<T = any> {
  /**
   * Calls a defined callback function on each element of an linked list, and returns an linked list that contains the results.
   * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the linked list.
   * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  map<U>(
    callbackfn: (value: T, index?: number, linkedList?: Functor<T>) => U,
    thisArg?: any
  ): Functor<U>;
}
