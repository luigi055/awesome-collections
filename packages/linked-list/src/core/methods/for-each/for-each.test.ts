import { it, expect } from 'vitest';
import { RawLinkedList } from '../../raw-linked-list';
import { push } from '../push';
import { forEach } from './for-each';

it('should return undefined when the linked list is empty', () => {
  const nodes = new RawLinkedList<number>();

  const returnedValue = forEach<number>(nodes, (value) => {
    return value + value;
  });

  expect(returnedValue).toEqual(undefined);
});

it('should return undefined when the linked list has values', () => {
  const nodes = new RawLinkedList<number>();
  push(nodes, 345, 23, 345, 12, 80);

  const returnedValue = forEach<number>(nodes, (value) => {
    return value + value;
  });

  expect(returnedValue).toEqual(undefined);
});

it('should iterate all the index and values of the linked list', () => {
  const nodes = new RawLinkedList<number>();
  push(nodes, 345, 23, 345, 12, 80);

  const expectedEntries: [number, number][] = [];
  forEach<number>(nodes, (value, index) => {
    expectedEntries.push([index, value]);
  });

  expect(expectedEntries).toEqual([
    [0, 345],
    [1, 23],
    [2, 345],
    [3, 12],
    [4, 80],
  ]);
});
