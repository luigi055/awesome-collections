import { expect, it } from 'vitest';

import { RawLinkedList } from '../../raw-linked-list';
import { push } from '../push';
import { at } from './at';

it('should return undefined when using vanilla javascript and the index argument is ignored', () => {
  const linkedList = new RawLinkedList<number>();

  expect(linkedList.length).toBe(0);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore -- return undefined when using vanila javascript and the second argument is ignored
  expect(at(linkedList)).toBe(undefined);
});

it('should return undefined if the value is not found using at', () => {
  const linkedList = new RawLinkedList<number>();

  expect(linkedList.length).toBe(0);
  expect(at(linkedList, 1)).toBe(undefined);

  expect(linkedList.length).toBe(0);
  expect(at(linkedList, -4)).toBe(undefined);
});

it('should return each value of the linked list using the at method using positive indexes', () => {
  const linkedList = new RawLinkedList<string>();

  push(linkedList, 'marina', 'pedro', 'clara', 'abril');

  expect(linkedList.length).toBe(4);
  expect(at(linkedList, 0)).toBe('marina');
  expect(at(linkedList, 1)).toBe('pedro');
  expect(at(linkedList, 2)).toBe('clara');
  expect(at(linkedList, 3)).toBe('abril');
  expect(at(linkedList, 4)).toBe(undefined);
});

it('should return each value of the linked list using the at method using negative indexes', () => {
  const linkedList = new RawLinkedList<string>();
  push(linkedList, 'someone else', 'marina', 'pedro', 'clara', 'abril');

  expect(linkedList.length).toBe(5);
  expect(at(linkedList, -1)).toBe('abril');
  expect(at(linkedList, -2)).toBe('clara');
  expect(at(linkedList, -3)).toBe('pedro');
  expect(at(linkedList, -4)).toBe('marina');
  expect(at(linkedList, -5)).toBe('someone else');
  expect(at(linkedList, -6)).toBe(undefined);
});
