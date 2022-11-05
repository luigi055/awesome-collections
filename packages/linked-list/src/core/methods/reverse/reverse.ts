import { LinkedListDataStructure } from '../../raw-linked-list';

export function reverse(rawLinkedList: LinkedListDataStructure): void {
  let left = rawLinkedList.head;
  let right = rawLinkedList.tail;

  let i = 0;

  while (i < rawLinkedList.length / 2) {
    const cachedLeft = left!.value!;
    left!.value = right!.value;
    right!.value = cachedLeft;

    left = left?.next;
    right = right?.previous;
    i += 1;
  }
}