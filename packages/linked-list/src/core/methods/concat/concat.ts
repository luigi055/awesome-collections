import { DoublyLinkedList } from '../../../linked-list';
import { pushIterator } from '../push-iterator';
import { _isLinkedList } from '../_is-linked-list';

// TODO: implement function operating over the nodes instead of the LinkedList
export function concat<T>(
  linkedList: DoublyLinkedList<T>,
  ...items: (DoublyLinkedList<T> | T)[]
) {
  const newLinkedList = linkedList.slice(
    0,
    linkedList.size
  ) as DoublyLinkedList<T>;

  for (const item of items) {
    if (_isLinkedList<T>(item)) {
      pushIterator<T>(newLinkedList.nodes, item.values());
    } else {
      newLinkedList.push(item);
    }
  }

  return newLinkedList;
}
