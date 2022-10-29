import { RawLinkedList } from '../../../../raw-linked-list/raw-linked-list';

export function map<T, U, This = any>(
  this: This,
  rawLinkedList: RawLinkedList<T>,
  updateCallback: (currentValue: U) => void,
  callbackfn: (value: T, index?: number, linkedList?: This) => U,
  thisArg?: any
): void {
  if (rawLinkedList.head === undefined) return;
  let i = 0;
  let current = rawLinkedList.head;

  while (i < rawLinkedList.length) {
    updateCallback(callbackfn.call(thisArg, current.value, i, this));
    if (current.next) {
      current = current.next;
    }

    i += 1;
  }
}
