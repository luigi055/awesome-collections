import { LinkedListDataStructure } from '../../raw-linked-list';
import { get } from '../get';

/**
 * Returns the item located at the specified index.
 * @param index The zero-based index of the desired code unit. A negative index will count back from the last item.
 */
export function at<T = any>(
  nodes: LinkedListDataStructure,
  index: number
): T | undefined {
  if (index === undefined) return undefined;
  const signedIndexLookUp =
    index < 0 && Math.abs(index) <= nodes.length
      ? Math.abs(index * -1 - nodes.length)
      : index;

  if (signedIndexLookUp >= nodes.length) return undefined;

  return get(nodes, signedIndexLookUp);
}
