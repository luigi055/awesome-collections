import { LinkedList } from '../linked-list';
import { describe, it, expect } from 'vitest';

it('should iterate all the values of a empty linkedlist when passing a callback into the forEach method', () => {
  const linkedList = new LinkedList();

  const nodes: number[] = [];
  const returnedValue = linkedList.forEach((number) => {
    nodes.push(number);
  });

  expect(returnedValue).toBe(undefined);
  expect(nodes).toEqual([]);
});

it('should iterate all the nodes passing a callback into the forEach method', () => {
  const linkedList = new LinkedList([4, 3, 2, 5]);

  const nodes: number[] = [];
  const returnedValue = linkedList.forEach((number) => {
    nodes.push(number);
  });

  expect(returnedValue).toBe(undefined);
  expect(nodes).toEqual([4, 3, 2, 5]);
});

it('should access to the index of each value', () => {
  const linkedList = new LinkedList([4, 3, 2, 5]);

  const nodes: [number, number][] = [];
  const returnedValue = linkedList.forEach((number, index) => {
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
it('should access to the original linked list object in every each value', () => {
  const linkedList = new LinkedList([4, 3, 9, 2, 5]);

  const nodes: [number, number][] = [];
  const returnedValue = linkedList.forEach((number, index, linkedListArg) => {
    if (number >= linkedListArg.head) {
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
