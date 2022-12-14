import { LinkedListDataStructure } from '../../raw-linked-list';
import { getNode } from '../get-node';

export function indexOf<T = any>(
  nodes: LinkedListDataStructure,
  searchElement: T,
  fromIndex = 0
): number {
  if (nodes.head === undefined) return -1;
  let i = fromIndex;
  let current = getNode(nodes, fromIndex);

  while (current) {
    if (current.value === searchElement) return i;
    current = current.next;
    i += 1;
  }

  return -1;
}
