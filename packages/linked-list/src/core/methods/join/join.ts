import { LinkedListDataStructure } from '../../raw-linked-list';
import { reduce } from '../reduce';

export function join(
  rawLinkedList: LinkedListDataStructure,
  separator = ','
): string {
  return reduce<string>(
    rawLinkedList,
    (previousValue, currentValue, index) =>
      index ? `${previousValue}${separator}${currentValue}` : `${currentValue}`,
    ''
  );
}
