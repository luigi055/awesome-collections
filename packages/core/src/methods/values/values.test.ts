import { it, expect } from 'vitest';
import { values } from './values';
import { pop } from '../pop';
import { RawLinkedList } from '../../raw-linked-list';
import { LinkedListNode } from '../../linked-list-node';

it('should iterate all the values in the linked list', () => {
  const nodes = new RawLinkedList<number>();
  const nodeOne = new LinkedListNode(345);
  const nodeTwo = new LinkedListNode(23);
  const nodeThree = new LinkedListNode(345);
  const nodeFour = new LinkedListNode(12);
  const nodeFive = new LinkedListNode(80);

  nodeOne.next = nodeTwo;
  nodeTwo.next = nodeThree;
  nodeTwo.previous = nodeOne;
  nodeThree.next = nodeFour;
  nodeThree.previous = nodeTwo;
  nodeFour.next = nodeFive;
  nodeFour.previous = nodeThree;
  nodeFive.previous = nodeFour;

  nodes.length = 5;
  nodes.head = nodeOne;
  nodes.tail = nodeFive;

  const expectedValues = [];
  for (const element of values(nodes)) {
    expectedValues.push(element);
  }

  expect(expectedValues).toEqual([345, 23, 345, 12, 80]);
});

it('should manually go through all the elements using values method', () => {
  const nodes = new RawLinkedList<number>();
  const nodeOne = new LinkedListNode(1445);
  const nodeTwo = new LinkedListNode(23);
  const nodeThree = new LinkedListNode(753);
  const nodeFour = new LinkedListNode(98);
  const nodeFive = new LinkedListNode(553);

  nodeOne.next = nodeTwo;
  nodeTwo.next = nodeThree;
  nodeTwo.previous = nodeOne;
  nodeThree.next = nodeFour;
  nodeThree.previous = nodeTwo;
  nodeFour.next = nodeFive;
  nodeFour.previous = nodeThree;
  nodeFive.previous = nodeFour;

  nodes.length = 5;
  nodes.head = nodeOne;
  nodes.tail = nodeFive;

  const iterator = values(nodes);

  const firstNext = iterator.next();
  const secondNext = iterator.next();
  const thirdNext = iterator.next();
  const fourthNext = iterator.next();
  const fifthtNext = iterator.next();
  const sixthNext = iterator.next();
  const seventhNext = iterator.next();
  const eighthNext = iterator.next();

  expect(firstNext.value).toBe(1445);
  expect(firstNext.done).toBe(false);

  expect(secondNext.value).toBe(23);
  expect(secondNext.done).toBe(false);

  expect(thirdNext.value).toBe(753);
  expect(thirdNext.done).toBe(false);

  expect(fourthNext.value).toBe(98);
  expect(fourthNext.done).toBe(false);

  expect(fifthtNext.value).toBe(553);
  expect(fifthtNext.done).toBe(false);

  expect(sixthNext.value).toBe(undefined);
  expect(sixthNext.done).toBe(true);

  expect(seventhNext.value).toBe(undefined);
  expect(seventhNext.done).toBe(true);

  expect(eighthNext.value).toBe(undefined);
  expect(eighthNext.done).toBe(true);
});

it('should not show removed elements when call the next method manually using the values method', () => {
  const nodes = new RawLinkedList<number>();
  const nodeOne = new LinkedListNode(1445);
  const nodeTwo = new LinkedListNode(23);
  const nodeThree = new LinkedListNode(753);
  const nodeFour = new LinkedListNode(98);
  const nodeFive = new LinkedListNode(553);

  nodeOne.next = nodeTwo;
  nodeTwo.next = nodeThree;
  nodeTwo.previous = nodeOne;
  nodeThree.next = nodeFour;
  nodeThree.previous = nodeTwo;
  nodeFour.next = nodeFive;
  nodeFour.previous = nodeThree;
  nodeFive.previous = nodeFour;

  nodes.length = 5;
  nodes.head = nodeOne;
  nodes.tail = nodeFive;

  const iterator = values(nodes);

  const firstNext = iterator.next();
  const secondNext = iterator.next();

  pop(nodes);
  pop(nodes);

  const thirdNext = iterator.next();
  const fourthNext = iterator.next();
  const fifthtNext = iterator.next();
  const sixthNext = iterator.next();
  const seventhNext = iterator.next();
  const eighthNext = iterator.next();

  expect(firstNext.value).toBe(1445);
  expect(firstNext.done).toBe(false);

  expect(secondNext.value).toBe(23);
  expect(secondNext.done).toBe(false);

  expect(thirdNext.value).toBe(753);
  expect(thirdNext.done).toBe(false);

  expect(fourthNext.value).toBe(undefined);
  expect(fourthNext.done).toBe(true);

  expect(fifthtNext.value).toBe(undefined);
  expect(fifthtNext.done).toBe(true);

  expect(sixthNext.value).toBe(undefined);
  expect(sixthNext.done).toBe(true);

  expect(seventhNext.value).toBe(undefined);
  expect(seventhNext.done).toBe(true);

  expect(eighthNext.value).toBe(undefined);
  expect(eighthNext.done).toBe(true);
});

it('should each iterator generated by the values method be completely independent when manage its internal state', () => {
  const nodes = new RawLinkedList<string>();
  const nodeOne = new LinkedListNode('hello');
  const nodeTwo = new LinkedListNode('my');
  const nodeThree = new LinkedListNode('name');
  const nodeFour = new LinkedListNode('is');
  const nodeFive = new LinkedListNode('pedro');

  nodeOne.next = nodeTwo;
  nodeTwo.next = nodeThree;
  nodeTwo.previous = nodeOne;
  nodeThree.next = nodeFour;
  nodeThree.previous = nodeTwo;
  nodeFour.next = nodeFive;
  nodeFour.previous = nodeThree;
  nodeFive.previous = nodeFour;

  nodes.length = 5;
  nodes.head = nodeOne;
  nodes.tail = nodeFive;

  const valuesOneIterator = values(nodes);

  const valuesOneIteratorFirst = valuesOneIterator.next().value;
  const valuesOneIteratorSecond = valuesOneIterator.next().value;

  const valuesTwoIterator = values(nodes);

  const valuesTwoIteratorFirst = valuesTwoIterator.next().value;
  const valuesTwoIteratorSecond = valuesTwoIterator.next().value;

  expect(valuesOneIteratorFirst).toBe('hello');
  expect(valuesOneIteratorSecond).toBe('my');
  expect(valuesTwoIteratorFirst).toBe('hello');
  expect(valuesTwoIteratorSecond).toBe('my');
});

it('should iterable and iterator traits share the same state', () => {
  const nodes = new RawLinkedList<number>();
  const nodeOne = new LinkedListNode(5);
  const nodeTwo = new LinkedListNode(8);
  const nodeThree = new LinkedListNode(3);
  const nodeFour = new LinkedListNode(13);
  const nodeFive = new LinkedListNode(6);
  const nodeSix = new LinkedListNode(9);

  nodeOne.next = nodeTwo;
  nodeTwo.next = nodeThree;
  nodeTwo.previous = nodeOne;
  nodeThree.next = nodeFour;
  nodeThree.previous = nodeTwo;
  nodeFour.next = nodeFive;
  nodeFour.previous = nodeThree;
  nodeFive.previous = nodeFour;
  nodeFive.next = nodeSix;
  nodeSix.previous = nodeFive;

  nodes.length = 6;
  nodes.head = nodeOne;
  nodes.tail = nodeSix;

  const iter = values(nodes);

  expect(iter.next()).toEqual({ value: 5, done: false });
  expect(iter.next()).toEqual({ value: 8, done: false });

  const expectedRestOfIterator = [];
  for (const it of iter) {
    expectedRestOfIterator.push(it);
  }

  expect(expectedRestOfIterator).toEqual([3, 13, 6, 9]);
});
