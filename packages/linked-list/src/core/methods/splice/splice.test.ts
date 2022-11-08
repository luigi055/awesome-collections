import { expect, it } from 'vitest';

import { RawLinkedList } from '../../raw-linked-list';
import { push } from '../push';
import { values } from '../values';
import { splice } from './splice';

it('should do nothing when trying to splice an empty linked list', () => {
  const linkedList = new RawLinkedList<number>();

  splice(linkedList, 0, 0);

  expect(linkedList).toEqual(new RawLinkedList<number>());
});

it('should remove the only element in the linked list when start parameter is 0', () => {
  const linkedList = new RawLinkedList();
  push<number>(linkedList, 4);

  const expectedRawLinkedList = new RawLinkedList<number>();
  push(expectedRawLinkedList, 4);

  const removedRawLinkedList = splice(linkedList, 0, 1);

  expect(removedRawLinkedList).toEqual(expectedRawLinkedList);
  expect(removedRawLinkedList.length).toEqual(1);
  expect(linkedList.length).toBe(0);
  expect(linkedList).toEqual(new RawLinkedList<number>());
});

it('should remove the only element in the linked list when start parameter is 1', () => {
  const linkedList = new RawLinkedList();
  push<number>(linkedList, 4);

  const removedRawLinkedList = splice(linkedList, 1, 1);

  const expectedLinkedList = new RawLinkedList<number>();
  push<number>(expectedLinkedList, 4);

  expect(removedRawLinkedList).toEqual(new RawLinkedList());
  expect(removedRawLinkedList.length).toEqual(0);
  expect(linkedList).toEqual(expectedLinkedList);
  expect(linkedList.length).toBe(1);
});

it.only('should remove the 2 first elements in the linked list using the splice method', () => {
  const linkedList = new RawLinkedList<number>();
  push(linkedList, 4, 1, 3, 6, 2);

  const removedRawLinkedList = splice(linkedList, 2, 5);

  const expectedRemovedLinkedList = new RawLinkedList<number>();
  push(expectedRemovedLinkedList, 3, 6, 2);

  const expectedLinkedList = new RawLinkedList<number>();
  push(expectedLinkedList, 4, 1);

  expect(removedRawLinkedList).toEqual(expectedRemovedLinkedList);

  expect(linkedList.length).toBe(2);
  expect(linkedList).toEqual(expectedLinkedList);
});

it('should not remove any element from the start using when passing in a negative number since it would be equal to 0', () => {
  const linkedList = new RawLinkedList();
  push<number>(linkedList, 4, 1, 3, 6, 2);

  const removedRawLinkedList = splice(linkedList, -5, 5);
  const expectedRemovedLinkedList = new RawLinkedList<number>();
  push<number>(expectedRemovedLinkedList, 4, 1, 3, 6, 2);

  expect(removedRawLinkedList.length).toBe(5);
  expect(removedRawLinkedList).toEqual(new RawLinkedList());
  expect(linkedList.length).toBe(0);
  expect(linkedList).toEqual(new RawLinkedList());
});

it('should remove the last element of the linked list', () => {
  const linkedList = new RawLinkedList();
  push<number>(linkedList, 4, 1, 3, 6, 2);

  const removedRawLinkedList = splice<number>(linkedList, 0, 4);
  const expectedRemovedRawLinkedList = new RawLinkedList<number>();
  push(expectedRemovedRawLinkedList, 4, 1, 3, 6);

  const expectedCurrentLinkedList = new RawLinkedList<number>();
  push(expectedCurrentLinkedList, 2);

  expect(removedRawLinkedList.length).toBe(4);
  expect(removedRawLinkedList).toEqual(expectedRemovedRawLinkedList);

  expect(linkedList.length).toBe(1);
  expect(linkedList).toEqual(expectedCurrentLinkedList);
});

it('should remove the first element of the linked list passing in the 2 arguments', () => {
  const linkedList = new RawLinkedList();
  push<number>(linkedList, 4, 1, 3, 6, 2);

  const removedRawLinkedList = splice(linkedList, 1, 4);

  const expectedRemovedLinkedList = new RawLinkedList();
  push(expectedRemovedLinkedList, 1, 3, 6, 2);

  const expectedCurrentLinkedList = new RawLinkedList<number>();

  push(expectedCurrentLinkedList, 4);
  expect(removedRawLinkedList.length).toBe(4);
  expect(removedRawLinkedList).toEqual(expectedRemovedLinkedList);

  expect(linkedList.length).toBe(1);
  expect(linkedList).toEqual(expectedCurrentLinkedList);
});

it('should keep the middle element of the list', () => {
  const linkedList = new RawLinkedList();
  push<number>(linkedList, 4, 1, 3, 6, 2);

  const removedRawLinkedList = splice(linkedList, 2, 1);

  const expectedRemovedLinkedList = new RawLinkedList<number>();
  push<number>(expectedRemovedLinkedList, 3);

  const expectedCurrentLinkedList = new RawLinkedList<number>();
  push(expectedCurrentLinkedList, 4, 1, 6, 2);

  expect(removedRawLinkedList.length).toBe(1);
  expect(removedRawLinkedList).toEqual(expectedRemovedLinkedList);

  expect(linkedList.length).toBe(4);
  expect(linkedList).toEqual(expectedCurrentLinkedList);
});

it('should keep all the elements if the second parameter is larger than the current size', () => {
  const linkedList = new RawLinkedList();
  push<number>(linkedList, 4, 1, 3, 6, 2);

  const splicedLL = splice<number>(linkedList, 2, 10);

  const expectedSplicedLL = new RawLinkedList();
  push(expectedSplicedLL, 3, 6, 2);

  const expectedCurrentLinkedList = new RawLinkedList();
  push(expectedCurrentLinkedList, 4, 1);

  expect(splicedLL).not.toBe(linkedList);
  expect(splicedLL).toEqual(expectedSplicedLL);
  expect(linkedList.length).toBe(2);
  expect(linkedList).toEqual(expectedCurrentLinkedList);
});

it('should remove all elements of the linkedlist when pass in 0 as starting index and the length of the ll, plus add 2 extra elements', () => {
  const linkedList = new RawLinkedList();
  push(linkedList, 'Charles', 'Jhon', 'Julio');

  const removedRawLinkedList = splice(linkedList, 0, 3, 'Marco', 'Joe');

  const expectedRemovedLinkedList = new RawLinkedList();
  push(expectedRemovedLinkedList, 'Charles', 'Jhon', 'Julio');

  const expectedCurrentLL = new RawLinkedList();
  push(expectedCurrentLL, 'Marco', 'Joe');

  expect(removedRawLinkedList.length).toBe(3);
  expect(removedRawLinkedList).toEqual(expectedRemovedLinkedList);
  expect(linkedList.length).toBe(2);
  expect(linkedList).toEqual(expectedCurrentLL);
});

it('should remove the last 2 elements, plus add 2 extra elements', () => {
  const linkedList = new RawLinkedList();
  push(linkedList, 'Charles', 'Jhon', 'Julio');

  const removedRawLinkedList = splice(linkedList, 1, 3, 'Marco', 'Joe');

  const expectedRemovedLinkedList = new RawLinkedList();
  push(expectedRemovedLinkedList, 'Jhon', 'Julio');

  const expectedCurrentLL = new RawLinkedList();
  push(expectedCurrentLL, 'Charles', 'Marco', 'Joe');

  expect(removedRawLinkedList.length).toBe(2);
  expect(removedRawLinkedList).toEqual(expectedRemovedLinkedList);
  expect(linkedList.length).toBe(3);
  expect(linkedList).toEqual(expectedCurrentLL);
});

it('should add the replacement elements at the edn when the start index is larger than the size of the linked list', () => {
  const linkedList = new RawLinkedList();
  push(linkedList, 'Charles', 'Jhon', 'Julio');

  const removedRawLinkedList = splice(linkedList, 6, 3, 'Marco', 'Joe');

  const expectedCurrentLinkedList = new RawLinkedList();
  push(expectedCurrentLinkedList, 'Charles', 'Jhon', 'Julio', 'Marco', 'Joe');

  expect(removedRawLinkedList.length).toBe(0);
  expect(removedRawLinkedList).toEqual(new RawLinkedList());
  expect(linkedList.length).toBe(5);
  expect(linkedList).toEqual(expectedCurrentLinkedList);
});
