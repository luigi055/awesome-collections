import { LinkedListNode } from '../../linked-list-node';
import { LinkedListDataStructure } from '../../raw-linked-list';
import { push } from '../push';
import { _getNode } from '../_get-node';

export function insert<T = any>(
  rawLinkedList: LinkedListDataStructure,
  index: number,
  value: T
): boolean {
  if (index < 0 || index > rawLinkedList.length) return false;
  if (index === rawLinkedList.length) return !!push(rawLinkedList, value);

  const newNode = new LinkedListNode(value);
  const previousNode = _getNode(rawLinkedList, index - 1);

  const nextNode = previousNode!.next;

  previousNode!.next = newNode;
  newNode.next = nextNode;
  newNode.previous = previousNode;
  nextNode!.previous = newNode;

  rawLinkedList.length++;

  return true;
}
