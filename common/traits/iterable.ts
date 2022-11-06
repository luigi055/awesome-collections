export interface IterableDataStructure<T> {
  [Symbol.iterator](): Iterable<T> & Iterator<T>;

  /**
   * Returns an iterable of key, value pairs for every entry in the linked list
   */
  entries(): Iterable<[number, T]> & Iterator<[number, T]>;

  /**
   * Returns an iterable of keys in the linked list
   */
  keys(): Iterable<number> & Iterator<number>;

  // /**
  //  * Returns an iterable of values in the linked list
  //  */
  values(): Iterable<T> & Iterator<T>;
}

export type Entry<T = any> = [number, T];
