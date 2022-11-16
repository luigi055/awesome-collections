import { DoublyLinkedListNode } from '../linked-list-node';
import type { LinkedListDataStructure } from './types';

export class RawLinkedList<T> implements LinkedListDataStructure<T> {
  head?: DoublyLinkedListNode = undefined;
  tail?: DoublyLinkedListNode = undefined;
  length = 0;
}
