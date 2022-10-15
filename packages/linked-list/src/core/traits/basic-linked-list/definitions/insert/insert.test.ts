import { expect, it } from 'vitest';

import { RawLinkedList } from '../../../../raw-linked-list';
import { LinkedListNode } from '../../../../linked-list-node';
import { push } from '../push';
import { insert } from './insert';
import { get } from '../get';

it('should return true if try to insert the 0 element in an empty linked list', () => {
  const linkedList = new RawLinkedList<string>();

  expect(insert(linkedList, 0, 'hello')).toBe(true);
  expect(linkedList.length).toBe(1);
  expect(linkedList.head?.value).toBe('hello');
  expect(linkedList.tail?.value).toBe('hello');
});

it('should insert a value when the index is equal to the length of the linked list', () => {
  const linkedList = new RawLinkedList<number>();
  const expectedLinkedList = new RawLinkedList<number>();
  push(expectedLinkedList, 6, 87, 34, 562, 500);
  push(linkedList, 6, 87, 34, 562);

  expect(insert(linkedList, 4, 500)).toBe(true);
  expect(linkedList.length).toBe(5);
  expect(linkedList).toEqual(expectedLinkedList);
});

it('should return false when trying to insert a value in a index less than 0', () => {
  const linkedList = new RawLinkedList<number>();
  push(linkedList, 6, 87, 34, 562);

  expect(insert(linkedList, -1, 'hello')).toBe(false);
  expect(linkedList.length).toBe(4);
});

it('should return false when trying to insert a value in a index larger than the length of the linked list', () => {
  const linkedList = new RawLinkedList<number>();
  push(linkedList, 6, 87, 34, 562);

  expect(insert(linkedList, 5, 500)).toBe(false);
  expect(insert(linkedList, 6, 500)).toBe(false);
  expect(linkedList.length).toBe(4);
});
it('should return true when the value is correctly inserted specified by the index', () => {
  const linkedList = new RawLinkedList<string>();
  const expectedLinkedList = new RawLinkedList<string>();

  push(expectedLinkedList, 'hello', 'my', 'name', 'is', 'Marina', 'Pedro', '!');
  push(linkedList, 'hello', 'my', 'name', 'is', 'Pedro', '!');

  expect(get(linkedList, 4)).toBe('Pedro');

  expect(insert(linkedList, 4, 'Marina'));

  expect(get(linkedList, 4)).toBe('Marina');
  expect(get(linkedList, 5)).toBe('Pedro');
  expect(linkedList).toEqual(expectedLinkedList);
});
