import { expect, it } from 'vitest';

import { RawLinkedList } from '../../../../raw-linked-list';
import { push } from '../../../basic-linked-list';
import { every } from './every';

it('should return true no matter what when call the every method in an empty linked list', () => {
  const ll = new RawLinkedList();

  expect(every(ll, () => true)).toBe(true);
  expect(every(ll, () => false)).toBe(true);
});

it('should return true when checking if all values in the linked list met with the condition', () => {
  const ll = new RawLinkedList();

  push(ll, 6, 4, 3, 6, 1);

  expect(every(ll, (a) => a > 0)).toBe(true);
});

it("should return false when at least one value doesn't meet the condition", () => {
  const ll = new RawLinkedList();

  push(ll, 6, 4, 3, 6, 1);

  expect(every(ll, (a) => a > 1)).toBe(false);
});
