import { LinkedListDataStructure } from '../../../../raw-linked-list';
import { _getNode } from '../../../_internal/_get-node';

export function indexOf<T = any>(
  rawLinkedList: LinkedListDataStructure,
  searchElement: T,
  fromIndex = 0
): number {
  if (rawLinkedList.head === undefined) return -1;
  let i = fromIndex;
  let current = _getNode(rawLinkedList, fromIndex);

  while (current) {
    if (current.value === searchElement) return i;
    current = current.next;
    i += 1;
  }

  return -1;
}
