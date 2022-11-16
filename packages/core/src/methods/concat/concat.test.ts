import { expect, it } from 'vitest';

import { RawLinkedList } from '../../raw-linked-list';
import { push } from '../push';
import { concat } from './concat';

it('should throw error when try to pass an non raw linked list as first argument', () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore -- return undefined when using vanila javascript and ignoring the parameter
  expect(() => concat()).toThrow(
    'It receives an invalid node as first argument'
  );
});

it('should return a shallow copy of the raw linked list when only pass one valid argument', () => {
  const node = new RawLinkedList();

  const received = concat(node);

  expect(received).not.toBe(node);
  expect(received).toEqual(new RawLinkedList());
});

it('should concat many raw Linked list', () => {
  const node = new RawLinkedList<string>();
  push<string>(node, 'a', 'b', 'c', 'd');

  const nodeTwo = new RawLinkedList<string>();
  push<string>(nodeTwo, 'e', 'f', 'g');

  const nodeThree = new RawLinkedList<string>();
  push<string>(nodeThree, 'h', 'j', 'k');

  const received = concat(node, nodeTwo, nodeThree);

  const expectedReceived = new RawLinkedList<string>();
  push<string>(
    expectedReceived,
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'j',
    'k'
  );

  expect(received).toEqual(expectedReceived);
});

it('should concat many raw Linked list in the correct order', () => {
  const node = new RawLinkedList<string>();
  push<string>(node, 'a', 'b', 'c', 'd');

  const nodeTwo = new RawLinkedList<string>();
  push<string>(nodeTwo, 'e', 'f', 'g');

  const nodeThree = new RawLinkedList<string>();
  push<string>(nodeThree, 'h', 'j', 'k');

  const received = concat(node, nodeThree, nodeTwo);

  const expectedReceived = new RawLinkedList<string>();
  push<string>(
    expectedReceived,
    'a',
    'b',
    'c',
    'd',
    'h',
    'j',
    'k',
    'e',
    'f',
    'g'
  );

  expect(received).toEqual(expectedReceived);
});

it('should accept nodeable datastructures', () => {
  const node = new RawLinkedList<string>();
  push<string>(node, 'a', 'b', 'c', 'd');

  const nodeTwo = { nodes: new RawLinkedList<string>() };
  push<string>(nodeTwo.nodes, 'e', 'f', 'g');

  const nodeThree = { nodes: new RawLinkedList<string>() };
  push<string>(nodeThree.nodes, 'h', 'j', 'k');

  const received = concat(node, nodeTwo, nodeThree);

  const expectedReceived = new RawLinkedList<string>();
  push<string>(
    expectedReceived,
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'j',
    'k'
  );

  expect(received).toEqual(expectedReceived);
});
