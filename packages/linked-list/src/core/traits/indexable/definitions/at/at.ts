import { LinkedListDataStructure } from '../../../../raw-linked-list';
import { get } from '../../../basic-linked-list';

/**
 * Returns the item located at the specified index.
 * @param index The zero-based index of the desired code unit. A negative index will count back from the last item.
 */
export function at<T = any>(
  rawLinkedList: LinkedListDataStructure,
  index: number
): T | undefined {
  if (index === undefined) return undefined;
  const signedIndexLookUp =
    index < 0 && Math.abs(index) <= rawLinkedList.length
      ? Math.abs(index * -1 - rawLinkedList.length)
      : index;

  if (signedIndexLookUp >= rawLinkedList.length) return undefined;

  return get(rawLinkedList, signedIndexLookUp);
}
