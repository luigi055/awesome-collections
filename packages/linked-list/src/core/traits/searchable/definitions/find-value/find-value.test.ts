import { expect, it } from 'vitest';

import { RawLinkedList } from '../../../../raw-linked-list';
import { push } from '../../../basic-linked-list';
import { findValue } from './find-value';

it('should return a tuple of undefined and 0 when when the raw linked list is empty', () => {
  const linkedList = new RawLinkedList<number>();

  expect(findValue(linkedList, (v) => v === 1)).toEqual([-1, undefined]);
});

it('should return the found value and its index', () => {
  const linkedList = new RawLinkedList<{ id: number; fruit: string }>();

  push(
    linkedList,
    { id: 101, fruit: 'apple' },
    { id: 102, fruit: 'pear' },
    { id: 103, fruit: 'peach' },
    { id: 104, fruit: 'strawberry' },
    { id: 105, fruit: 'banana' }
  );

  expect(findValue(linkedList, (v) => v.fruit === 'strawberry')).toEqual([
    3,
    { id: 104, fruit: 'strawberry' },
  ]);
});

it('should return the index of the element which met the condition using findIndex method', () => {
  const ll = new RawLinkedList();
  push(ll, 4, 6, 2, 34, 8, 3, 1, 3);

  expect(
    findValue.call(ll, ll, (value, index, obj) => {
      if (index === 7 && obj === ll) {
        // Look for the number 3 at the seventh position
        return value === 3;
      } else {
        return false;
      }
    })
  ).toEqual([7, 3]);
});
