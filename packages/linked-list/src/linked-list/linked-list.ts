import type { DoublyLinkedList } from './types';
import { RawLinkedList } from '../core/raw-linked-list';
import * as methods from '../core/methods';

export class LinkedList<T = any> implements DoublyLinkedList<T> {
  rawLinkedList = new RawLinkedList<T>();

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
    return this.rawLinkedList.length;
  }

  public get head() {
    return this.rawLinkedList.head?.value;
  }

  public get tail() {
    return this.rawLinkedList.tail?.value;
  }

  [Symbol.iterator]() {
    return methods.values<T>(this.rawLinkedList);
  }

  public values() {
    return methods.values<T>(this.rawLinkedList);
  }

  public keys() {
    return methods.keys<T>(this.rawLinkedList);
  }

  public entries() {
    return methods.entries<T>(this.rawLinkedList);
  }

  public push(...items: T[]) {
    return methods.push<T>(this.rawLinkedList, ...items);
  }

  public unshift(...items: T[]) {
    return methods.unshift<T>(this.rawLinkedList, ...items);
  }

  public pop() {
    return methods.pop<T>(this.rawLinkedList);
  }

  public shift() {
    return methods.shift<T>(this.rawLinkedList);
  }

  public get(index: number) {
    return methods.get<T>(this.rawLinkedList, index);
  }

  public set(index: number, value: T) {
    return methods.set<T>(this.rawLinkedList, index, value);
  }

  public delete(index: number) {
    return methods.deleteValue<T>(this.rawLinkedList, index);
  }

  public insert(index: number, value: T) {
    return methods.insert<T>(this.rawLinkedList, index, value);
  }

  public forEach(
    callbackfn: (value: T, index: number, linkedList: LinkedList<T>) => void,
    thisArg?: any
  ): void {
    methods.forEach.bind(this)<T>(this.rawLinkedList, callbackfn, thisArg);
  }

  public clear() {
    return methods.clear(this.rawLinkedList);
  }

  public slice(
    start = 0,
    end: number = this.rawLinkedList.length
  ): LinkedList<T> {
    const newLinkedList = new LinkedList<T>();
    const addValue = (currentValue: T) => newLinkedList.push(currentValue);
    methods.slice(this.rawLinkedList, addValue, start, end);

    return newLinkedList;
  }

  public copy(): LinkedList<T> {
    return this.slice();
  }

  public at(index: number) {
    return methods.at(this.rawLinkedList, index);
  }

  public indexOf<T = any>(searchElement: T, fromIndex = 0): number {
    return methods.indexOf(this.rawLinkedList, searchElement, fromIndex);
  }

  public lastIndexOf(searchElement: T, fromIndex = this.size - 1): number {
    return methods.lastIndexOf(this.rawLinkedList, searchElement, fromIndex);
  }

  public includes<T>(searchElement: T, fromIndex = 0): boolean {
    return methods.includes(this.rawLinkedList, searchElement, fromIndex);
  }

  public find<S extends T>(
    predicate: (
      this: void,
      value: T,
      index: number,
      obj: LinkedList<T>
    ) => value is S,
    thisArg?: any
  ): S | undefined;
  public find(
    predicate: (value: T, index: number, obj: LinkedList<T>) => unknown,
    thisArg?: any
  ): T | undefined;
  public find(
    predicate: (value: T, index: number, obj: LinkedList<T>) => boolean,
    thisArg?: any
  ) {
    const find = methods.findValue.bind(this);
    return find<T>(this.rawLinkedList, predicate, thisArg)[1];
  }

  public findIndex(
    predicate: (value: T, index: number, obj: LinkedList<T>) => boolean,
    thisArg?: any
  ): number {
    const find = methods.findValue.bind(this);
    return find<T>(this.rawLinkedList, predicate, thisArg)[0];
  }

  public some(
    cb: (value: T, index: number, obj: LinkedList<T>) => boolean,
    thisArg?: any
  ): boolean {
    return this.findIndex(cb, thisArg) > -1;
  }

  public every<S extends T>(
    predicate: (value: T, index: number, obj: LinkedList<T>) => value is S,
    thisArg?: any
  ): this is LinkedList<S>;
  public every(
    predicate: (value: T, index: number, obj: LinkedList<T>) => unknown,
    thisArg?: any
  ): boolean;
  public every(
    predicate: (value: T, index: number, obj: LinkedList<T>) => boolean,
    thisArg?: any
  ): boolean {
    const every = methods.every.bind(this);

    return every<T>(this.rawLinkedList, predicate, thisArg);
  }

  map<U>(
    callbackfn: (
      value: T,
      index?: number | undefined,
      linkedList?: DoublyLinkedList<T> | undefined
    ) => U,
    thisArg?: any
  ): DoublyLinkedList<U> {
    const newLinkedList = new LinkedList<U>();
    const addValue = (currentValue: U) => newLinkedList.push(currentValue);
    const map = methods.map.bind(this);
    map<T, U>(this.rawLinkedList, addValue, callbackfn, thisArg);

    return newLinkedList;
  }

  public filter<S extends T>(
    predicate: (value: T, index: number, obj: LinkedList<T>) => value is S,
    thisArg?: any
  ): LinkedList<S>;
  public filter(
    predicate: (value: T, index: number, obj: LinkedList<T>) => unknown,
    thisArg?: any
  ): LinkedList<T>;
  public filter(
    predicate: (value: T, index: number, obj: LinkedList<T>) => boolean,
    thisArg?: any
  ): LinkedList<T> {
    const result = new LinkedList<T>();
    const addValue = (currentValue: T) => result.push(currentValue);
    const filter = methods.filter.bind(this);
    filter<T>(this.rawLinkedList, addValue, predicate, thisArg);

    return result;
  }

  sort(compareFn?: ((a: T, b: T) => number) | undefined): this {
    methods.sort<T>(this.rawLinkedList, compareFn);

    return this;
  }

  public reduce(
    callbackfn: (
      previousValue: T,
      currentValue: T,
      currentIndex: number,
      LinkedList: LinkedList<T>
    ) => T
  ): T;
  public reduce(
    callbackfn: (
      previousValue: T,
      currentValue: T,
      currentIndex: number,
      LinkedList: LinkedList<T>
    ) => T,
    initialValue: T
  ): T;
  public reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: T,
      currentIndex: number,
      LinkedList: LinkedList<T>
    ) => U,
    initialValue: U
  ): U;
  public reduce<U>(
    callbackfn: (
      previousValue: U | T,
      currentValue: T,
      currentIndex: number,
      LinkedList: LinkedList<T>
    ) => U | T,
    initialValue?: U | T
  ): U | T {
    const reduce = methods.reduce.bind(this);
    return arguments.length === 1
      ? reduce<T, U>(this.rawLinkedList, callbackfn)
      : reduce<T, U>(this.rawLinkedList, callbackfn, initialValue);
  }

  public reduceRight(
    callbackfn: (
      previousValue: T,
      currentValue: T,
      currentIndex: number,
      LinkedList: LinkedList<T>
    ) => T
  ): T;
  public reduceRight(
    callbackfn: (
      previousValue: T,
      currentValue: T,
      currentIndex: number,
      LinkedList: LinkedList<T>
    ) => T,
    initialValue: T
  ): T;
  public reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: T,
      currentIndex: number,
      LinkedList: LinkedList<T>
    ) => U,
    initialValue: U
  ): U;
  public reduceRight<U>(
    callbackfn: (
      previousValue: U | T,
      currentValue: T,
      currentIndex: number,
      LinkedList: LinkedList<T>
    ) => U | T,
    initialValue?: U | T
  ): U | T {
    const reduceRight = methods.reduceRight.bind(this);
    return arguments.length === 1
      ? reduceRight<T, U>(this.rawLinkedList, callbackfn)
      : reduceRight<T, U>(this.rawLinkedList, callbackfn, initialValue);
  }

  public join(separator = ','): string {
    return methods.join(this.rawLinkedList, separator);
  }

  public toString(): string {
    return methods.toString(this.rawLinkedList);
  }

  public reverse(): this {
    methods.reverse.call(this, this.rawLinkedList);
    return this;
  }

  public concat(...items: (LinkedList<T> | T)[]) {
    return methods.concat<T>(this, ...items);
  }

  public splice(start: number, deleteCount?: number): LinkedList<T>;
  public splice(
    start: number,
    deleteCount: number,
    ...items: T[]
  ): LinkedList<T>;
  public splice(start: number, deleteCount = this.size, ...items: T[]) {
    return methods.splice<T>(this, start, deleteCount, ...items);
  }

  public flat(depth = 1): LinkedList<T> {
    return methods.flat<T>(this, depth);
  }

  public flatMap<U, This = undefined>(
    callback: (
      this: This,
      value: T,
      index?: number,
      linkedList?: LinkedList<T>
    ) => U | LinkedList<U>,
    thisArg?: This
  ): LinkedList<U> {
    return methods.flatMap<T, U, This>(this, callback, thisArg);
  }

  public fill(value: T, start = 0, end = this.size): LinkedList<T> {
    return methods.fill<T>(this, value, start, end);
  }
}
