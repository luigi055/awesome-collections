import { LinkedList } from 'awesome-collections-linked-list';
import { AbstractDeque } from './types';

export class Deque<T = any> implements AbstractDeque<T> {
  #linkedList: LinkedList<T>;
  /**
   * Check if the argument is an deque
   * @returns true if the argument is a deque, otherwise false
   */
  static isDeque(linkedList: any): linkedList is LinkedList<any> {
    return linkedList instanceof Deque;
  }

  constructor() {
    this.#linkedList = new LinkedList<T>();
  }

  public get size(): number {
    return this.#linkedList.size;
  }

  public unshift(value: T): number {
    return this.#linkedList.unshift(value);
  }

  public shift(): T | undefined {
    const shiftedNode = this.#linkedList.shift();
    if (shiftedNode === undefined) return undefined;
    return shiftedNode;
  }

  public pop(): T | undefined {
    return this.#linkedList.pop();
  }

  public push(value: T): number {
    return this.#linkedList.push(value);
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
