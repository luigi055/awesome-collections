import { LinkedListDataStructure } from '../../../../raw-linked-list';
import { _getNode } from '../../../_internal/_get-node';

export function slice<T = any>(
  rawLinkedList: LinkedListDataStructure<T>,
  updateCallback: (currentValue: T) => void,
  start = 0,
  end: number
): void {
  const initialElement = _getNode(rawLinkedList, start);
  if (initialElement === undefined || end < start) return;
  let i = start;
  let current = initialElement;
  while (i < end) {
    updateCallback(current.value);
    if (current.next) {
      current = current.next;
    }
    i += 1;
  }
}
