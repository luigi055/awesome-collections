import { DoublyLinkedList } from '../../../linked-list';
import { pushIterator } from '../push-iterator';
import { _isLinkedList } from '../_is-linked-list';

// TODO: implement function operating over the nodes instead of the LinkedList
export function flatMap<T, U, This = undefined>(
  linkedList: DoublyLinkedList<T>,
  newLinkedList: DoublyLinkedList<U>,
  callback: (
    this: This,
    value: T,
    index?: number,
    linkedList?: any
  ) => U | DoublyLinkedList<U>,
  thisArg?: This
): DoublyLinkedList<U> {
  if (linkedList.nodes.head === undefined) return newLinkedList;
  let i = 0;
  let current = linkedList.nodes.head;
  while (i < linkedList.size) {
    const cbResult = callback.call(thisArg!, current.value, i, linkedList);

    if (_isLinkedList(cbResult)) {
      pushIterator<U>(newLinkedList.nodes, cbResult.values());
    } else {
      newLinkedList.push(cbResult as U);
    }

    if (current.next) {
      current = current.next;
    }
    i += 1;
  }

  return newLinkedList;
}
