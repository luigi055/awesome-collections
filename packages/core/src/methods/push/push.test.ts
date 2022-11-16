import { expect, it } from 'vitest';
import { LinkedListNode } from '../../linked-list-node';
import { RawLinkedList } from '../../raw-linked-list';
import { push } from './push';

it("should don't add any element of the linked list if the second parameter is empty", () => {
  const nodes = new RawLinkedList();

  expect(push(nodes)).toBe(0);

  expect(nodes.head).toBe(undefined);
  expect(nodes.tail).toBe(undefined);
  expect(nodes.length).toBe(0);
});

it('should return 1 when add one element to the linked list', () => {
  const nodes = new RawLinkedList();

  expect(push(nodes, 400)).toBe(1);

  expect(nodes.head).toEqual(new LinkedListNode(400));
  expect(nodes.tail).toEqual(new LinkedListNode(400));
  expect(nodes.length).toBe(1);
});

it('should return 5 when add 5 elements into the linked list', () => {
  const nodes = new RawLinkedList();
  const nodeOne = new LinkedListNode(400);
  const nodeTwo = new LinkedListNode(200);
  const nodeThree = new LinkedListNode(800);
  const nodeFour = new LinkedListNode(400);
  const nodeFive = new LinkedListNode(900);
  const expectedRawLinkedList = new RawLinkedList();

  nodeOne.next = nodeTwo;
  nodeTwo.next = nodeThree;
  nodeTwo.previous = nodeOne;
  nodeThree.next = nodeFour;
  nodeThree.previous = nodeTwo;
  nodeFour.next = nodeFive;
  nodeFour.previous = nodeThree;
  nodeFive.previous = nodeFour;

  expectedRawLinkedList.head = nodeOne;
  expectedRawLinkedList.tail = nodeFive;
  expectedRawLinkedList.length = 5;

  expect(push(nodes, 400, 200, 800, 400, 900)).toBe(5);

  expect(nodes).toEqual(expectedRawLinkedList);
});

it('should add 3 elements at the end of the linked list', () => {
  const nodes = new RawLinkedList();
  const expectedRawLinkedList = new RawLinkedList();

  const nodeOne = new LinkedListNode(250);
  const nodeTwo = new LinkedListNode(36);
  nodeOne.next = nodeTwo;
  nodeTwo.previous = nodeOne;

  nodes.head = nodeOne;
  nodes.tail = nodeTwo;
  nodes.length = 2;

  const expectedNodeOne = new LinkedListNode(250);
  const expectedNodeTwo = new LinkedListNode(36);
  const expectedNodeThree = new LinkedListNode(8);
  const expectedNodeFour = new LinkedListNode(198);
  const expectedNodeFive = new LinkedListNode(3);

  expectedNodeOne.next = expectedNodeTwo;
  expectedNodeTwo.previous = expectedNodeOne;
  expectedNodeTwo.next = expectedNodeThree;
  expectedNodeThree.next = expectedNodeFour;
  expectedNodeThree.previous = expectedNodeTwo;
  expectedNodeFour.next = expectedNodeFive;
  expectedNodeFour.previous = expectedNodeThree;
  expectedNodeFive.previous = expectedNodeFour;

  expectedRawLinkedList.head = expectedNodeOne;
  expectedRawLinkedList.tail = expectedNodeFive;
  expectedRawLinkedList.length = 5;

  expect(push(nodes, 8, 198, 3)).toBe(5);

  expect(nodes).toEqual(expectedRawLinkedList);
});
