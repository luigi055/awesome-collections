import { LinkedListDataStructure } from '../../raw-linked-list';
import { generateIterator, IteratorMethodType } from '../generate-iterator';

export function values<T = any>(nodes: LinkedListDataStructure<T>) {
  return generateIterator<T>(IteratorMethodType.values, nodes);
}
