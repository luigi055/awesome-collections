import { LinkedListDataStructure } from '../../raw-linked-list';

export function includes<T>(
  nodes: LinkedListDataStructure,
  searchElement: T,
  fromIndex = 0
): boolean {
  if (nodes.head === undefined) return false;
  let i = 0;
  let current = nodes.head;

  while (i < nodes.length) {
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
