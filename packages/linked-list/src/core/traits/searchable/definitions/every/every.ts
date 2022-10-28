import { LinkedListDataStructure } from '../../../../raw-linked-list';
import { entries } from '../../../iterable';

export function every<T = any, This = any>(
  this: This,
  rawLinkedList: LinkedListDataStructure,
  predicate: (value: T, index: number, obj: This) => boolean,
  thisArg?: any
): boolean {
  for (const [index, value] of entries(rawLinkedList)) {
    if (predicate.call(thisArg, value, index, this) === false) return false;
  }

  return true;
}
