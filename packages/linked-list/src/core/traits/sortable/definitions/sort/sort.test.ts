import { RawLinkedList } from './../../../../raw-linked-list/raw-linked-list';
import { describe, it, expect } from 'vitest';
import { sort } from './sort';
import { push } from '../../../basic-linked-list';
import { values } from '../../../iterable';

it('should do nothing when trying to sort an empty linkedlist', () => {
  const ll = new RawLinkedList();

  sort(ll);

  expect(ll).toEqual(new RawLinkedList());
});

it('should do nothing when trying to sort a linkedlist with only one element', () => {
  const ll = new RawLinkedList();
  push<number>(ll, 4);

  const expectedLL = new RawLinkedList();
  push(expectedLL, 4);

  sort(ll);

  expect(ll).toEqual(expectedLL);
});

it('should sort elements in-place by default UTF-16 by default ascending', () => {
  const ll = new RawLinkedList();
  push<number>(ll, 4, 6, 2, 34, 8, 3, 1, 3);

  const expectedLL = new RawLinkedList();
  push<number>(expectedLL, 1, 2, 3, 3, 34, 4, 6, 8);

  sort(ll);

  expect(ll).toEqual(expectedLL);
});

it('should sort numbers ascending', () => {
  const ll = new RawLinkedList();
  push<number>(ll, 4, 6, 2, 34, 8, 3, 1, 3);

  const expectedLL = new RawLinkedList();
  push<number>(expectedLL, 1, 2, 3, 3, 4, 6, 8, 34);

  sort<number>(ll, (a, b) => a - b);

  expect(ll).toEqual(expectedLL);
});

it('should sort numbers descending', () => {
  const ll = new RawLinkedList();
  push<number>(ll, 4, 6, 2, 34, 8, 3, 1, 3);

  const expectedLL = new RawLinkedList();
  push<number>(expectedLL, 34, 8, 6, 4, 3, 3, 2, 1);

  sort<number>(ll, (a, b) => b - a);

  expect(ll).toEqual(expectedLL);
});

it('should sort strings in descending order', () => {
  const ll = new RawLinkedList();
  push(ll, 'cat', 'dog', 'elephant', 'bee', 'ant');

  const expectedLL = new RawLinkedList();
  push(expectedLL, 'elephant', 'dog', 'cat', 'bee', 'ant');

  sort<string>(ll, (a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
  });

  expect(ll).toEqual(expectedLL);
});
