import { LinkedListDataStructure } from '../../raw-linked-list';
import { pop } from '../pop';

export function clear<T = any>(nodes: LinkedListDataStructure<T>): void {
  while (nodes.length > 0) {
    pop(nodes);
  }
}
