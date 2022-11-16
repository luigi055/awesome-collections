import { expect, it } from 'vitest';

import { RawLinkedList } from '../../raw-linked-list';
import { isNodeable } from './is-nodeable';

it("should return false when doesn't received any argument", () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore -- return undefined when using vanila javascript and ignoring the parameter
  expect(isNodeable()).toBe(false);
});

it('should return false when passing null as argument', () => {
  expect(isNodeable(null)).toBe(false);
});

it('should return false when passing any primitive', () => {
  expect(isNodeable('stirng')).toBe(false);
  expect(isNodeable(34)).toBe(false);
  expect(isNodeable(true)).toBe(false);
  expect(isNodeable(false)).toBe(false);
  expect(isNodeable(87n)).toBe(false);
  expect(isNodeable(Symbol('hello'))).toBe(false);
});

it("should return false when passing an object thta doesn't contain the have property", () => {
  expect(isNodeable({})).toBe(false);
  expect(isNodeable({ some: 'a' })).toBe(false);
});

it('should return false when passing an object that contains the nodes prop but is not a node', () => {
  expect(isNodeable({ nodes: 'some' })).toBe(false);
});

it('should return true when receives a object that contain the node prop inside and is a raw node', () => {
  expect(isNodeable({ nodes: new RawLinkedList() })).toBe(true);
  expect(isNodeable({ a: 1, b: 'something', nodes: new RawLinkedList() })).toBe(
    true
  );
});
