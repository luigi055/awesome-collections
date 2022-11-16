import { LinkedListDataStructure } from '../../raw-linked-list';

export function lastIndexOf<T = any>(
  nodes: LinkedListDataStructure,
  searchElement: T,
  fromIndex: number
): number {
  if (nodes.tail === undefined) return -1;
  let i = nodes.length - 1;
  let current = nodes.tail;
  while (current !== undefined && i > -1) {
    if (current.value === searchElement && i <= fromIndex) return i;

    i -= 1;
    if (current.previous) {
      current = current.previous;
    }
  }

  return -1;
}
