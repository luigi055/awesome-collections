import { LinkedListDataStructure } from '../../raw-linked-list';
import { values } from '../values';

// Used to implements the find. findIndex and some functions
export function findValue<T = any, This = any>(
  this: This,
  nodes: LinkedListDataStructure<T>,
  cb: (value: T, index: number, obj: This) => boolean,
  thisArg?: any
): [index: number, value: T | undefined] {
  let iteration = 0;

  for (const value of values(nodes)) {
    if (cb.call(thisArg, value, iteration, this) === true)
      return [iteration, value];
    iteration += 1;
  }

  return [-1, undefined];
}
