import { expect, it } from 'vitest';

import { RawLinkedList } from '../../../../raw-linked-list';
import { push } from '../../../basic-linked-list';
import { join } from './join';

it('should return an empty string when call the join method of an empty linked list', () => {
  const ll = new RawLinkedList();

  expect(join(ll)).toBe('');
});

it('should return a string representation of the linked list separated by comas by default', () => {
  const ll = new RawLinkedList<any>();
  push<any>(ll, 1, 5, 3, 42, { a: 'a' }, [1, 3, 4, [4, 3]]);

  expect(join(ll)).toBe('1,5,3,42,[object Object],1,3,4,4,3');
});

it('should return a string representation of the linked list defining the desired separator', () => {
  const ll = new RawLinkedList();
  push<any>(ll, 1, 5, 3, 42, { a: 'a' }, [1, 3, 4, [4, 3]]);

  expect(join(ll, '.')).toBe('1.5.3.42.[object Object].1,3,4,4,3');
  expect(join(ll, '<->')).toBe('1<->5<->3<->42<->[object Object]<->1,3,4,4,3');
});
