import { LinkedListDataStructure } from '../../../../raw-linked-list';
import { _getNode } from '../_get-node';

/**
 * Returns a specified element from the linked list..
 * @returns Returns the element associated with the specified index. If no element is associated with the index, undefined is returned.
 */
export function get<T = any>(
  rawLinkedList: LinkedListDataStructure,
  index: number
): T | undefined {
  return _getNode(rawLinkedList, index)?.value;
}
