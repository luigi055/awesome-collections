import { expect, it } from 'vitest';

import { RawLinkedList } from '../../raw-linked-list';
import { push } from '../push';
import { slice } from './slice';

it('should copy an empty linkedlist with slice', () => {
  const ll = new RawLinkedList<number>();

  const expectedLinkedList = new RawLinkedList<number>();
  slice(RawLinkedList, 0, 1);

  expect(ll).not.toBe(expectedLinkedList);
  expect(expectedLinkedList).toEqual(new RawLinkedList());
});

it('should copy the entire list when the slice method is called without params', () => {
  const ll = new RawLinkedList<number>();
  push(ll, 25, 100, 12, 1, 4);

  const newLinkedList = slice(ll, 0, 5);

  const expectedLinkedList = new RawLinkedList<number>();
  push(expectedLinkedList, 25, 100, 12, 1, 4);

  expect(ll).not.toBe(newLinkedList);
  expect(newLinkedList).toEqual(expectedLinkedList);
});

it('should copy a portion of the list', () => {
  const ll = new RawLinkedList<number>();
  push(ll, 25, 100, 12, 1, 4);

  const newLinkedList = slice(ll, 1, 3);

  const expectedLinkedList = new RawLinkedList<number>();
  push(expectedLinkedList, 100, 12);

  expect(ll).not.toBe(newLinkedList);
  expect(newLinkedList).toEqual(expectedLinkedList);
});
