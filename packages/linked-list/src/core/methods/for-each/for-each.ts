import { LinkedListDataStructure } from '../../raw-linked-list';

export function forEach<T, This = any>(
  this: This,
  rawLinkedList: LinkedListDataStructure,
  callbackfn: (value: T, index: number, linkedList: This) => void,
  thisArg?: any
): void {
  if (rawLinkedList.head === undefined) return undefined;
  let i = 0;
  let current = rawLinkedList.head;
  while (i < rawLinkedList.length) {
    callbackfn.call(thisArg, current.value, i, this);
    if (current.next) {
      current = current.next;
    }
    i += 1;
  }

  return undefined;
}
