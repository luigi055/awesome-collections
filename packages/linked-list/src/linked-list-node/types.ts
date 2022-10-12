interface DoublyLinkedListNode<T = any> {
  value: T;
  next: DoublyLinkedListNode<T> | undefined;
  previous: DoublyLinkedListNode<T> | undefined;
}

export type { DoublyLinkedListNode };
