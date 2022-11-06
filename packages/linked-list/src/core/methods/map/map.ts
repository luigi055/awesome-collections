import { RawLinkedList } from '../../raw-linked-list/raw-linked-list';

export function map<T, U, This = any>(
  this: This,
  nodes: RawLinkedList<T>,
  updateCallback: (currentValue: U) => void,
  callbackfn: (value: T, index?: number, linkedList?: This) => U,
  thisArg?: any
): void {
  if (nodes.head === undefined) return;
  let i = 0;
  let current = nodes.head;

  while (i < nodes.length) {
    updateCallback(callbackfn.call(thisArg, current.value, i, this));
    if (current.next) {
      current = current.next;
    }

    i += 1;
  }
}
