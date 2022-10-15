import { expect, it } from 'vitest';

import { RawLinkedList } from '../../../../raw-linked-list';
import { LinkedListNode } from '../../../../linked-list-node';
import { push } from '../push';
import { get } from '../get';
import { deleteValue } from './delete';

it('should return undefined and do nothing when trying to delete an element in an empty linked list', () => {
  const linkedList = new RawLinkedList();

  expect(deleteValue(linkedList, 0)).toBe(undefined);
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
  expect(deleteValue(linkedList, 4)).toBe(67);
  expect(linkedList.length).toBe(4);
});

it('should remove the first element of the linked list', () => {
  const linkedList = new RawLinkedList<number>();

  push(linkedList, 5, 10, 28, 44, 67);

  expect(linkedList.length).toBe(5);
  expect(deleteValue(linkedList, 0)).toBe(5);
  expect(linkedList.length).toBe(4);
});

it('should remove elements in the middle of the linked list', () => {
  const linkedList = new RawLinkedList<number>();
  const expectedLinkedList = new RawLinkedList<number>();
  push(expectedLinkedList, 5, 10, 67);

  push(linkedList, 5, 10, 28, 44, 67);

  expect(linkedList.length).toBe(5);
  expect(deleteValue(linkedList, 3)).toBe(44);
  expect(deleteValue(linkedList, 2)).toBe(28);
  expect(linkedList.length).toBe(3);
  expect(linkedList).toEqual(expectedLinkedList);
});
