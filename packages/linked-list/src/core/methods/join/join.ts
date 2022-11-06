import { LinkedListDataStructure } from '../../raw-linked-list';
import { reduce } from '../reduce';

export function join(nodes: LinkedListDataStructure, separator = ','): string {
  return reduce<string>(
    nodes,
    (previousValue, currentValue, index) =>
      index ? `${previousValue}${separator}${currentValue}` : `${currentValue}`,
    ''
  );
}
