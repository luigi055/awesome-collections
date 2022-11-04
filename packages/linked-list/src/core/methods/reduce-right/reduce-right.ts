import { LinkedListDataStructure } from '../../raw-linked-list';
import { forEachReverse } from '../for-each-reverse';

export function reduceRight<T, U = any, This = any>(
  this: This,
  rawLinkedList: LinkedListDataStructure,
  callbackfn: (
    previousValue: U | T,
    currentValue: T,
    currentIndex: number,
    LinkedList: This
  ) => U | T,
  initialValue?: U | T
): U | T {
  const isInitialValueMissing = arguments.length === 2;
  if (rawLinkedList.length === 0 && isInitialValueMissing) {
    throw new TypeError('Reduce of empty linked list with no initial value');
  }

  let currentPreviousValue = initialValue;

  forEachReverse<T>(rawLinkedList, (value, index) => {
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
