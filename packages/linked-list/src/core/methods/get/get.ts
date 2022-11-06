import { LinkedListDataStructure } from '../../raw-linked-list';
import { _getNode } from '../_get-node';

export function get<T = any>(
  nodes: LinkedListDataStructure,
  index: number
): T | undefined {
  return _getNode(nodes, index)?.value;
}
