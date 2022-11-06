import { LinkedListNode } from '../../linked-list-node';
import { LinkedListDataStructure } from '../../raw-linked-list';
import { push } from '../push';
import { _getNode } from '../_get-node';

export function insert<T = any>(
  nodes: LinkedListDataStructure,
  index: number,
  value: T
): boolean {
  if (index < 0 || index > nodes.length) return false;
  if (index === nodes.length) return !!push(nodes, value);

  const newNode = new LinkedListNode(value);
  const previousNode = _getNode(nodes, index - 1);

  const nextNode = previousNode!.next;

  previousNode!.next = newNode;
  newNode.next = nextNode;
  newNode.previous = previousNode;
  nextNode!.previous = newNode;

  nodes.length++;

  return true;
}
