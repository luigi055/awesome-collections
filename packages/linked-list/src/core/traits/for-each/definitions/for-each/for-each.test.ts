import { it, expect } from 'vitest';
import { RawLinkedList } from '../../../../raw-linked-list';
import { push } from '../../../basic-linked-list';
import { forEach } from './for-each';

it('should return undefined when the linked list is empty', () => {
  const rawLinkedList = new RawLinkedList<number>();

  const returnedValue = forEach<number>(rawLinkedList, (value) => {
    return value + value;
  });

  expect(returnedValue).toEqual(undefined);
});

it('should return undefined when the linked list has values', () => {
  const rawLinkedList = new RawLinkedList<number>();
  push(rawLinkedList, 345, 23, 345, 12, 80);

  const returnedValue = forEach<number>(rawLinkedList, (value) => {
    return value + value;
  });

  expect(returnedValue).toEqual(undefined);
});

it('should iterate all the index and values of the linked list', () => {
  const rawLinkedList = new RawLinkedList<number>();
  push(rawLinkedList, 345, 23, 345, 12, 80);

  const expectedEntries: [number, number][] = [];
  forEach<number>(rawLinkedList, (value, index) => {
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
