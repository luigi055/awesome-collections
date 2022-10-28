import { LinkedListDataStructure } from '../../../../raw-linked-list';

export function lastIndexOf<T = any>(
  rawLinkedList: LinkedListDataStructure,
  searchElement: T,
  fromIndex: number
): number {
  if (rawLinkedList.tail === undefined) return -1;
  let i = rawLinkedList.length - 1;
  let current = rawLinkedList.tail;
  while (current !== undefined && i > -1) {
    if (current.value === searchElement && i <= fromIndex) return i;

    i -= 1;
    if (current.previous) {
      current = current.previous;
    }
  }

  return -1;
}
