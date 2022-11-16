import { LinkedList } from 'awesome-collections-linked-list';
import { AbstractDeque } from './types';

export class Deque<T = any> implements AbstractDeque<T> {
  #linkedList: LinkedList<T>;
  /**
   * Check if the argument is an deque
   * @returns true if the argument is a deque, otherwise false
   */
  static isDeque(object: any): object is LinkedList<any> {
    return object instanceof Deque;
  }

  constructor(iterator?: Iterable<T>) {
    this.#linkedList = new LinkedList<T>(iterator);
  }

  public [Symbol.iterator]() {
    return this.#linkedList.values();
  }

  public values() {
    return this.#linkedList.values();
  }
  public entries() {
    return this.#linkedList.entries();
  }
  public keys() {
    return this.#linkedList.keys();
  }

  public get size(): number {
    return this.#linkedList.size;
  }

  public unshift(...items: T[]): number {
    return this.#linkedList.unshift(...items);
  }

  public shift(): T | undefined {
    const shiftedNode = this.#linkedList.shift();
    if (shiftedNode === undefined) return undefined;
    return shiftedNode;
  }

  public pop(): T | undefined {
    return this.#linkedList.pop();
  }

  public push(...items: T[]): number {
    return this.#linkedList.push(...items);
  }

  public peekFirst(): T | undefined {
    const { head } = this.#linkedList;

    return head ? head : undefined;
  }

  public peekLast(): T | undefined {
    const { tail } = this.#linkedList;

    return tail ? tail : undefined;
  }
}
