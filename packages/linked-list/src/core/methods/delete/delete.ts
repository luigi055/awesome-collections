import { LinkedListDataStructure } from '../../raw-linked-list';
import { _getNode } from '../_get-node';
import { pop } from '../pop';
import { shift } from '../shift';

export function deleteValue<T = any>(
  rawLinkedList: LinkedListDataStructure,
  index: number
): T | undefined {
  if (index < 0 || index >= rawLinkedList.length) return undefined;
  if (index === rawLinkedList.length - 1) return pop(rawLinkedList);
  if (index === 0) return shift(rawLinkedList);

  const previousNode = _getNode(rawLinkedList, index - 1)!;
  const nextNode = _getNode(rawLinkedList, index + 1)!;
  const removed = previousNode.next!;
  previousNode.next = removed.next;
  nextNode.previous = removed.previous;

  rawLinkedList.length--;

  return removed.value;
}
