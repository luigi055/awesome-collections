import { LinkedListDataStructure } from '../../raw-linked-list';
import { entries } from '../entries';

export function every<T = any, This = any>(
  this: This,
  nodes: LinkedListDataStructure,
  predicate: (value: T, index: number, obj: This) => boolean,
  thisArg?: any
): boolean {
  for (const [index, value] of entries(nodes)) {
    if (predicate.call(thisArg, value, index, this) === false) return false;
  }

  return true;
}
