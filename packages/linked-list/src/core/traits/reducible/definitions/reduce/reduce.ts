/**
 * Calls the specified callback function for all the elements in an linked list. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
 * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the linked list.
 * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an linked list value.
 */
// public reduce(
//   callbackfn: (
//     previousValue: T,
//     currentValue: T,
//     currentIndex: number,
//     LinkedList: LinkedList<T>
//   ) => T
// ): T;
// public reduce(
//   callbackfn: (
//     previousValue: T,
//     currentValue: T,
//     currentIndex: number,
//     LinkedList: LinkedList<T>
//   ) => T,
//   initialValue: T
// ): T;
// public reduce<U>(
//   callbackfn: (
//     previousValue: U,
//     currentValue: T,
//     currentIndex: number,
//     LinkedList: LinkedList<T>
//   ) => U,
//   initialValue: U
// ): U;

import { LinkedListDataStructure } from '../../../../raw-linked-list';
import { forEach } from '../../../for-each';

export function reduce<T, U = any, This = any>(
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

  forEach<T>(rawLinkedList, (value, index) => {
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
