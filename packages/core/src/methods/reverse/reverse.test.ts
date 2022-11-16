import { it, expect } from 'vitest';
import { RawLinkedList } from '../../raw-linked-list';
import { push } from '../push';
import { reverse } from './reverse';

it('should reverse the linked list perfectly when size is even', () => {
  const ll = new RawLinkedList<number>();
  push<number>(ll, 5, 2, 3, 4, 1, 2);

  const expectedLinkedList = new RawLinkedList<number>();
  push<number>(expectedLinkedList, 2, 1, 4, 3, 2, 5);

  expect(ll.length).toBe(6);
  expect(reverse(ll)).toEqual(undefined);
  expect(ll).toEqual(expectedLinkedList);
});

it('should reverse the linked list perfectly when size is odd', () => {
  const ll = new RawLinkedList<number>();
  push<number>(ll, 5, 2, 3, 4, 1, 10, 2);

  const expectedLinkedList = new RawLinkedList<number>();
  push(expectedLinkedList, 2, 10, 1, 4, 3, 2, 5);

  expect(ll.length).toBe(7);
  expect(reverse(ll)).toEqual(undefined);
  expect(ll).toEqual(expectedLinkedList);
});
