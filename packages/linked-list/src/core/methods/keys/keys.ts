import { LinkedListDataStructure } from '../../raw-linked-list';
import { generateIterator, IteratorMethodType } from '../_generate-iterator';

export function keys<T = any>(nodes: LinkedListDataStructure<T>) {
  return generateIterator<T>(IteratorMethodType.keys, nodes);
}
