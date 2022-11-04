import { Concatenate } from '../core/traits/concatenate';
import { Reversible } from '../core/traits/reversible';
import { Reducible } from '../core/traits/reducible';
import { Filterable } from '../core/traits/filterable';
import { ForEach } from '../core/traits/for-each';
import { Searchable } from '../core/traits/searchable';
import { BasicLinkedList } from '../core/traits/basic-linked-list';
import { IterableDataStructure } from '../core/traits/iterable';
import { Sliceable } from '../core/traits/sliceable';
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
