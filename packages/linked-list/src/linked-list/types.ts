import { BasicLinkedList } from '../core/traits/basic-linked-list';
import { IterableDataStructure } from '../core/traits/iterable/types';
import { Sliceable } from '../core/traits/Sliceable';

export type DoublyLinkedList<T = any> = BasicLinkedList<T> &
  IterableDataStructure<T> &
  Sliceable<T>;
