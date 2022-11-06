import { LinkedListDataStructure } from '../../raw-linked-list';
import { _getNode } from '../_get-node';

export function set<T = any>(
  nodes: LinkedListDataStructure,
  index: number,
  value: T
): boolean {
  const foundNode = _getNode(nodes, index);
  if (foundNode) {
    foundNode.value = value;
    return true;
  }
  return false;
}
