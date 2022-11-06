export interface Fillable<T> {
  /**
   * Changes all linked list elements from `start` to `end` index to a static `value` and returns the modified linked list
   * @param value value to fill linked list section with
   * @param start index to start filling the linked list at. If start is negative, it is treated as
   * length+start where length is the length of the linked list.
   * @param end index to stop filling the linked list at. If end is negative, it is treated as
   * length+end.
   */
  fill(value: T, start: number, end: number): Fillable<T>;
}
