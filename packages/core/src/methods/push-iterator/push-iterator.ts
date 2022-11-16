import { LinkedListDataStructure } from '../../raw-linked-list';
import { push } from '../push/push';

export function pushIterator<T>(
  linkedList: LinkedListDataStructure<T>,
  iterator?: Iterable<T>
): void {
  if (iterator) {
    for (const value of iterator) {
      push<T>(linkedList, value);
    }
  }
}
