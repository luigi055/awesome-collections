import { Searchable } from './../core/traits/searchable/types';
import { BasicLinkedList } from '../core/traits/basic-linked-list';
import { IterableDataStructure } from '../core/traits/iterable/types';
import { Sliceable } from '../core/traits/Sliceable';
import { Indexable } from '../core/traits/indexable';
import { Functor } from '../core/traits/functor';

export type DoublyLinkedList<T = any> = BasicLinkedList<T> &
  IterableDataStructure<T> &
  Sliceable<T> &
  Searchable<T> &
  Indexable<T> &
  Functor<T>;
