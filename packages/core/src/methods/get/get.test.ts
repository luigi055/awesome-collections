import { expect, it } from 'vitest';
import { RawLinkedList } from '../../raw-linked-list';
import { push } from '../push';
import { get } from './get';

it('should return undefined if try to get an element from an empty linked list', () => {
  const rawLinkedlist = new RawLinkedList<number>();

  expect(get(rawLinkedlist, 0)).toBe(undefined);
  expect(get(rawLinkedlist, 2)).toBe(undefined);
});

it('should return the element if the index passed in the get function in smaller than the length of the linked list', () => {
  const rawLinkedlist = new RawLinkedList<number>();
  push(rawLinkedlist, 6, 2, 3, 4, 1);

  expect(rawLinkedlist.length).toBe(5);
  expect(get(rawLinkedlist, 0)).toBe(6);
  expect(get(rawLinkedlist, 1)).toBe(2);
  expect(get(rawLinkedlist, 2)).toBe(3);
  expect(get(rawLinkedlist, 3)).toBe(4);
  expect(get(rawLinkedlist, 4)).toBe(1);
});

it('should return undefined when the look up index is equal or bigger than the length of the linked list', () => {
  const rawLinkedlist = new RawLinkedList<number>();
  push(rawLinkedlist, 6, 2, 3, 4, 1);

  expect(rawLinkedlist.length).toBe(5);
  expect(get(rawLinkedlist, 5)).toBe(undefined);
  expect(get(rawLinkedlist, 10)).toBe(undefined);
});

it('should return undefined if the index look up argument is negative', () => {
  const rawLinkedlist = new RawLinkedList<number>();
  push(rawLinkedlist, 6, 2, 3, 4, 1);

  expect(rawLinkedlist.length).toBe(5);
  expect(get(rawLinkedlist, -1)).toBe(undefined);
  expect(get(rawLinkedlist, -5)).toBe(undefined);
});
