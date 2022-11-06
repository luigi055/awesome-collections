import { it, expect } from 'vitest';
import { RawLinkedList } from '../../raw-linked-list';
import { push } from '../push';
import { _forEachReverse } from './_for-each-reverse';

it('should return undefined when the linked list is empty', () => {
  const nodes = new RawLinkedList<number>();

  const returnedValue = _forEachReverse<number>(nodes, (value) => {
    return value + value;
  });

  expect(returnedValue).toEqual(undefined);
});

it('should return undefined when the linked list has values', () => {
  const nodes = new RawLinkedList<number>();
  push(nodes, 345, 23, 345, 12, 80);

  const returnedValue = _forEachReverse<number>(nodes, (value) => {
    return value + value;
  });

  expect(returnedValue).toEqual(undefined);
});

it('should iterate all the index and values of the linked list', () => {
  const nodes = new RawLinkedList<number>();
  push(nodes, 345, 23, 345, 12, 80);

  const expectedEntries: [number, number][] = [];
  _forEachReverse<number>(nodes, (value, index) => {
    expectedEntries.push([index, value]);
  });

  expect(expectedEntries).toEqual([
    [4, 80],
    [3, 12],
    [2, 345],
    [1, 23],
    [0, 345],
  ]);
});
