import { LinkedListDataStructure } from '../../raw-linked-list';

export function fill<T>(
  linkedList: LinkedListDataStructure<T>,
  value: T,
  start = 0,
  end: number
): LinkedListDataStructure<T> {
  let current = linkedList.head;
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
