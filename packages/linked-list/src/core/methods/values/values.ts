import { LinkedListDataStructure } from '../../raw-linked-list';
import { generateIterator, IteratorMethodType } from '../_generate-iterator';

export function values<T = any>(rawLinkedList: LinkedListDataStructure<T>) {
  return generateIterator<T>(IteratorMethodType.values, rawLinkedList);
}
