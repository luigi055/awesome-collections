import { LinkedListDataStructure } from '../../raw-linked-list';
import { generateIterator, IteratorMethodType } from '../generate-iterator';

export function keys<T = any>(nodes: LinkedListDataStructure<T>) {
  return generateIterator<T>(IteratorMethodType.keys, nodes);
}
