import { LinkedListDataStructure } from '../../raw-linked-list';

export function forEachReverse<T>(
  rawLinkedList: LinkedListDataStructure,
  cb: (node: T, index: number) => void
): undefined {
  if (rawLinkedList.head === undefined || rawLinkedList.tail === undefined)
    return undefined;
  let i = rawLinkedList.length;
  let current = rawLinkedList.tail;
  while (i > 0) {
    cb(current.value, i - 1);
    if (current.previous) {
      current = current.previous;
    }
    i -= 1;
  }

  return undefined;
}
