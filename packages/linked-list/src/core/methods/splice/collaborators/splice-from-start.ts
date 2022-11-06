import { DoublyLinkedList } from '../../../../linked-list';

export function spliceFromStart<T>(
  linkedList: DoublyLinkedList<T>,
  deleteCount: number,
  ...items: T[]
) {
  const newLinkedList = linkedList.slice(0, 0) as DoublyLinkedList<T>;

  let i = 1;
  while (i <= deleteCount && linkedList.size > 0) {
    const shiftedElement = linkedList.shift();

    if (shiftedElement) {
      newLinkedList.push(shiftedElement);
    }
    i++;
  }

  for (const item of items) {
    linkedList.push(item);
  }

  return newLinkedList;
}
