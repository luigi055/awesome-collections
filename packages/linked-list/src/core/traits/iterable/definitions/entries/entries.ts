import { LinkedListDataStructure } from '../../../../raw-linked-list';
import { generateIterator, IteratorMethodType } from '../_generate-iterator';

export function entries<T = any>(rawLinkedList: LinkedListDataStructure<T>) {
  return generateIterator<T>(IteratorMethodType.entries, rawLinkedList);
}
