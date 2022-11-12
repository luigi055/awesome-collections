import { LinkedListDataStructure, RawLinkedList } from '../../raw-linked-list';

export function isRawLinkedList(
  element: any
): element is LinkedListDataStructure {
  return element instanceof RawLinkedList;
}
