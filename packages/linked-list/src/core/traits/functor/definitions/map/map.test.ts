import { expect, it } from 'vitest';

import { RawLinkedList } from '../../../../raw-linked-list';
import { push } from '../../../basic-linked-list';
import { map } from './map';

it('should only return a copy of the linkedlist if map an empty linkedlist', () => {
  const linkedList = new RawLinkedList<number>();
  const copiedLinkedlist = new RawLinkedList<number>();

  map(
    linkedList,
    (cv) => push(copiedLinkedlist, cv),
    (value) => value + 2
  );

  expect(copiedLinkedlist).toEqual(new RawLinkedList());
});

it('should add 2 to each value of the linkedlist and return new copy', () => {
  const copiedLinkedList = new RawLinkedList<number>();
  const linkedList = new RawLinkedList<number>();
  push(linkedList, 0, 5, 15, 20, 25, 30);

  const expectedCopiedLinkedList = new RawLinkedList<number>();
  push(expectedCopiedLinkedList, 5, 10, 20, 25, 30, 35);

  const expectedOriginalLinkedList = new RawLinkedList<number>();
  push(expectedOriginalLinkedList, 0, 5, 15, 20, 25, 30);

  map(
    linkedList,
    (cv: number) => push(copiedLinkedList, cv),
    (value) => value + 5
  );

  expect(linkedList).toEqual(expectedOriginalLinkedList);
  expect(copiedLinkedList).toEqual(expectedCopiedLinkedList);
});

it('should concat 2 to each value of the linkedlist and return new linked list of string', () => {
  const linkedList = new RawLinkedList<number>();
  push(linkedList, 0, 5, 15, 20, 25, 30);

  const copiedLinkedList = new RawLinkedList<string>();

  const expectedCopiedLinkedList = new RawLinkedList<string>();
  push(expectedCopiedLinkedList, '02', '52', '152', '202', '252', '302');

  map<number, string>(
    linkedList,
    (cv: string) => push(copiedLinkedList, cv),
    (value) => value + '2'
  );

  expect(copiedLinkedList).toEqual(expectedCopiedLinkedList);
});

it('should not ignore undefined or void values', () => {
  const copiedLinkedList = new RawLinkedList<number>();
  const linkedList = new RawLinkedList<number>();
  push(linkedList, 0, 5, 15, 20, 25, 30);

  const expectedCopiedLinkedList = new RawLinkedList<number>();
  push(expectedCopiedLinkedList, undefined, 10, undefined, 25, 30, undefined);

  map<number, number | undefined>(
    linkedList,
    (cv) => push(copiedLinkedList, cv),
    (value) => {
      if (value % 3 === 0) return;
      return value + 5;
    }
  );

  expect(copiedLinkedList).toEqual(expectedCopiedLinkedList);
});
