import { LinkedListDataStructure } from '../../raw-linked-list';

export function reverse(nodes: LinkedListDataStructure): void {
  let left = nodes.head;
  let right = nodes.tail;

  let i = 0;

  while (i < nodes.length / 2) {
    const cachedLeft = left!.value!;
    left!.value = right!.value;
    right!.value = cachedLeft;

    left = left?.next;
    right = right?.previous;
    i += 1;
  }
}
