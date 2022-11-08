import { RawLinkedList } from '../../../raw-linked-list/raw-linked-list';
import { LinkedListDataStructure } from '../../../raw-linked-list';
import { shift } from '../../shift';
import { push } from '../../push';

export function spliceFromStart<T>(
  linkedList: LinkedListDataStructure<T>,
  deleteCount: number,
  ...items: T[]
) {
  const newLinkedList = new RawLinkedList<T>();

  let i = 1;
  while (i <= deleteCount && linkedList.length > 0) {
    const shiftedElement = shift<T>(linkedList);

    if (shiftedElement) {
      push(newLinkedList, shiftedElement);
    }
    i++;
  }

  for (const item of items) {
    push(linkedList, item);
  }

  return newLinkedList;
}
