import { LinkedListDataStructure, RawLinkedList } from '../../raw-linked-list';
import { concat } from '../concat';
import { isRawLinkedList } from '../is-raw-linked-list';
import { isNodeable } from '../is_nodeable.ts';
import { reduce } from '../reduce';
import { slice } from '../slice';

export function flat<T>(
  linkedList: LinkedListDataStructure<T>,
  depth: number
): LinkedListDataStructure<T> {
  if (!(linkedList instanceof RawLinkedList))
    throw new TypeError('It receives an invalid node as first argument');

  if (depth < 1) {
    return slice<T>(linkedList, 0, linkedList.length);
  }

  return reduce<T>(
    linkedList,
    (acc, val) => {
      if (!isNodeable(val) && !isRawLinkedList(val)) {
        return concat(acc, val);
      }
      return concat(acc, flat(isNodeable(val) ? val.nodes : val, depth - 1));
    },
    new RawLinkedList<T>()
  );
}
