import { LinkedListDataStructure } from '../../../../raw-linked-list';
import { pop } from '../pop';

export function clear<T = any>(
  rawLinkedList: LinkedListDataStructure<T>
): void {
  while (rawLinkedList.length > 0) {
    pop(rawLinkedList);
  }
}
