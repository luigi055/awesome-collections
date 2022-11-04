import { IteratorMethodType } from './types';
import { Entry } from '../../traits/iterable/types';
import { DoublyLinkedListNode } from '../../linked-list-node';
import { LinkedListDataStructure } from '../../raw-linked-list';
import { createNextFn } from './create-next-function';

function generateIterator<T = any>(
  kind: IteratorMethodType.values,
  rawLinkedList: LinkedListDataStructure<T>
): Iterable<T> & Iterator<T>;
function generateIterator<T = any>(
  kind: IteratorMethodType.keys,
  rawLinkedList: LinkedListDataStructure<T>
): Iterable<number> & Iterator<number>;
function generateIterator<T = any>(
  kind: IteratorMethodType.entries,
  rawLinkedList: LinkedListDataStructure<T>
): Iterable<Entry<T>> & Iterator<Entry<T>>;
function generateIterator<T = any>(
  kind: IteratorMethodType,
  rawLinkedList: LinkedListDataStructure<T>
) {
  const rawLL = rawLinkedList;
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
