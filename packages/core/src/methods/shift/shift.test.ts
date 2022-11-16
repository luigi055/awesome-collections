import { expect, it } from 'vitest';
import { RawLinkedList } from '../../raw-linked-list';
import { shift } from './shift';
import { push } from '../push';

it('should not mutate anything in the linked list and return undefined when the linked list is empty', () => {
  const nodes = new RawLinkedList();

  expect(shift(nodes)).toBe(undefined);
  expect(nodes).toEqual(new RawLinkedList());
});

it('should remove the only element in the linked list', () => {
  const nodes = new RawLinkedList<string>();

  expect(nodes.length).toBe(0);

  push(nodes, 'Hello!');

  expect(nodes.length).toBe(1);

  expect(shift(nodes)).toBe('Hello!');
  expect(nodes.length).toBe(0);
});

it('should remove the first element of the linked list', () => {
  const nodes = new RawLinkedList<string>();

  push(nodes, 'Hello', 'my', 'name', 'is', 'pedro', '!');
  expect(nodes.length).toBe(6);

  expect(shift(nodes)).toBe('Hello');
  expect(nodes.length).toBe(5);
  expect(nodes.tail?.value).toBe('!');
  expect(nodes.head?.value).toBe('my');
});
