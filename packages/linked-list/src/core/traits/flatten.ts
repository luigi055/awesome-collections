export interface Flatten<T> {
  /**
   * Returns a new linked list with all sub-linked list elements concatenated into it recursively up to the
   * specified depth.
   *
   * @param depth The maximum recursion depth
   */
  flat(depth: number): Flatten<T>;
}
