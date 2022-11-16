import { expect, it } from 'vitest';

import { RawLinkedList } from '../../raw-linked-list';
import { push } from '../push';
import { clear } from './clear';
import { deleteValue } from '../delete';

it('should return undefined and do nothing when trying to  clear a linked list with only one element in an empty', () => {
  const linkedList = new RawLinkedList();

  expect(clear(linkedList)).toBe(undefined);
});

it('should remove the only element in the linked list', () => {
  const linkedList = new RawLinkedList<string>();

  push(linkedList, 'hello');

  expect(linkedList.length).toBe(1);
  expect(deleteValue(linkedList, 0)).toBe('hello');
  expect(linkedList.length).toBe(0);
});

it('should delete the last element of the linked list', () => {
  const linkedList = new RawLinkedList<number>();

  push(linkedList, 5, 10, 28, 44, 67);

  expect(linkedList.length).toBe(5);
  expect(clear(linkedList)).toBe(undefined);
  expect(linkedList.length).toBe(0);
  expect(linkedList).toEqual(new RawLinkedList<number>());
});
