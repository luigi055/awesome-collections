import { expect, it } from 'vitest';

import { LinkedListDataStructure, RawLinkedList } from '../../raw-linked-list';
import { push } from '../push';
import { values } from '../values';
import { flat } from './flat';

it('should throw error when try to pass an non raw linked list as first argument', () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore -- return undefined when using vanila javascript and ignoring the parameter
  expect(() => flat()).toThrow('It receives an invalid node as first argument');
});

it('should return a shallow copy of the raw linked list when only pass one valid argument', () => {
  const node = new RawLinkedList();

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore -- return undefined when using vanila javascript and ignoring the parameter
  const received = flat(node);

  expect(received).not.toBe(node);
  expect(received).toEqual(new RawLinkedList());
});

it('should return a shallow copy when the depth param is 0', () => {
  const node = new RawLinkedList<number>();
  const innerNode = new RawLinkedList<number>();

  const innerNodeTwo = new RawLinkedList<number>();
  push<number>(innerNodeTwo, 100, 600, 200, 700);
  push<number | LinkedListDataStructure<number>>(
    innerNode,
    60,
    40,
    innerNodeTwo,
    200
  );

  push<number | LinkedListDataStructure<number>>(
    node,
    6,
    2,
    5,
    innerNode,
    2,
    6,
    1
  );

  const expected = new RawLinkedList<number>();
  push<number | LinkedListDataStructure<number>>(
    expected,
    6,
    2,
    5,
    innerNode,
    2,
    6,
    1
  );

  const received = flat(node, 0);

  expect(received).not.toBe(node);
  expect(received).toEqual(expected);
});

it('should return a shallow copy of the raw linked list with first level flatten', () => {
  const node = new RawLinkedList<number>();
  const innerNode = new RawLinkedList<number>();

  const innerNodeTwo = new RawLinkedList<number>();
  push<number>(innerNodeTwo, 100, 600, 200, 700);
  push<number | LinkedListDataStructure<number>>(
    innerNode,
    60,
    40,
    innerNodeTwo,
    20
  );

  push<number | LinkedListDataStructure<number>>(
    node,
    6,
    2,
    5,
    innerNode,
    2,
    6,
    1
  );

  const expected = new RawLinkedList<number>();
  push<number | LinkedListDataStructure<number>>(
    expected,
    6,
    2,
    5,
    60,
    40,
    innerNodeTwo,
    20,
    2,
    6,
    1
  );

  const received = flat(node, 1);

  expect(received).not.toBe(node);
  expect(received).toEqual(expected);
});

it('should flatten completely the linked list', () => {
  const node = new RawLinkedList<number>();
  const innerNode = new RawLinkedList<number>();

  const innerNodeTwo = new RawLinkedList<number>();
  push<number>(innerNodeTwo, 100, 600, 200, 700);
  push<number | LinkedListDataStructure<number>>(
    innerNode,
    60,
    40,
    innerNodeTwo,
    20
  );

  push<number | LinkedListDataStructure<number>>(
    node,
    6,
    2,
    5,
    innerNode,
    2,
    6,
    1
  );

  const expected = new RawLinkedList<number>();
  push<number | LinkedListDataStructure<number>>(
    expected,
    6,
    2,
    5,
    60,
    40,
    100,
    600,
    200,
    700,
    20,
    2,
    6,
    1
  );

  const received = flat(node, 2);

  expect(received).not.toBe(node);
  expect(received).toEqual(expected);
});

it('should flatten completely all nodables data structures', () => {
  const node = { nodes: new RawLinkedList<number>() };
  const innerNode = { nodes: new RawLinkedList<number>() };

  const innerNodeTwo = { nodes: new RawLinkedList<number>() };
  push(innerNodeTwo.nodes, 100, 600, 200, 700);
  push<any>(innerNode.nodes, 60, 40, innerNodeTwo, 20);

  push<any>(node.nodes, 6, 2, 5, innerNode, 2, 6, 1);

  const expected = new RawLinkedList<number>();
  push<any>(expected, 6, 2, 5, 60, 40, innerNodeTwo, 20, 2, 6, 1);

  const received = flat(node.nodes, 1);

  expect(received).not.toBe(node);
  expect(received).toEqual(expected);
});
