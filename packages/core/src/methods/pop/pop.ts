import { LinkedListDataStructure } from '../../raw-linked-list';

export function pop<T = any>(nodes: LinkedListDataStructure): T | undefined {
  if (!nodes.head || !nodes.tail) return undefined;
  const poppedNode = nodes.tail;

  if (nodes.length === 1) {
    nodes.head = undefined;
    nodes.tail = undefined;
  } else {
    nodes.tail = poppedNode.previous;
    if (nodes.tail) {
      nodes.tail.next = undefined;
      poppedNode.previous = undefined;
    }
  }

  nodes.length--;

  return poppedNode?.value;
}
