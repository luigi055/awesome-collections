import { DoublyLinkedList } from '../../../../../linked-list';
import { LinkedListDataStructure } from '../../../../raw-linked-list';
import { values } from '../../../iterable';

export function find<T = any>(
  this: DoublyLinkedList<T>,
  rawLinkedList: LinkedListDataStructure,
  cb: (value: T, index: number, obj: DoublyLinkedList<T>) => boolean,
  thisArg?: any
): [index: number, value: T | undefined] {
  let iteration = 0;

  for (const value of values(rawLinkedList)) {
    if (cb.call(thisArg, value, iteration, this) === true)
      return [iteration, value];
    iteration += 1;
  }

  return [-1, undefined];
}
