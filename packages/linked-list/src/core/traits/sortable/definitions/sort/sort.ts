import { LinkedListDataStructure } from '../../../../raw-linked-list';
import { pop, push } from '../../../basic-linked-list';

export function sort<T, This = any>(
  this: This,
  rawLinkedList: LinkedListDataStructure,
  compareFn?: (a: T, b: T) => number
): void {
  if (rawLinkedList.length <= 1) return;

  const array: T[] = [];
  while (rawLinkedList.length > 0) {
    const poppedElement = pop<T>(rawLinkedList);
    if (poppedElement) {
      array.push(poppedElement);
    }
  }

  array.sort(compareFn);

  for (const value of array) {
    push<T>(rawLinkedList, value);
  }
}
