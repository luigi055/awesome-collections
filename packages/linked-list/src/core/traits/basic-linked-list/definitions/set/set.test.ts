import { expect, it } from 'vitest';

import { RawLinkedList } from '../../../../raw-linked-list';
import { LinkedListNode } from '../../../../linked-list-node';
import { push } from '../push';
import { set } from './set';
import { get } from '../get';

it('should return false if the index is not found', () => {
  const linkedList = new RawLinkedList<string>();

  expect(set(linkedList, 0, 'hello'));
});

it('should return true if change a value specified by the index', () => {
  const linkedList = new RawLinkedList<string>();

  push(linkedList, 'hello', 'my', 'name', 'is', 'Pedro', '!');

  expect(get(linkedList, 4)).toBe('Pedro');
  expect(set(linkedList, 4, 'Marina'));

  expect(get(linkedList, 4)).toBe('Marina');
});
