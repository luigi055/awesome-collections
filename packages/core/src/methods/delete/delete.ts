import { LinkedListDataStructure } from '../../raw-linked-list';
import { getNode } from '../get-node';
import { pop } from '../pop';
import { shift } from '../shift';

export function deleteValue<T = any>(
  nodes: LinkedListDataStructure,
  index: number
): T | undefined {
  if (index < 0 || index >= nodes.length) return undefined;
  if (index === nodes.length - 1) return pop(nodes);
  if (index === 0) return shift(nodes);

  const previousNode = getNode(nodes, index - 1)!;
  const nextNode = getNode(nodes, index + 1)!;
  const removed = previousNode.next!;
  previousNode.next = removed.next;
  nextNode.previous = removed.previous;

  nodes.length--;

  return removed.value;
}
