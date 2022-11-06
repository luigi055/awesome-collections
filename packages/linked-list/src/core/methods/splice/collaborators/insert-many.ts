import { DoublyLinkedList } from '../../../../linked-list';
import {
  DoublyLinkedListNode,
  LinkedListNode,
} from '../../../linked-list-node';
import { _getNode } from '../../_get-node';

export function insertMany<T>(
  linkedList: DoublyLinkedList<T>,
  index: number,
  ...items: T[]
): DoublyLinkedListNode<T> | undefined {
  let current = _getNode(linkedList.rawLinkedList, index);
  if (!current) {
    linkedList.push(...items);
    return linkedList.rawLinkedList.tail;
  }

  for (const item of items) {
    const newNode = new LinkedListNode(item);

    newNode.next = current.next;
    newNode.previous = current;
    current.next = newNode;

    linkedList.rawLinkedList.length++;

    current = current?.next;
  }

  return current;
}
