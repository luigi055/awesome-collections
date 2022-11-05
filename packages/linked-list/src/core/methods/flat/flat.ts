import { LinkedList } from '../../../linked-list';

export function flat<T>(
  linkedList: LinkedList<T>,
  depth: number
): LinkedList<T> {
  if (depth < 1) {
    return linkedList.slice();
  }

  return linkedList.reduce(
    (acc, val) =>
      acc.concat(val instanceof LinkedList ? flat(val, depth - 1) : val),
    linkedList.slice(0, 0)
  );
}
