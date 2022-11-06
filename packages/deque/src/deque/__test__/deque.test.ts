import { describe, it, expect } from 'vitest';
import { Deque } from '../deque';

describe('testing static functions', () => {
  it('should check if the element is a linked list', () => {
    const deque = new Deque();

    expect(Deque.isDeque(deque)).toBe(true);
    expect(Deque.isDeque({})).toBe(false);
    expect(Deque.isDeque([])).toBe(false);
    expect(Deque.isDeque('string')).toBe(false);
    expect(Deque.isDeque(100)).toBe(false);
    expect(Deque.isDeque(100n)).toBe(false);
    expect(Deque.isDeque(true)).toBe(false);
    expect(Deque.isDeque(null)).toBe(false);
    expect(Deque.isDeque(undefined)).toBe(false);
    expect(Deque.isDeque(Symbol('hello'))).toBe(false);
  });
});

describe('Testing Basic Deque methods', () => {
  it('should create an empty Deque', () => {
    const deque = new Deque();

    expect(deque.size).toBe(0);
  });

  it('should push elements at the end of the deque with the push method', () => {
    const deque = new Deque();

    deque.push(4);
    deque.push(7);

    expect(deque.size).toBe(2);
  });

  it('should return undefined if checking the first element of an empty deque', () => {
    const deque = new Deque();
    expect(deque.peekFirst()).toBe(undefined);
  });

  it('should check the first element in the deque using the peekFirst method', () => {
    const deque = new Deque();

    deque.push(4);
    deque.push(7);

    expect(deque.peekFirst()).toBe(4);
  });

  it('should return undefined if checking the last element of an empty deque', () => {
    const deque = new Deque();

    expect(deque.peekLast()).toBe(undefined);
  });

  it('should check the last element in the deque using the peekLast method', () => {
    const deque = new Deque();

    deque.push(4);
    deque.push(25);
    deque.push(7);

    expect(deque.peekLast()).toBe(7);
  });

  it('should add a new element into the deque from the front of it', () => {
    const deque = new Deque();

    deque.unshift(4);
    deque.unshift(50);
    deque.unshift(7);

    expect(deque.size).toBe(3);
    expect(deque.peekFirst()).toBe(7);
    expect(deque.peekLast()).toBe(4);
  });

  it('should check the first element of the deque', () => {
    const deque = new Deque();

    deque.push(5);
    deque.push(4);
    deque.unshift(8);

    expect(deque.peekFirst()).toBe(8);
    expect(deque.peekLast()).toBe(4);
  });

  it('should not remove last element and return undefined when pop an element of a empty deque', () => {
    const deque = new Deque();

    expect(deque.pop()).toBe(undefined);
  });

  it('should remove last element of the deque using the pop method', () => {
    const deque = new Deque();

    deque.push(5);
    deque.push(4);
    deque.push(8);

    expect(deque.size).toBe(3);
    expect(deque.peekLast()).toEqual(8);

    const removedElement = deque.pop();

    expect(deque.size).toBe(2);
    expect(removedElement).toEqual(8);
    expect(deque.peekLast()).toEqual(4);
  });

  it('should not remove the first element and return undefined when shift an element of a empty deque', () => {
    const deque = new Deque();

    expect(deque.shift()).toBe(undefined);
  });

  it('should remove the first element of the deque using the shift method', () => {
    const deque = new Deque();

    deque.push(5);
    deque.push(4);
    deque.push(8);

    expect(deque.size).toBe(3);
    expect(deque.peekFirst()).toEqual(5);

    const removedElement = deque.shift();

    expect(deque.size).toBe(2);
    expect(removedElement).toEqual(5);
    expect(deque.peekFirst()).toEqual(4);
  });
});
