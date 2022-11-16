import { expect, it } from 'vitest';

import { RawLinkedList } from '../../raw-linked-list';
import { push } from '../push';
import { includes } from './includes';

it('should return false when look for a value in an empty linked list', () => {
  const linkedList = new RawLinkedList();

  expect(includes(linkedList, 0)).toBe(false);
});

it('should check if a value is inside the linkedlist', () => {
  const linkedList = new RawLinkedList();
  push(linkedList, 6, 3, 6, 4, 1);

  expect(includes(linkedList, 0)).toBe(false);
  expect(includes(linkedList, 4)).toBe(true);
});

it('should check if a value in inside the linkedlist starting from an specific index', () => {
  const linkedList = new RawLinkedList();
  push(linkedList, 6, 4, 3, 6, 1);

  expect(includes(linkedList, 0, 0)).toBe(false);
  expect(includes(linkedList, 4, 2)).toBe(false);
  expect(includes(linkedList, 4, 1)).toBe(true);
});
