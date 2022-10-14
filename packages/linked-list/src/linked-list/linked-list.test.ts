import { describe, it, expect } from 'vitest';
import { LinkedList } from './linked-list';

describe('Testing basic Linked list methods', () => {
  it('should instantiate the class with the basic state', () => {
    const doublyLinkedList = new LinkedList();

    expect(doublyLinkedList.head).toBe(undefined);
    expect(doublyLinkedList.tail).toBe(undefined);
    expect(doublyLinkedList.size).toBe(0);
  });
});
