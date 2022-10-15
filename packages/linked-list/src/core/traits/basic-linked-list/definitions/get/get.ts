import { LinkedListDataStructure } from '../../../../raw-linked-list';
import { _getNode } from '../_get-node';

export function get<T = any>(
  rawLinkedList: LinkedListDataStructure,
  index: number
): T | undefined {
  return _getNode(rawLinkedList, index)?.value;
}
