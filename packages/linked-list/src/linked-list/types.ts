import { BasicLinkedList } from '../core/traits/basic-linked-list';
import { IterableDataStructure } from '../core/traits/iterable/types';

export type DoublyLinkedList<T = any> = BasicLinkedList<T> &
  IterableDataStructure<T>;
