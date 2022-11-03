import { LinkedList } from '../../../../../linked-list';

export function fill<T>(
  linkedList: LinkedList<T>,
  value: T,
  start = 0,
  end: number
): LinkedList {
  let current = linkedList.rawLinkedList.head;
  let i = 0;

  while (current) {
    if (i >= start && i < end) {
      current.value = value;
    }
    current = current.next;
    i += 1;
  }

  return linkedList;
}
