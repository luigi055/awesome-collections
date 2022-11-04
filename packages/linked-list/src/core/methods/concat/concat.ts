import { LinkedList } from '../../../linked-list';
import { pushIterator } from '../push-iterator';

export function concat<T>(
  linkedList: LinkedList<T>,
  ...items: (LinkedList<T> | T)[]
) {
  const newLinkedList = linkedList.slice();

  for (const item of items) {
    if (item instanceof LinkedList) {
      pushIterator<T>(newLinkedList, item.values());
    } else {
      newLinkedList.push(item);
    }
  }

  return newLinkedList;
}
