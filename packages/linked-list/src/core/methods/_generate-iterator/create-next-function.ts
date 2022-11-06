import { IteratorMethodType } from './types';
import { DoublyLinkedListNode } from '../../linked-list-node';
import { LinkedListDataStructure } from '../../raw-linked-list';
import { Entry } from '../../traits';

function createNextFn<T>(
  nodes: LinkedListDataStructure<T>,
  iterableState: { count: number; current?: DoublyLinkedListNode<T> },
  kind: IteratorMethodType
) {
  const rawLL = nodes;

  return function next() {
    if (!iterableState.current && iterableState.count === 0) {
      iterableState.current = rawLL.head;
    }
    const isCountLargerThanLinkedListLength =
      iterableState.count >= rawLL.length;

    if (iterableState.current && !isCountLargerThanLinkedListLength) {
      const value = iterableState.current.value;
      const key = iterableState.count;
      const entry: Entry<T> = [key, value];

      iterableState.count += 1;
      iterableState.current = iterableState.current.next;
      if (kind === IteratorMethodType.entries)
        return { value: entry, done: false };
      if (kind === IteratorMethodType.keys) return { value: key, done: false };

      return { value: value, done: false };
    }

    return { value: undefined as unknown as T | number | Entry<T>, done: true };
  };
}

export { createNextFn };
