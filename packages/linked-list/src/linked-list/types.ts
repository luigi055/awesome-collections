import { Reducible } from './../core/traits/reducible/type';
import { Filterable } from './../core/traits/filterable/type';
import { ForEach } from './../core/traits/for-each/type';
import { Searchable } from './../core/traits/searchable/types';
import { BasicLinkedList } from '../core/traits/basic-linked-list';
import { IterableDataStructure } from '../core/traits/iterable/types';
import { Sliceable } from '../core/traits/Sliceable';
import { Indexable } from '../core/traits/indexable';
import { Functor } from '../core/traits/functor';
import { Sortable } from '../core/traits/sortable';

export type DoublyLinkedList<T = any> = BasicLinkedList<T> &
  IterableDataStructure<T> &
  Sliceable<T> &
  Searchable<T> &
  Indexable<T> &
  Functor<T> &
  ForEach<T> &
  Filterable<T> &
  Sortable<T> &
  Reducible<T>;
