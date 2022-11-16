import { LinkedListDataStructure } from '../../raw-linked-list';
import { values } from '../values';

export function filter<T, This = any>(
  this: This,
  nodes: LinkedListDataStructure,
  updateCallback: (currentValue: T) => void,
  predicate: (value: T, index: number, obj: This) => boolean,
  thisArg?: any
): void {
  let iteration = 0;

  for (const value of values(nodes)) {
    if (predicate.call(thisArg, value, iteration, this) === true) {
      updateCallback(value);
    }

    iteration += 1;
  }
}
