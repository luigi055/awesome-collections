import { LinkedList } from '../../../linked-list';
import { DoublyLinkedListNode, LinkedListNode } from '../../linked-list-node';
import { _getNode } from '../_get-node';

function spliceFromStart<T>(
  linkedList: LinkedList<T>,
  deleteCount: number,
  ...items: T[]
) {
  const newLinkedList = new LinkedList<T>();
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

function insertMany<T>(
  linkedList: LinkedList<T>,
  index: number,
  ...items: T[]
): DoublyLinkedListNode<T> | undefined {
  let current = _getNode(linkedList.rawLinkedList, index);
  if (!current) {
    linkedList.push(...items);
    return linkedList.rawLinkedList.tail;
  }

  for (const item of items) {
    const newNode = new LinkedListNode(item);

    newNode.next = current.next;
    newNode.previous = current;
    current.next = newNode;

    linkedList.rawLinkedList.length++;

    current = current?.next;
  }

  return current;
}

export function splice<T>(
  linkedList: LinkedList<T>,
  start: number,
  deleteCount: number,
  ...items: T[]
) {
  const normalizedStart = Math.max(start, 0);
  if (normalizedStart === 0)
    return spliceFromStart<T>(linkedList, deleteCount, ...items);

  const returnedLinkedList = new LinkedList<T>();
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
      linkedList.rawLinkedList.tail = currentAfterItemsInserted;
    }

    linkedList.rawLinkedList.length--;
  }

  return returnedLinkedList;
}
