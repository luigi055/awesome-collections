import { RawLinkedList } from '../../raw-linked-list/raw-linked-list';
import { LinkedListDataStructure } from '../../raw-linked-list';
import { insertMany } from './collaborators/insert-many';
import { spliceFromStart } from './collaborators/splice-from-start';
import { push } from '../push';

export function splice<T>(
  linkedList: LinkedListDataStructure<T>,
  start: number,
  deleteCount: number,
  ...items: T[]
) {
  const normalizedStart = Math.max(start, 0);
  if (normalizedStart === 0)
    return spliceFromStart<T>(linkedList, deleteCount, ...items);

  const returnedLinkedList = new RawLinkedList<T>();
  const currentAfterItemsInserted = insertMany<T>(
    linkedList,
    normalizedStart - 1,
    ...items
  );

  for (let i = 0; i < deleteCount; i++) {
    const removedNode = currentAfterItemsInserted?.next;
    if (!removedNode) break;

    push<T>(returnedLinkedList, removedNode.value);
    if (currentAfterItemsInserted) {
      currentAfterItemsInserted.next = removedNode?.next;
    }

    if (currentAfterItemsInserted?.next) {
      currentAfterItemsInserted.next.previous = currentAfterItemsInserted;
    } else {
      linkedList.tail = currentAfterItemsInserted;
    }

    linkedList.length--;
  }

  return returnedLinkedList;
}
