import type * as traits from 'awesome-collections-core';
import { LinkedListDataStructure } from 'awesome-collections-core';

export type AbstractDeque<T> = {
  nodes: LinkedListDataStructure<T>;
  /**
   * @returns the number of elements in the deque.
   */
  readonly size: number;

  /**
   * @returns the first element of the deque
   */
  peekFirst(): T | undefined;

  /**
   * @returns the last element of the deque
   */
  peekLast(): T | undefined;

  /**
   * Appends new elements to the end of a deque, and returns the new length of the deque.
   * @param items New elements to add to the deque.
   */
  push(...items: T[]): number;

  /**
   * Inserts new elements at the start of an deque, and returns the new length of the deque.
   * @param items Elements to insert at the start of the deque.
   */
  unshift(...items: T[]): number;

  /**
   * Removes the last element from an deque and returns it.
   * If the deque is empty, undefined is returned and the deque is not modified.
   */
  pop(): T | undefined;

  /**
   * Removes the first element from an deque and returns it.
   * If the deque is empty, undefined is returned and the deque is not modified.
   */
  shift(): T | undefined;

  /**
   * Returns a specified element from the deque..
   * @returns Returns the element associated with the specified index. If no element is associated with the index, undefined is returned.
   */
  get(index: number): T | undefined;

  /**
   * change the value of an index in the deque
   * @param index  the index of the element to change value
   * @param value  the new value
   * @returns true if the index is inside of the length of the deque and was possible to change the element or false if was is not.
   */
  set(index: number, value: T): boolean;

  /**
   * Removes a specified index from the deque.
   * @returns Returns the deleted node if an element in the deque existed and has been removed, or undefined if the element does not exist.
   */
  delete(index: number): T | undefined;

  /**
   * insert an element in the specified index an deque.
   * @param index  the index of the element to insert
   * @param value  the value to insert
   * @returns true if the index is inside of the length of the deque and was possible to insert the element or false if was is not.
   */
  insert(index: number, value: T): boolean;

  /**
   * removes all elements in the deque
   */
  clear(): void;
} & traits.IterableDataStructure<T> &
  traits.Sliceable<T> &
  traits.Searchable<T> &
  traits.Indexable<T> &
  traits.Functor<T> &
  traits.ForEach<T> &
  traits.Fillable<T> &
  traits.Filterable<T> &
  traits.Sortable<T> &
  traits.Reducible<T> &
  traits.Reversible<T> &
  traits.Concatenate<T> &
  traits.Flatten<T> &
  traits.FlatMap<T> &
  traits.Format;
