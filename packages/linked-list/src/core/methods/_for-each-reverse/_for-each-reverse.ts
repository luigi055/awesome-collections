import { LinkedListDataStructure } from '../../raw-linked-list';

export function _forEachReverse<T>(
  nodes: LinkedListDataStructure,
  cb: (node: T, index: number) => void
): undefined {
  if (nodes.head === undefined || nodes.tail === undefined) return undefined;
  let i = nodes.length;
  let current = nodes.tail;
  while (i > 0) {
    cb(current.value, i - 1);
    if (current.previous) {
      current = current.previous;
    }
    i -= 1;
  }

  return undefined;
}
