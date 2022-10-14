import { expect, it } from 'vitest';

import { RawLinkedList } from '../../../../raw-linked-list';
import { LinkedListNode } from '../../../../linked-list-node';
import { pop } from './pop';
import { push } from '../push';

it('should not mutate anything in the linked list and return undefined when the linked list is empty', () => {
  const rawLinkedList = new RawLinkedList();

  expect(pop(rawLinkedList)).toBe(undefined);
  expect(rawLinkedList).toEqual(new RawLinkedList());
});

it('should remove the only element in the linked list', () => {
  const rawLinkedList = new RawLinkedList<string>();

  expect(rawLinkedList.length).toBe(0);

  push(rawLinkedList, 'Hello!');

  expect(rawLinkedList.length).toBe(1);

  expect(pop(rawLinkedList)).toBe('Hello!');
  expect(rawLinkedList.length).toBe(0);
});

it('should remove the last element of the linked list', () => {
  const rawLinkedList = new RawLinkedList<string>();

  expect(rawLinkedList.length).toBe(0);

  push(rawLinkedList, 'Hello', 'my', 'name', 'is', 'pedro', '!');

  expect(rawLinkedList.length).toBe(6);

  expect(pop(rawLinkedList)).toBe('!');
  expect(rawLinkedList.length).toBe(5);
  expect(rawLinkedList.tail?.value).toBe('pedro');
});
