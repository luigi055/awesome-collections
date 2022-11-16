import { LinkedListDataStructure } from '../../raw-linked-list';
import { getNode } from '../get-node';

export function get<T = any>(
  nodes: LinkedListDataStructure,
  index: number
): T | undefined {
  return getNode(nodes, index)?.value;
}
