import { LinkedListDataStructure } from '../../raw-linked-list';
import { LinkedListNode, DoublyLinkedListNode } from '../../linked-list-node';

function unshiftValue<T = any>(
  nodes: LinkedListDataStructure,
  value: T
): DoublyLinkedListNode<T> {
  const newNode = new LinkedListNode(value);
  if (!nodes.head) {
    nodes.head = newNode;
    nodes.tail = newNode;
  } else {
    nodes.head.previous = newNode;
    newNode.next = nodes.head;
    nodes.head = newNode;
  }

  nodes.length++;

  return newNode;
}

export function unshift<T = any>(
  nodes: LinkedListDataStructure,
  ...items: T[]
): number {
  const lastIndex = items.length - 1;

  for (let i = lastIndex; i >= 0; i--) {
    const item = items[i];
    unshiftValue(nodes, item);
  }

  return nodes.length;
}
