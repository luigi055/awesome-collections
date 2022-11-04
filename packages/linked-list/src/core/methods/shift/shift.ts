import { LinkedListDataStructure } from '../../raw-linked-list';

export function shift<T = any>(
  rawLinkedList: LinkedListDataStructure
): T | undefined {
  if (!rawLinkedList.head) return undefined;
  const shiftedNode = rawLinkedList.head;

  if (rawLinkedList.length === 1) {
    rawLinkedList.head = undefined;
    rawLinkedList.tail = undefined;
  } else {
    rawLinkedList.head = shiftedNode.next;
    if (rawLinkedList.head) {
      rawLinkedList.head.previous = undefined;
      shiftedNode.next = undefined;
    }
  }

  rawLinkedList.length--;

  return shiftedNode?.value;
}
