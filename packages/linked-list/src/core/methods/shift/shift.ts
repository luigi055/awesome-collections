import { LinkedListDataStructure } from '../../raw-linked-list';

export function shift<T = any>(nodes: LinkedListDataStructure): T | undefined {
  if (!nodes.head) return undefined;
  const shiftedNode = nodes.head;

  if (nodes.length === 1) {
    nodes.head = undefined;
    nodes.tail = undefined;
  } else {
    nodes.head = shiftedNode.next;
    if (nodes.head) {
      nodes.head.previous = undefined;
      shiftedNode.next = undefined;
    }
  }

  nodes.length--;

  return shiftedNode?.value;
}
