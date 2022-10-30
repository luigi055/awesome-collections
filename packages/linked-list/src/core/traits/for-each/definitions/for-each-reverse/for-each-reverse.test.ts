import { it, expect } from 'vitest';
import { RawLinkedList } from '../../../../raw-linked-list';
import { push } from '../../../basic-linked-list';
import { values } from '../../../iterable';
import { forEachReverse } from './for-each-reverse';

it('should return undefined when the linked list is empty', () => {
  const rawLinkedList = new RawLinkedList<number>();

  const returnedValue = forEachReverse<number>(rawLinkedList, (value) => {
    return value + value;
  });

  expect(returnedValue).toEqual(undefined);
});

it('should return undefined when the linked list has values', () => {
  const rawLinkedList = new RawLinkedList<number>();
  push(rawLinkedList, 345, 23, 345, 12, 80);

  const returnedValue = forEachReverse<number>(rawLinkedList, (value) => {
    return value + value;
  });

  expect(returnedValue).toEqual(undefined);
});

it('should iterate all the index and values of the linked list', () => {
  const rawLinkedList = new RawLinkedList<number>();
  push(rawLinkedList, 345, 23, 345, 12, 80);

  const expectedEntries: [number, number][] = [];
  forEachReverse<number>(rawLinkedList, (value, index) => {
    expectedEntries.push([index, value]);
  });
  console.log(expectedEntries);
  expect(expectedEntries).toEqual([
    [4, 80],
    [3, 12],
    [2, 345],
    [1, 23],
    [0, 345],
  ]);
});
