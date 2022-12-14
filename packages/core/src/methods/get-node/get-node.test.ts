import { expect, it } from 'vitest';

import { RawLinkedList } from '../../raw-linked-list';
import { LinkedListNode } from '../../linked-list-node';
import { push } from '../push';
import { getNode } from './get-node';

it('should return undefined when using vanilla javascript and the index argument is ignored', () => {
  const linkedList = new RawLinkedList<number>();

  expect(linkedList.length).toBe(0);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore -- return undefined when using vanila javascript and the second argument is ignored
  expect(getNode(linkedList)).toBe(undefined);
});

it('should return undefined when using vanilla javascript and the index argument is not a number', () => {
  const linkedList = new RawLinkedList<number>();

  expect(linkedList.length).toBe(0);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore -- return undefined when using vanila javascript and the second argument is ignored
  expect(getNode(linkedList, 'hello')).toBe(undefined);
});

it('should return undefined if try to get an element from an empty linked list', () => {
  const rawLinkedlist = new RawLinkedList<number>();

  expect(getNode(rawLinkedlist, 0)).toBe(undefined);
  expect(getNode(rawLinkedlist, 2)).toBe(undefined);
});

it('should return the element if the index passed in the _getNode function in smaller than the length of the linked list', () => {
  const rawLinkedlist = new RawLinkedList<number>();
  push(rawLinkedlist, 6, 2, 3, 4, 1);

  const nodeOne = new LinkedListNode(6);
  const nodeTwo = new LinkedListNode(2);
  const nodeThree = new LinkedListNode(3);
  const nodeFour = new LinkedListNode(4);
  const nodeFive = new LinkedListNode(1);

  nodeOne.next = nodeTwo;
  nodeTwo.previous = nodeOne;
  nodeTwo.next = nodeThree;
  nodeThree.previous = nodeTwo;
  nodeThree.next = nodeFour;
  nodeFour.previous = nodeThree;
  nodeFour.next = nodeFive;
  nodeFive.previous = nodeFour;

  expect(rawLinkedlist.length).toBe(5);
  expect(getNode(rawLinkedlist, 0)).toEqual(nodeOne);
  expect(getNode(rawLinkedlist, 1)).toEqual(nodeTwo);
  expect(getNode(rawLinkedlist, 2)).toEqual(nodeThree);
  expect(getNode(rawLinkedlist, 3)).toEqual(nodeFour);
  expect(getNode(rawLinkedlist, 4)).toEqual(nodeFive);
});

it('should return undefined when the look up index is equal or bigger than the length of the linked list', () => {
  const rawLinkedlist = new RawLinkedList<number>();
  push(rawLinkedlist, 6, 2, 3, 4, 1);

  expect(rawLinkedlist.length).toBe(5);
  expect(getNode(rawLinkedlist, 5)).toBe(undefined);
  expect(getNode(rawLinkedlist, 10)).toBe(undefined);
});

it('should return undefined if the index look up argument is negative', () => {
  const rawLinkedlist = new RawLinkedList<number>();
  push(rawLinkedlist, 6, 2, 3, 4, 1);

  expect(rawLinkedlist.length).toBe(5);
  expect(getNode(rawLinkedlist, -1)).toBe(undefined);
  expect(getNode(rawLinkedlist, -5)).toBe(undefined);
});
