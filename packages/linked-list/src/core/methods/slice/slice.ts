import { RawLinkedList } from './../../raw-linked-list/raw-linked-list';
import { LinkedListDataStructure } from '../../raw-linked-list';
import { _getNode } from '../_get-node';
import { push } from '../push';

export function slice<T = any>(
  nodes: LinkedListDataStructure<T>,
  start: number,
  end: number
): LinkedListDataStructure<T> {
  const newRawLinkedlist = new RawLinkedList<T>();

  const initialElement = _getNode(nodes, start);
  if (initialElement === undefined || end < start) return newRawLinkedlist;
  let i = start;
  let current = initialElement;
  while (i < end) {
    push<T>(newRawLinkedlist, current.value);
    if (current.next) {
      current = current.next;
    }
    i += 1;
  }

  return newRawLinkedlist;
}
