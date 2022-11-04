import { expect, it } from 'vitest';

import { RawLinkedList } from '../../raw-linked-list';
import { push } from '../push';
import { toString } from './to-string';

it('should return an empty string when call the toString method of an empty linked list', () => {
  const ll = new RawLinkedList();

  expect(toString(ll)).toBe('');
});

it('should return an string representation of the linkedlist', () => {
  const ll = new RawLinkedList();
  push<any>(ll, 1, 5, 3, 42, { a: 'a' }, [1, 3, 4, [4, 3]]);

  expect(toString(ll)).toBe('1,5,3,42,[object Object],1,3,4,4,3');
});
