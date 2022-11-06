import { LinkedListDataStructure } from '../../raw-linked-list';
import { forEach } from '../for-each';

export function reduce<T, U = any, This = any>(
  this: This,
  nodes: LinkedListDataStructure,
  callbackfn: (
    previousValue: U | T,
    currentValue: T,
    currentIndex: number,
    LinkedList: This
  ) => U | T,
  initialValue?: U | T
): U | T {
  const isInitialValueMissing = arguments.length === 2;
  if (nodes.length === 0 && isInitialValueMissing) {
    throw new TypeError('Reduce of empty linked list with no initial value');
  }
  let currentPreviousValue = initialValue;

  forEach<T>(nodes, (value, index) => {
    if (!currentPreviousValue && isInitialValueMissing) {
      currentPreviousValue = value;
      return;
    }
    currentPreviousValue = callbackfn(
      currentPreviousValue as T | U,
      value,
      index,
      this
    );
  });

  return currentPreviousValue as U | T;
}
