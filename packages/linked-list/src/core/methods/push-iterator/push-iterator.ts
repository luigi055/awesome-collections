import { LinkedList } from '../../../linked-list';

export function pushIterator<T>(
  linkedList: LinkedList<T>,
  iterator?: Iterable<T>
): void {
  if (iterator) {
    for (const value of iterator) {
      linkedList.push(value);
    }
  }
}
