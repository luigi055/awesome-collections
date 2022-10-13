import type { DoublyLinkedListNode } from '../linked-list-node';

interface LinkedListDataStructure<T = any> {
  head?: DoublyLinkedListNode<T>;
  tail?: DoublyLinkedListNode<T>;
  length: number;
}

export type { LinkedListDataStructure };
