import { Concatenate } from './../core/traits/concatenate/type';
import { Reversible } from './../core/traits/reversible/type';
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
import { Format } from '../core/traits/format';
import { Flatten } from '../core/traits/flatten';

export type DoublyLinkedList<T = any> = BasicLinkedList<T> &
  IterableDataStructure<T> &
  Sliceable<T> &
  Searchable<T> &
  Indexable<T> &
  Functor<T> &
  ForEach<T> &
  Filterable<T> &
  Sortable<T> &
  Reducible<T> &
  Reversible<T> &
  Concatenate<T> &
  Flatten<T> &
  Format;
