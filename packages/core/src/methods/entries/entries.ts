import { LinkedListDataStructure } from '../../raw-linked-list';
import { generateIterator, IteratorMethodType } from '../generate-iterator';

export function entries<T = any>(nodes: LinkedListDataStructure<T>) {
  return generateIterator<T>(IteratorMethodType.entries, nodes);
}
