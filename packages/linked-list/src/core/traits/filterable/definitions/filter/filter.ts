import { LinkedListDataStructure } from '../../../../raw-linked-list';
import { values } from '../../../iterable';

export function filter<T, This = any>(
  this: This,
  rawLinkedList: LinkedListDataStructure,
  updateCallback: (currentValue: T) => void,
  predicate: (value: T, index: number, obj: This) => boolean,
  thisArg?: any
): void {
  let iteration = 0;

  for (const value of values(rawLinkedList)) {
    if (predicate.call(thisArg, value, iteration, this) === true) {
      updateCallback(value);
    }

    iteration += 1;
  }
}
