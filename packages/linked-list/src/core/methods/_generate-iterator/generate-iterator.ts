import { Entry } from 'awesome-collections-core';
import { IteratorMethodType } from './types';
import { DoublyLinkedListNode } from '../../linked-list-node';
import { LinkedListDataStructure } from '../../raw-linked-list';
import { createNextFn } from './create-next-function';

function generateIterator<T = any>(
  kind: IteratorMethodType.values,
  nodes: LinkedListDataStructure<T>
): Iterable<T> & Iterator<T>;
function generateIterator<T = any>(
  kind: IteratorMethodType.keys,
  nodes: LinkedListDataStructure<T>
): Iterable<number> & Iterator<number>;
function generateIterator<T = any>(
  kind: IteratorMethodType.entries,
  nodes: LinkedListDataStructure<T>
): Iterable<Entry<T>> & Iterator<Entry<T>>;
function generateIterator<T = any>(
  kind: IteratorMethodType,
  nodes: LinkedListDataStructure<T>
) {
  const rawLL = nodes;
  const iterableState = {
    current: undefined as DoublyLinkedListNode<T> | undefined,
    count: 0,
  };

  const next = createNextFn<T>(rawLL, iterableState, kind);
  return {
    [Symbol.iterator]() {
      return {
        next() {
          return next();
        },
      };
    },
    next() {
      return next();
    },
  };
}

export { generateIterator };
