import {
  RawLinkedList,
  LinkedListDataStructure,
} from './../../raw-linked-list';
import { pushIterator } from '../push-iterator';
import { isNodeable } from '../is-nodeable';
import { isRawLinkedList } from '../is-raw-linked-list';
import { values } from '../values';
import { push } from '../push';

export function flatMap<T, U, This = undefined>(
  linkedList: LinkedListDataStructure<T>,
  callback: (
    this: This,
    value: T,
    index?: number,
    linkedList?: any
  ) => U | LinkedListDataStructure<U> | { nodes: LinkedListDataStructure<U> },
  thisArg?: This,
  context: any = null
): LinkedListDataStructure<U> {
  const newLinkedList = new RawLinkedList<U>();
  if (linkedList.head === undefined) return newLinkedList;
  let i = 0;
  let current = linkedList.head;
  while (i < linkedList.length) {
    const cbResult = callback.call(thisArg!, current.value, i, linkedList);

    if (isRawLinkedList(cbResult)) {
      pushIterator<U>(newLinkedList, values<U>(cbResult));
    } else if (
      isNodeable<U>(cbResult) &&
      cbResult.constructor.name === context.constructor.name
    ) {
      pushIterator<U>(newLinkedList, values<U>(cbResult.nodes));
    } else {
      push<
        U | LinkedListDataStructure<U> | { nodes: LinkedListDataStructure<U> }
      >(newLinkedList, cbResult);
    }

    if (current.next) {
      current = current.next;
    }
    i += 1;
  }

  return newLinkedList;
}
