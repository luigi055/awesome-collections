import { DoublyLinkedListNode, LinkedListNode } from '../../linked-list-node';
import { LinkedListDataStructure } from '../../raw-linked-list';

function pushValue<T = any>(
  nodes: LinkedListDataStructure,
  value: T
): DoublyLinkedListNode<T> {
  const newNode = new LinkedListNode<T>(value);
  if (!nodes.head || !nodes.tail) {
    nodes.head = newNode;
    nodes.tail = newNode;
  } else {
    nodes.tail.next = newNode;
    newNode.previous = nodes.tail;
    nodes.tail = newNode;
  }

  nodes.length++;

  return newNode;
}

/**
 * Appends new elements to the end of a linked list, and returns the new length of the linked list.
 * @param items New elements to add to the linked list.
 */
export function push<T = any>(
  nodes: LinkedListDataStructure,
  ...items: T[]
): number {
  for (const value of items) {
    pushValue(nodes, value);
  }

  return nodes.length;
}
