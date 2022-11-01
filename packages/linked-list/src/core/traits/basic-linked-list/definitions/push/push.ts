import {
  DoublyLinkedListNode,
  LinkedListNode,
} from '../../../../linked-list-node';
import { LinkedListDataStructure } from '../../../../raw-linked-list';

function pushValue<T = any>(
  rawLinkedList: LinkedListDataStructure,
  value: T
): DoublyLinkedListNode<T> {
  const newNode = new LinkedListNode<T>(value);
  if (!rawLinkedList.head || !rawLinkedList.tail) {
    rawLinkedList.head = newNode;
    rawLinkedList.tail = newNode;
  } else {
    rawLinkedList.tail.next = newNode;
    newNode.previous = rawLinkedList.tail;
    rawLinkedList.tail = newNode;
  }

  rawLinkedList.length++;

  return newNode;
}

/**
 * Appends new elements to the end of a linked list, and returns the new length of the linked list.
 * @param items New elements to add to the linked list.
 */
export function push<T = any>(
  rawLinkedList: LinkedListDataStructure,
  ...items: T[]
): number {
  for (const value of items) {
    pushValue(rawLinkedList, value);
  }

  return rawLinkedList.length;
}
