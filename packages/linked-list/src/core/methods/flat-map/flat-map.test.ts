import { expect, it } from 'vitest';

import { LinkedListDataStructure, RawLinkedList } from '../../raw-linked-list';
import { push } from '../push';
import { values } from '../values';
import { flatMap } from './flat-map';

it('should copy an empty linkedlist with flatMap', () => {
  const ll = new RawLinkedList<number>();

  const expectedLinkedList = new RawLinkedList<number>();
  flatMap(RawLinkedList, (x) => x);

  expect(ll).not.toBe(expectedLinkedList);
  expect(expectedLinkedList).toEqual(new RawLinkedList());
});

it('should map all element and flat them if needed', () => {
  const innerLinkedList = new RawLinkedList<number>();
  push<number>(innerLinkedList, 30, 60, 40);

  const ll = new RawLinkedList<number | LinkedListDataStructure<number>>();
  push<number | LinkedListDataStructure<number>>(
    ll,
    25,
    innerLinkedList,
    12,
    1,
    4
  );

  const newLinkedList = flatMap<
    number | LinkedListDataStructure<number>,
    number
  >(ll, (x) => (typeof x === 'number' ? x * 2 : x));

  const expectedLinkedList = new RawLinkedList<number>();
  push(expectedLinkedList, 50, 30, 60, 40, 24, 2, 8);

  expect(ll).not.toBe(newLinkedList);
  expect(newLinkedList).toEqual(expectedLinkedList);
});

it('should map only elements in the same context as linked list (inner linked lists)', () => {
  const innerLinkedList = new RawLinkedList<number>();
  push<number>(innerLinkedList, 30, 60, 40);

  const ll = new RawLinkedList<number | LinkedListDataStructure<number>>();
  push<number | LinkedListDataStructure<number>>(
    ll,
    25,
    innerLinkedList,
    12,
    1,
    4
  );

  const newLinkedList = flatMap<
    number | LinkedListDataStructure<number>,
    LinkedListDataStructure<number>
  >(ll, (x) => {
    if (typeof x === 'number') return new RawLinkedList<number>();
    return x;
  });

  const expectedLinkedList = new RawLinkedList<number>();
  push(expectedLinkedList, 30, 60, 40);

  expect(ll).not.toBe(newLinkedList);
  expect(Array.from(values(newLinkedList))).toEqual(
    Array.from(values(expectedLinkedList))
  );
});

it('should flat map nodeables data structures', () => {
  class MyNodeable<T> {
    constructor(public nodes: LinkedListDataStructure<T>) {}
  }
  const innerLinkedList = new MyNodeable<number>(new RawLinkedList<number>());
  push<number>(innerLinkedList.nodes, 30, 60, 40);

  const ll = new RawLinkedList<
    number | { nodes: LinkedListDataStructure<number> }
  >();
  push<number | { nodes: LinkedListDataStructure<number> }>(
    ll,
    25,
    innerLinkedList,
    12,
    1,
    4
  );

  const newLinkedList = flatMap<
    number | LinkedListDataStructure<number>,
    LinkedListDataStructure<number>
  >(
    ll,
    (x) => {
      if (typeof x === 'number') return new RawLinkedList<number>();
      return x;
    },
    undefined,
    innerLinkedList
  );

  const expectedLinkedList = new RawLinkedList<number>();
  push(expectedLinkedList, 30, 60, 40);

  expect(ll).not.toBe(newLinkedList);
  expect(Array.from(values(newLinkedList))).toEqual(
    Array.from(values(expectedLinkedList))
  );
});
