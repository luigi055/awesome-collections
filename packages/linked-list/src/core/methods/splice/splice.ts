import { DoublyLinkedList } from '../../../linked-list';
import { insertMany } from './collaborators/insert-many';
import { spliceFromStart } from './collaborators/splice-from-start';

// TODO: implement function operating over the nodes instead of the LinkedList
export function splice<T>(
  linkedList: DoublyLinkedList<T>,
  start: number,
  deleteCount: number,
  ...items: T[]
) {
  const normalizedStart = Math.max(start, 0);
  if (normalizedStart === 0)
    return spliceFromStart<T>(linkedList, deleteCount, ...items);

  const returnedLinkedList = linkedList.slice(0, 0) as DoublyLinkedList<T>;
  const currentAfterItemsInserted = insertMany<T>(
    linkedList,
    normalizedStart - 1,
    ...items
  );

  for (let i = 0; i < deleteCount; i++) {
    const removedNode = currentAfterItemsInserted?.next;
    if (!removedNode) break;

    returnedLinkedList.push(removedNode.value);
    if (currentAfterItemsInserted) {
      currentAfterItemsInserted.next = removedNode?.next;
    }

    if (currentAfterItemsInserted?.next) {
      currentAfterItemsInserted.next.previous = currentAfterItemsInserted;
    } else {
      linkedList.nodes.tail = currentAfterItemsInserted;
    }

    linkedList.nodes.length--;
  }

  return returnedLinkedList;
}
