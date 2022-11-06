export interface ForEach<T = any> {
  /**
   * Performs the specified action for each element in an linked list.
   * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the linked list.
   * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
   */
  forEach(
    callbackfn: (value: T, index: number, linkedList: ForEach<T>) => void,
    thisArg?: any
  ): void;
}
