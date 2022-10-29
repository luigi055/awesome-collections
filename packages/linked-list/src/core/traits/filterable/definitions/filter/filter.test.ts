import { expect, it } from 'vitest';

import { RawLinkedList } from '../../../../raw-linked-list';
import { push } from '../../../basic-linked-list';
import { filter } from './filter';

it('should only return a copy of the linkedlist if map an empty linkedlist', () => {
  const linkedList = new RawLinkedList<number>();
  const copiedLinkedlist = new RawLinkedList<number>();

  filter<number>(
    linkedList,
    (cv) => push(copiedLinkedlist, cv),
    (value) => value > 2
  );

  expect(copiedLinkedlist).toEqual(new RawLinkedList());
});

it('should add 2 to each value of the linkedlist and return new copy', () => {
  const copiedLinkedList = new RawLinkedList<number>();
  const linkedList = new RawLinkedList<number>();
  push(linkedList, 0, 5, 15, 20, 25, 30);

  const expectedCopiedLinkedList = new RawLinkedList<number>();
  push(expectedCopiedLinkedList, 20, 25, 30);

  const expectedOriginalLinkedList = new RawLinkedList<number>();
  push(expectedOriginalLinkedList, 0, 5, 15, 20, 25, 30);

  filter<number>(
    linkedList,
    (cv: number) => push(copiedLinkedList, cv),
    (value) => value >= 20
  );

  expect(linkedList).toEqual(expectedOriginalLinkedList);
  expect(copiedLinkedList).toEqual(expectedCopiedLinkedList);
});
