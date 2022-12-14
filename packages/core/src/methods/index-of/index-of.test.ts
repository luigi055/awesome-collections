import { expect, it } from 'vitest';

import { RawLinkedList } from '../../raw-linked-list';
import { push } from '../push';
import { indexOf } from './index-of';

it('should return -1 when look for the index of a value an empty linked list', () => {
  const linkedList = new RawLinkedList();

  expect(indexOf(linkedList, 0)).toBe(-1);
});

it('should find the index of a specific value inside the linkedlist', () => {
  const linkedList = new RawLinkedList<number>();

  push(linkedList, 6, 3, 6, 4, 1);

  expect(indexOf(linkedList, 0)).toBe(-1);
  expect(indexOf(linkedList, 4)).toBe(3);
  expect(indexOf(linkedList, 6)).toBe(0);
});

it('should start looking for the index from a specific index', () => {
  const linkedList = new RawLinkedList<number>();

  push(linkedList, 6, 3, 6, 4, 1, 3);

  expect(indexOf(linkedList, 6, 1)).toBe(2);
  expect(indexOf(linkedList, 3, 3)).toBe(5);
});

it('should always return -1 when the second parameter is less than 0', () => {
  const linkedList = new RawLinkedList<number>();

  push(linkedList, 6, 3, 6, 4, 1);

  expect(indexOf(linkedList, 1, -2)).toBe(-1);
  expect(indexOf(linkedList, 4, -3)).toBe(-1);
  expect(indexOf(linkedList, 6, -5)).toBe(-1);
});
