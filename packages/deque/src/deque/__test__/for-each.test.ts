import { Deque } from '../deque';
import { describe, it, expect } from 'vitest';

describe('Testing the forEach method', () => {
  it('should iterate all the values of a empty linkedlist when passing a callback into the forEach method', () => {
    const deque = new Deque();

    const nodes: number[] = [];
    const returnedValue = deque.forEach((number) => {
      nodes.push(number);
    });

    expect(returnedValue).toBe(undefined);
    expect(nodes).toEqual([]);
  });

  it('should iterate all the nodes passing a callback into the forEach method', () => {
    const deque = new Deque([4, 3, 2, 5]);
    const nodes: number[] = [];
    const returnedValue = deque.forEach((number) => {
      nodes.push(number);
    });

    expect(returnedValue).toBe(undefined);
    expect(nodes).toEqual([4, 3, 2, 5]);
  });

  it('should access to the index of each value', () => {
    const deque = new Deque([4, 3, 2, 5]);

    const nodes: [number, number][] = [];
    const returnedValue = deque.forEach((number, index) => {
      nodes.push([index, number]);
    });

    expect(returnedValue).toBe(undefined);
    expect(nodes).toEqual([
      [0, 4],
      [1, 3],
      [2, 2],
      [3, 5],
    ]);
  });
  it('should access to the original deque object in every each value', () => {
    const deque = new Deque([4, 3, 9, 2, 5]);

    const nodes: [number, number][] = [];
    const returnedValue = deque.forEach((number, index, dequeArg) => {
      if (number >= dequeArg.peekFirst()) {
        nodes.push([index, number]);
      }
    });

    expect(returnedValue).toBe(undefined);
    expect(nodes).toEqual([
      [0, 4],
      [2, 9],
      [4, 5],
    ]);
  });
});
