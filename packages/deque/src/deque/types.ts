import type * as traits from 'awesome-collections-core';

export type AbstractDeque<T> = {
  get size(): number;
  unshift(value: T): number;
  shift(): T | undefined;
  pop(): T | undefined;
  push(value: T): number;
  peekFirst(): T | undefined;
  peekLast(): T | undefined;
} & traits.IterableDataStructure<T>;
//&
//   traits.Sliceable<T> &
//   traits.Searchable<T> &
//   traits.Indexable<T> &
//   traits.Functor<T> &
//   traits.ForEach<T> &
//   traits.Fillable<T> &
//   traits.Filterable<T> &
//   traits.Sortable<T> &
//   traits.Reducible<T> &
//   traits.Reversible<T> &
//   traits.Concatenate<T> &
//   traits.Flatten<T> &
//   traits.FlatMap<T> &
//   traits.Format;
