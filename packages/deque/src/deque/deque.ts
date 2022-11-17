import type { AbstractDeque } from './types';
import { RawLinkedList, methods } from 'awesome-collections-core';

export class Deque<T = any> implements AbstractDeque<T> {
  nodes = new RawLinkedList<T>();

  /**
   * Check if the argument is an deque
   * @returns true if the argument is a deque, otherwise false
   */
  static isDeque(object: any): object is Deque<any> {
    return object instanceof Deque;
  }

  constructor(iterator?: Iterable<T> | null) {
    if (iterator) {
      for (const value of iterator) {
        this.push(value);
      }
    }
  }

  public get size() {
    return this.nodes.length;
  }

  public peekFirst() {
    return this.nodes.head?.value;
  }

  public peekLast() {
    return this.nodes.tail?.value;
  }

  [Symbol.iterator]() {
    return methods.values<T>(this.nodes);
  }

  public values() {
    return methods.values<T>(this.nodes);
  }

  public keys() {
    return methods.keys<T>(this.nodes);
  }

  public entries() {
    return methods.entries<T>(this.nodes);
  }

  public push(...items: T[]) {
    return methods.push<T>(this.nodes, ...items);
  }

  public unshift(...items: T[]) {
    return methods.unshift<T>(this.nodes, ...items);
  }

  public pop() {
    return methods.pop<T>(this.nodes);
  }

  public shift() {
    return methods.shift<T>(this.nodes);
  }

  public get(index: number) {
    return methods.get<T>(this.nodes, index);
  }

  public set(index: number, value: T) {
    return methods.set<T>(this.nodes, index, value);
  }

  public delete(index: number) {
    return methods.deleteValue<T>(this.nodes, index);
  }

  public insert(index: number, value: T) {
    return methods.insert<T>(this.nodes, index, value);
  }

  public forEach(
    callbackfn: (value: T, index: number, deque: Deque<T>) => void,
    thisArg?: any
  ): void {
    methods.forEach.bind(this)<T>(this.nodes, callbackfn, thisArg);
  }

  public clear() {
    return methods.clear(this.nodes);
  }

  public slice(start = 0, end: number = this.nodes.length): Deque<T> {
    const newDeque = new Deque<T>();
    newDeque.nodes = methods.slice(this.nodes, start, end);

    return newDeque;
  }

  public copy(): Deque<T> {
    return this.slice();
  }

  public at(index: number) {
    return methods.at(this.nodes, index);
  }

  public indexOf<T = any>(searchElement: T, fromIndex = 0): number {
    return methods.indexOf(this.nodes, searchElement, fromIndex);
  }

  public lastIndexOf(searchElement: T, fromIndex = this.size - 1): number {
    return methods.lastIndexOf(this.nodes, searchElement, fromIndex);
  }

  public includes<T>(searchElement: T, fromIndex = 0): boolean {
    return methods.includes(this.nodes, searchElement, fromIndex);
  }

  public find<S extends T>(
    predicate: (
      this: void,
      value: T,
      index: number,
      obj: Deque<T>
    ) => value is S,
    thisArg?: any
  ): S | undefined;
  public find(
    predicate: (value: T, index: number, obj: Deque<T>) => unknown,
    thisArg?: any
  ): T | undefined;
  public find(
    predicate: (value: T, index: number, obj: Deque<T>) => boolean,
    thisArg?: any
  ) {
    const find = methods.findValue.bind(this);
    return find<T>(this.nodes, predicate, thisArg)[1];
  }

  public findIndex(
    predicate: (value: T, index: number, obj: Deque<T>) => boolean,
    thisArg?: any
  ): number {
    const find = methods.findValue.bind(this);
    return find<T>(this.nodes, predicate, thisArg)[0];
  }

  public some(
    cb: (value: T, index: number, obj: Deque<T>) => boolean,
    thisArg?: any
  ): boolean {
    return this.findIndex(cb, thisArg) > -1;
  }

  public every<S extends T>(
    predicate: (value: T, index: number, obj: Deque<T>) => value is S,
    thisArg?: any
  ): this is Deque<S>;
  public every(
    predicate: (value: T, index: number, obj: Deque<T>) => unknown,
    thisArg?: any
  ): boolean;
  public every(
    predicate: (value: T, index: number, obj: Deque<T>) => boolean,
    thisArg?: any
  ): boolean {
    const every = methods.every.bind(this);

    return every<T>(this.nodes, predicate, thisArg);
  }

  public map<U>(
    callbackfn: (
      value: T,
      index?: number | undefined,
      deque?: AbstractDeque<T> | undefined
    ) => U,
    thisArg?: any
  ): Deque<U> {
    const newDeque = new Deque<U>();
    const addValue = (currentValue: U) => newDeque.push(currentValue);
    const map = methods.map.bind(this);
    map<T, U>(this.nodes, addValue, callbackfn, thisArg);

    return newDeque;
  }

  public filter<S extends T>(
    predicate: (value: T, index: number, obj: Deque<T>) => value is S,
    thisArg?: any
  ): Deque<S>;
  public filter(
    predicate: (value: T, index: number, obj: Deque<T>) => unknown,
    thisArg?: any
  ): Deque<T>;
  public filter(
    predicate: (value: T, index: number, obj: Deque<T>) => boolean,
    thisArg?: any
  ): Deque<T> {
    const result = new Deque<T>();
    const addValue = (currentValue: T) => result.push(currentValue);
    const filter = methods.filter.bind(this);
    filter<T>(this.nodes, addValue, predicate, thisArg);

    return result;
  }

  public sort(compareFn?: ((a: T, b: T) => number) | undefined): this {
    methods.sort<T>(this.nodes, compareFn);

    return this;
  }

  public reduce(
    callbackfn: (
      previousValue: T,
      currentValue: T,
      currentIndex: number,
      deque: Deque<T>
    ) => T
  ): T;
  public reduce(
    callbackfn: (
      previousValue: T,
      currentValue: T,
      currentIndex: number,
      deque: Deque<T>
    ) => T,
    initialValue: T
  ): T;
  public reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: T,
      currentIndex: number,
      deque: Deque<T>
    ) => U,
    initialValue: U
  ): U;
  public reduce<U>(
    callbackfn: (
      previousValue: U | T,
      currentValue: T,
      currentIndex: number,
      deque: Deque<T>
    ) => U | T,
    initialValue?: U | T
  ): U | T {
    const reduce = methods.reduce.bind(this);
    return arguments.length === 1
      ? reduce<T, U>(this.nodes, callbackfn)
      : reduce<T, U>(this.nodes, callbackfn, initialValue);
  }

  public reduceRight(
    callbackfn: (
      previousValue: T,
      currentValue: T,
      currentIndex: number,
      deque: Deque<T>
    ) => T
  ): T;
  public reduceRight(
    callbackfn: (
      previousValue: T,
      currentValue: T,
      currentIndex: number,
      deque: Deque<T>
    ) => T,
    initialValue: T
  ): T;
  public reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: T,
      currentIndex: number,
      deque: Deque<T>
    ) => U,
    initialValue: U
  ): U;
  public reduceRight<U>(
    callbackfn: (
      previousValue: U | T,
      currentValue: T,
      currentIndex: number,
      deque: Deque<T>
    ) => U | T,
    initialValue?: U | T
  ): U | T {
    const reduceRight = methods.reduceRight.bind(this);
    return arguments.length === 1
      ? reduceRight<T, U>(this.nodes, callbackfn)
      : reduceRight<T, U>(this.nodes, callbackfn, initialValue);
  }

  public join(separator = ','): string {
    return methods.join(this.nodes, separator);
  }

  public toString(): string {
    return methods.toString(this.nodes);
  }

  public reverse(): this {
    methods.reverse.call(this, this.nodes);
    return this;
  }

  public concat(...items: (Deque<T> | T)[]): Deque<T> {
    const newDeque = new Deque<T>();
    newDeque.nodes = methods.concat<T>(this.nodes, ...items);
    return newDeque;
  }

  public splice(start: number, deleteCount?: number): Deque<T>;
  public splice(start: number, deleteCount: number, ...items: T[]): Deque<T>;
  public splice(start: number, deleteCount = this.size, ...items: T[]) {
    const newDeque = new Deque<T>();
    newDeque.nodes = methods.splice<T>(
      this.nodes,
      start,
      deleteCount,
      ...items
    );
    return newDeque;
  }

  public flat(depth = 1): Deque<T> {
    const newDeque = new Deque<T>();
    newDeque.nodes = methods.flat<T>(this.nodes, depth);
    return newDeque;
  }

  public flatMap<U, This = undefined>(
    callback: (
      this: This,
      value: T,
      index?: number,
      deque?: Deque<T>
    ) => U | Deque<U>,
    thisArg?: This
  ): Deque<U> {
    const newDeque = new Deque<U>();
    newDeque.nodes = methods.flatMap<T, U, This>(
      this.nodes,
      callback,
      thisArg,
      this
    );
    return newDeque;
  }

  public fill(value: T, start = 0, end = this.size): Deque<T> {
    this.nodes = methods.fill<T>(this.nodes, value, start, end);
    return this;
  }
}
