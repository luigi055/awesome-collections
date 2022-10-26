import { DoublyLinkedListNode } from '../../../linked-list-node';
import { LinkedListDataStructure } from '../../../raw-linked-list';

/**
 * Returns a specified Node from the linked list..
 * @returns Returns the a shallow copy of the Node associated with the specified index. If no Node is associated with the index, undefined is returned.
 */
export function _getNode<T = any>(
  rawLinkedList: LinkedListDataStructure,
  index: number
): DoublyLinkedListNode<T> | undefined {
  if (index < 0 || index >= rawLinkedList.length || index == undefined)
    return undefined;
  let count;
  let current;
  if (index <= rawLinkedList.length / 2) {
    count = 0;
    current = rawLinkedList.head;
    while (count !== index) {
      if (current) {
        current = current.next;
      }
      count++;
    }
  } else {
    count = rawLinkedList.length - 1;
    current = rawLinkedList.tail;
    while (count !== index) {
      if (current) {
        current = current.previous;
      }
      count--;
    }
  }
  return current;
}
