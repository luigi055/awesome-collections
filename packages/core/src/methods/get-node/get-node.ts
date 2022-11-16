import { DoublyLinkedListNode } from '../../linked-list-node';
import { LinkedListDataStructure } from '../../raw-linked-list';

/**
 * Returns a specified Node from the linked list..
 * @returns Returns the a shallow copy of the Node associated with the specified index. If no Node is associated with the index, undefined is returned.
 */
export function getNode<T = any>(
  nodes: LinkedListDataStructure,
  index: number
): DoublyLinkedListNode<T> | undefined {
  if (
    index < 0 ||
    index >= nodes.length ||
    index == undefined ||
    typeof index !== 'number'
  )
    return undefined;
  let count;
  let current;
  if (index <= nodes.length / 2) {
    count = 0;
    current = nodes.head;
    while (count !== index) {
      if (current) {
        current = current.next;
      }
      count++;
    }
  } else {
    count = nodes.length - 1;
    current = nodes.tail;
    while (count !== index) {
      if (current) {
        current = current.previous;
      }
      count--;
    }
  }
  return current;
}
