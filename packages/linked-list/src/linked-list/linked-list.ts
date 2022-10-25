import type { DoublyLinkedList } from './types';
import { RawLinkedList } from '../core/raw-linked-list';
import * as iterable from '../core/traits/iterable';
import * as basicLinkedList from '../core/traits/basic-linked-list';
import { slice, Sliceable } from '../core/traits/Sliceable';
export class LinkedList<T = any> implements DoublyLinkedList<T> {
  #rawLinkedList = new RawLinkedList<T>();

  /**
   * Check if the argument is an linked list
   * @returns true if the argument is a linked list, otherwise false
   */
  static isLinkedList(linkedList: any): linkedList is LinkedList<any> {
    return linkedList instanceof LinkedList;
  }

  constructor(iterator?: Iterable<T> | null) {
    if (iterator) {
      for (const value of iterator) {
        this.push(value);
      }
    }
  }

  public get size() {
    return this.#rawLinkedList.length;
  }

  public get head() {
    return this.#rawLinkedList.head?.value;
  }

  public get tail() {
    return this.#rawLinkedList.tail?.value;
  }

  [Symbol.iterator]() {
    return iterable.values<T>(this.#rawLinkedList);
  }

  public values() {
    return iterable.values<T>(this.#rawLinkedList);
  }

  public keys() {
    return iterable.keys<T>(this.#rawLinkedList);
  }

  public entries() {
    return iterable.entries<T>(this.#rawLinkedList);
  }

  public push(...items: T[]) {
    return basicLinkedList.push<T>(this.#rawLinkedList, ...items);
  }

  public unshift(...items: T[]) {
    return basicLinkedList.unshift<T>(this.#rawLinkedList, ...items);
  }

  public pop() {
    return basicLinkedList.pop<T>(this.#rawLinkedList);
  }

  public shift() {
    return basicLinkedList.shift<T>(this.#rawLinkedList);
  }

  public get(index: number) {
    return basicLinkedList.get<T>(this.#rawLinkedList, index);
  }

  public set(index: number, value: T) {
    return basicLinkedList.set<T>(this.#rawLinkedList, index, value);
  }

  public delete(index: number) {
    return basicLinkedList.deleteValue<T>(this.#rawLinkedList, index);
  }

  public insert(index: number, value: T) {
    return basicLinkedList.insert<T>(this.#rawLinkedList, index, value);
  }

  public clear() {
    return basicLinkedList.clear(this.#rawLinkedList);
  }

  public slice(
    start = 0,
    end: number = this.#rawLinkedList.length
  ): LinkedList<T> {
    const newLinkedList = new LinkedList<T>();
    const addValue = (currentValue: T) => newLinkedList.push(currentValue);
    slice(this.#rawLinkedList, addValue, start, end);

    return newLinkedList;
  }

  public copy(): LinkedList<T> {
    return this.slice();
  }
}
