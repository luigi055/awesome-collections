import { DoublyLinkedList } from '../../../linked-list';
import { _isLinkedList } from '../_is-linked-list';

// TODO: implement function operating over the rawLinkedList instead of the LinkedList
export function flat<T>(
  linkedList: DoublyLinkedList<T>,
  depth: number
): DoublyLinkedList<T> {
  if (depth < 1) {
    return linkedList.slice(0, linkedList.size) as DoublyLinkedList<T>;
  }

  return linkedList.reduce(
    (acc: any | T, val) =>
      acc.concat(_isLinkedList<T>(val) ? flat(val, depth - 1) : val),
    linkedList.slice(0, 0)
  ) as DoublyLinkedList<T>;
}
