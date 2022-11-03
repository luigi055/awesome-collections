import { LinkedList } from '../../../../../linked-list';
import { pushIterator } from '../../../iterable';

export function flatMap<T, U, This = undefined>(
  linkedList: LinkedList<T>,
  callback: (
    this: This,
    value: T,
    index?: number,
    linkedList?: LinkedList<T>
  ) => U | LinkedList<U>,
  thisArg?: This
): LinkedList<U> {
  const newLinkedList = new LinkedList<U>();
  if (linkedList.rawLinkedList.head === undefined) return newLinkedList;
  let i = 0;
  let current = linkedList.rawLinkedList.head;
  while (i < linkedList.size) {
    const cbResult = callback.call(thisArg!, current.value, i, linkedList);

    if (LinkedList.isLinkedList(cbResult)) {
      pushIterator(newLinkedList, cbResult.values());
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
