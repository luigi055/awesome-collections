import { DoublyLinkedList } from '../../../linked-list';

export function pushIterator<T>(
  linkedList: DoublyLinkedList<T>,
  iterator?: Iterable<T>
): void {
  if (iterator) {
    for (const value of iterator) {
      linkedList.push(value);
    }
  }
}
