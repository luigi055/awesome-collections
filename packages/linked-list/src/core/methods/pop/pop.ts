import { LinkedListDataStructure } from '../../raw-linked-list';

export function pop<T = any>(
  rawLinkedList: LinkedListDataStructure
): T | undefined {
  if (!rawLinkedList.head || !rawLinkedList.tail) return undefined;
  const poppedNode = rawLinkedList.tail;

  if (rawLinkedList.length === 1) {
    rawLinkedList.head = undefined;
    rawLinkedList.tail = undefined;
  } else {
    rawLinkedList.tail = poppedNode.previous;
    if (rawLinkedList.tail) {
      rawLinkedList.tail.next = undefined;
      poppedNode.previous = undefined;
    }
  }

  rawLinkedList.length--;

  return poppedNode?.value;
}
