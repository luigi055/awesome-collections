import { LinkedListDataStructure, RawLinkedList } from '../../raw-linked-list';

export function isNodeable<T = any>(
  element: any
): element is { nodes: LinkedListDataStructure<T> } {
  return (
    Boolean(element?.nodes) &&
    'nodes' in element &&
    element.nodes instanceof RawLinkedList
  );
}
