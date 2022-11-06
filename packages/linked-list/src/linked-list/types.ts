import type * as traits from 'awesome-collections-core';
import { LinkedListDataStructure } from '../core/raw-linked-list';

export type DoublyLinkedList<T> = {
  nodes: LinkedListDataStructure<T>;
  /**
   * @returns the number of elements in the Linked list.
   */
  readonly size: number;

  /**
   * @returns the first element of the linked list
   */
  readonly head: T | undefined;

  /**
   * @returns the last element of the linked list
   */
  readonly tail: T | undefined;

  /**
   * Appends new elements to the end of a linked list, and returns the new length of the linked list.
   * @param items New elements to add to the linked list.
   */
  push(...items: T[]): number;

  /**
   * Inserts new elements at the start of an linked list, and returns the new length of the linked list.
   * @param items Elements to insert at the start of the linked list.
   */
  unshift(...items: T[]): number;

  /**
   * Removes the last element from an linked list and returns it.
   * If the linked list is empty, undefined is returned and the linked list is not modified.
   */
  pop(): T | undefined;

  /**
   * Removes the first element from an linked list and returns it.
   * If the linked list is empty, undefined is returned and the linked list is not modified.
   */
  shift(): T | undefined;

  /**
   * Returns a specified element from the linked list..
   * @returns Returns the element associated with the specified index. If no element is associated with the index, undefined is returned.
   */
  get(index: number): T | undefined;

  /**
   * change the value of an index in the linked list
   * @param index  the index of the element to change value
   * @param value  the new value
   * @returns true if the index is inside of the length of the linked list and was possible to change the element or false if was is not.
   */
  set(index: number, value: T): boolean;

  /**
   * Removes a specified index from the Linked list.
   * @returns Returns the deleted node if an element in the Linked list existed and has been removed, or undefined if the element does not exist.
   */
  delete(index: number): T | undefined;

  /**
   * insert an element in the specified index an linked list.
   * @param index  the index of the element to insert
   * @param value  the value to insert
   * @returns true if the index is inside of the length of the linked list and was possible to insert the element or false if was is not.
   */
  insert(index: number, value: T): boolean;

  /**
   * removes all elements in the linked list
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
