import {
  DoublyLinkedListNode,
  LinkedListNode,
} from '../../../linked-list-node';
import { LinkedListDataStructure } from '../../../raw-linked-list';
import { push } from '../../push';
import { getNode } from '../../get-node';

export function insertMany<T>(
  linkedList: LinkedListDataStructure<T>,
  index: number,
  ...items: T[]
): DoublyLinkedListNode<T> | undefined {
  let current = getNode<T>(linkedList, index);
  if (!current) {
    push<T>(linkedList, ...items);
    return linkedList.tail;
  }

  for (const item of items) {
    const newNode = new LinkedListNode(item);

    newNode.next = current.next;
    newNode.previous = current;
    current.next = newNode;

    linkedList.length++;

    current = current?.next;
  }

  return current;
}
