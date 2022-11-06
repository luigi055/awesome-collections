import { expect, it } from 'vitest';
import { RawLinkedList } from '../../raw-linked-list';
import { pop } from './pop';
import { push } from '../push';

it('should not mutate anything in the linked list and return undefined when the linked list is empty', () => {
  const nodes = new RawLinkedList();

  expect(pop(nodes)).toBe(undefined);
  expect(nodes).toEqual(new RawLinkedList());
});

it('should remove the only element in the linked list', () => {
  const nodes = new RawLinkedList<string>();

  expect(nodes.length).toBe(0);

  push(nodes, 'Hello!');

  expect(nodes.length).toBe(1);

  expect(pop(nodes)).toBe('Hello!');
  expect(nodes.length).toBe(0);
});

it('should remove the last element of the linked list', () => {
  const nodes = new RawLinkedList<string>();

  expect(nodes.length).toBe(0);

  push(nodes, 'Hello', 'my', 'name', 'is', 'pedro', '!');

  expect(nodes.length).toBe(6);

  expect(pop(nodes)).toBe('!');
  expect(nodes.length).toBe(5);
  expect(nodes.tail?.value).toBe('pedro');
});
