import { LinkedListDataStructure } from '../../../../raw-linked-list';

/**
 * Performs the specified action for each element in an linked list.
 * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the linked list.
 * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
 */
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
