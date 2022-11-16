import { LinkedListDataStructure } from '../../raw-linked-list';
import { getNode } from '../get-node';

export function set<T = any>(
  nodes: LinkedListDataStructure,
  index: number,
  value: T
): boolean {
  const foundNode = getNode(nodes, index);
  if (foundNode) {
    foundNode.value = value;
    return true;
  }
  return false;
}
