import { LinkedListDataStructure } from '../../raw-linked-list';

export function includes<T>(
  rawLinkedList: LinkedListDataStructure,
  searchElement: T,
  fromIndex = 0
): boolean {
  if (rawLinkedList.head === undefined) return false;
  let i = 0;
  let current = rawLinkedList.head;

  while (i < rawLinkedList.length) {
    if (i < fromIndex - 1) {
      i += 1;
      break;
    }
    if (current.value === searchElement) return true;
    if (current.next) {
      current = current.next;
    }
    i += 1;
  }

  return false;
}
