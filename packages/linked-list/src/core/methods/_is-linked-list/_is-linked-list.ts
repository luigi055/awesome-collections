import { DoublyLinkedList } from '../../../linked-list';

export function _isLinkedList<T>(item: any): item is DoublyLinkedList<T> {
  return item.constructor.name === 'LinkedList';
}
