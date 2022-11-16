import { LinkedListDataStructure } from '../../raw-linked-list';
import { push } from '../push';
import { pop } from '../pop';

export function sort<T, This = any>(
  this: This,
  nodes: LinkedListDataStructure,
  compareFn?: (a: T, b: T) => number
): void {
  if (nodes.length <= 1) return;

  const array: T[] = [];
  while (nodes.length > 0) {
    const poppedElement = pop<T>(nodes);
    if (poppedElement) {
      array.push(poppedElement);
    }
  }

  array.sort(compareFn);

  for (const value of array) {
    push<T>(nodes, value);
  }
}
