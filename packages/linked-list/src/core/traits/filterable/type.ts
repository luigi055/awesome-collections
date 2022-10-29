export interface Filterable<T = any> {
  /**
   * Returns the elements of an linked list that meet the condition specified in a callback function.
   * @param predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the linked list.
   * @param thisArg An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.
   */
  filter<S extends T>(
    predicate: (value: T, index: number, obj: Filterable<T>) => value is S,
    thisArg?: any
  ): Filterable<S>;
  filter(
    predicate: (value: T, index: number, obj: Filterable<T>) => unknown,
    thisArg?: any
  ): Filterable<T>;
  filter(
    predicate: (value: T, index: number, obj: Filterable<T>) => boolean,
    thisArg?: any
  ): Filterable<T>;
}
