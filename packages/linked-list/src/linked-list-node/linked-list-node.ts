import type { DoublyLinkedListNode } from './types';

export class LinkedListNode<T = any> implements DoublyLinkedListNode {
  public next: LinkedListNode<T> | undefined = undefined;
  public previous: LinkedListNode<T> | undefined = undefined;
  constructor(public value: T) {}
}
