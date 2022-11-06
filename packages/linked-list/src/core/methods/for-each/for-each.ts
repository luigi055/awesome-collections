import { LinkedListDataStructure } from '../../raw-linked-list';

export function forEach<T, This = any>(
  this: This,
  nodes: LinkedListDataStructure,
  callbackfn: (value: T, index: number, linkedList: This) => void,
  thisArg?: any
): void {
  if (nodes.head === undefined) return undefined;
  let i = 0;
  let current = nodes.head;
  while (i < nodes.length) {
    callbackfn.call(thisArg, current.value, i, this);
    if (current.next) {
      current = current.next;
    }
    i += 1;
  }

  return undefined;
}
