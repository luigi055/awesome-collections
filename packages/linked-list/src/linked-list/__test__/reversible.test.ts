import { LinkedList } from '../linked-list';
import { describe, it, expect } from 'vitest';

describe('testing the reverse method', () => {
  it('should reverse the linked list perfectly when size is even', () => {
    const ll = new LinkedList([5, 2, 3, 4, 1, 2]);

    expect(ll.size).toBe(6);
    expect(ll.reverse()).toEqual(new LinkedList([2, 1, 4, 3, 2, 5]));
    expect(ll).toEqual(new LinkedList([2, 1, 4, 3, 2, 5]));
  });

  it('should reverse the linked list perfectly when size is odd', () => {
    const ll = new LinkedList([5, 2, 3, 4, 1, 10, 2]);

    expect(ll.size).toBe(7);
    expect(ll.reverse()).toEqual(new LinkedList([2, 10, 1, 4, 3, 2, 5]));
    expect(ll).toEqual(new LinkedList([2, 10, 1, 4, 3, 2, 5]));
  });
});
