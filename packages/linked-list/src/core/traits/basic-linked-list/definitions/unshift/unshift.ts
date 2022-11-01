import { LinkedListDataStructure } from '../../../../raw-linked-list';
import {
  LinkedListNode,
  DoublyLinkedListNode,
} from '../../../../linked-list-node';

function unshiftValue<T = any>(
  rawLinkedList: LinkedListDataStructure,
  value: T
): DoublyLinkedListNode<T> {
  const newNode = new LinkedListNode(value);
  if (!rawLinkedList.head) {
    rawLinkedList.head = newNode;
    rawLinkedList.tail = newNode;
  } else {
    rawLinkedList.head.previous = newNode;
    newNode.next = rawLinkedList.head;
    rawLinkedList.head = newNode;
  }

  rawLinkedList.length++;

  return newNode;
}

export function unshift<T = any>(
  rawLinkedList: LinkedListDataStructure,
  ...items: T[]
): number {
  const lastIndex = items.length - 1;

  for (let i = lastIndex; i >= 0; i--) {
    const item = items[i];
    unshiftValue(rawLinkedList, item);
  }

  return rawLinkedList.length;
}
