import { LinkedListDataStructure, RawLinkedList } from '../../raw-linked-list';

export function isNodeable(
  element: any
): element is { nodes: LinkedListDataStructure } {
  return (
    Boolean(element?.nodes) &&
    'nodes' in element &&
    element.nodes instanceof RawLinkedList
  );
}
