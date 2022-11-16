import { LinkedListDataStructure, RawLinkedList } from '../../raw-linked-list';
import { isRawLinkedList } from '../is-raw-linked-list';
import { isNodeable } from '../is-nodeable';
import { push } from '../push';
import { pushIterator } from '../push-iterator';
import { slice } from '../slice';
import { values } from '../values';

export function concat<T>(
  linkedList: LinkedListDataStructure<T>,
  ...items: (
    | LinkedListDataStructure<T>
    | { nodes: LinkedListDataStructure<T> }
    | T
  )[]
) {
  if (!(linkedList instanceof RawLinkedList))
    throw new TypeError('It receives an invalid node as first argument');

  const newLinkedList = slice(linkedList, 0, linkedList.length);

  for (const item of items) {
    if (!isNodeable(item) && !isRawLinkedList(item)) {
      push<T>(newLinkedList, item);
    } else {
      pushIterator<T>(
        newLinkedList,
        values(isNodeable(item) ? item.nodes : item)
      );
    }
  }

  return newLinkedList;
}
