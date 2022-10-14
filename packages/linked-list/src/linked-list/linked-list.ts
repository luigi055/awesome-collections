import { DoublyLinkedList } from './types';
import { RawLinkedList } from '../core/raw-linked-list';
import { pop, push, unshift, shift } from '../core/traits/basic-linked-list';

export class LinkedList<T = any> implements DoublyLinkedList {
  #rawLinkedList = new RawLinkedList<T>();

  /**
   * Check if the argument is an linked list
   * @returns true if the argument is a linked list, otherwise false
   */
  static isLinkedList(linkedList: any): linkedList is LinkedList<any> {
    return linkedList instanceof LinkedList;
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

  public push(...items: T[]) {
    return push<T>(this.#rawLinkedList, ...items);
  }

  public unshift(...items: T[]) {
    return unshift<T>(this.#rawLinkedList, ...items);
  }

  public pop() {
    return pop<T>(this.#rawLinkedList);
  }

  public shift() {
    return shift<T>(this.#rawLinkedList);
  }
}
