import { BasicLinkedList } from '../core/traits/basic-linked-list';
import { Concatenate } from '../core/traits/concatenate';
import { Filterable } from '../core/traits/filterable';
import { Flatten } from '../core/traits/flatten';
import { ForEach } from '../core/traits/for-each';
import { Format } from '../core/traits/format';
import { Functor } from '../core/traits/functor';
import { Indexable } from '../core/traits/indexable';
import { IterableDataStructure } from '../core/traits/iterable';
import { Reducible } from '../core/traits/reducible';
import { Reversible } from '../core/traits/reversible';
import { Searchable } from '../core/traits/searchable';
import { Sliceable } from '../core/traits/sliceable';
import { Sortable } from '../core/traits/sortable';
import { FlatMap } from '../core/traits/flat-map';

export type DoublyLinkedList<T> = BasicLinkedList<T> &
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
  FlatMap<T> &
  Format;
