import { expect, it } from 'vitest';
import { RawLinkedList } from '../../raw-linked-list';
import { push } from '../push';

import { lastIndexOf } from './last-index-of';

it('should return -1 when looking for the last index of the value of an empty linked list', () => {
  const linkedList = new RawLinkedList();

  expect(lastIndexOf(linkedList, 0, 0)).toBe(-1);
});

it('should find the last index of a specific value inside the linkedlist', () => {
  const linkedList = new RawLinkedList();
  push(linkedList, 6, 3, 6, 4, 1);

  expect(lastIndexOf(linkedList, 0, 4)).toBe(-1);
  expect(lastIndexOf(linkedList, 4, 4)).toBe(3);
  expect(lastIndexOf(linkedList, 6, 4)).toBe(2);
});

it('should find the last index of a specific value starting from an specified index', () => {
  const linkedList = new RawLinkedList();
  push(linkedList, 1, 4, 2, 3, 6, 1, 3, 4);

  expect(lastIndexOf(linkedList, 1, 4)).toBe(0);
  expect(lastIndexOf(linkedList, 1, 5)).toBe(5);
});
