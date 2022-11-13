import { RawLinkedList } from './../../raw-linked-list/raw-linked-list';
import { pushIterator } from '../push-iterator';
import { isNodeable } from '../is_nodeable.ts';
import { isRawLinkedList } from '../is-raw-linked-list';
import { values } from '../values';
import { push } from '../push';
import { LinkedListDataStructure } from '../../raw-linked-list';

export function flatMap<T, U, This = undefined>(
  linkedList: LinkedListDataStructure<T>,
  callback: (
    this: This,
    value: T,
    index?: number,
    linkedList?: any
  ) => U | LinkedListDataStructure<U> | { nodes: LinkedListDataStructure<U> },
  thisArg?: This
): LinkedListDataStructure<U> {
  const newLinkedList = new RawLinkedList<U>();
  if (linkedList.head === undefined) return newLinkedList;
  let i = 0;
  let current = linkedList.head;
  while (i < linkedList.length) {
    const cbResult = callback.call(thisArg!, current.value, i, linkedList);

    if (isRawLinkedList(cbResult)) {
      pushIterator<U>(newLinkedList, values<U>(cbResult));
    } else if (isNodeable<U>(cbResult)) {
      pushIterator<U>(newLinkedList, values<U>(cbResult.nodes));
    } else {
      push<U>(newLinkedList, cbResult);
    }

    if (current.next) {
      current = current.next;
    }
    i += 1;
  }

  return newLinkedList;
}
