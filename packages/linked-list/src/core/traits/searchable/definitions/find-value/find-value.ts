import { LinkedListDataStructure } from '../../../../raw-linked-list';
import { values } from '../../../iterable';

export function findValue<T = any, This = any>(
  this: This,
  rawLinkedList: LinkedListDataStructure<T>,
  cb: (value: T, index: number, obj: This) => boolean,
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
