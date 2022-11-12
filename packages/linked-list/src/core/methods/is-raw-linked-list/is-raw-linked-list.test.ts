import { expect, it } from 'vitest';

import { RawLinkedList } from '../../raw-linked-list';
import { isRawLinkedList } from './is-raw-linked-list';

it("should return false when doesn't received any argument", () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore -- return undefined when using vanila javascript and ignoring the parameter
  expect(isRawLinkedList()).toBe(false);
});

it('should return false when passing null as argument', () => {
  expect(isRawLinkedList(null)).toBe(false);
});

it('should return false when passing any primitive', () => {
  expect(isRawLinkedList('stirng')).toBe(false);
  expect(isRawLinkedList(34)).toBe(false);
  expect(isRawLinkedList(true)).toBe(false);
  expect(isRawLinkedList(false)).toBe(false);
  expect(isRawLinkedList(87n)).toBe(false);
  expect(isRawLinkedList(Symbol('hello'))).toBe(false);
});

it("should return false when passing an object thta doesn't contain the have property", () => {
  expect(isRawLinkedList({})).toBe(false);
  expect(isRawLinkedList({ some: 'a' })).toBe(false);
});

it('should return false when passing an object that contains the nodes prop but is not a node', () => {
  expect(isRawLinkedList({ nodes: 'some' })).toBe(false);
});

it('should return true when receives a object that contain the node prop inside and is a raw node', () => {
  expect(isRawLinkedList(new RawLinkedList())).toBe(true);
});
