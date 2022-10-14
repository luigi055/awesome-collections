import { describe, it, expect } from 'vitest';
import { LinkedList } from './linked-list';

describe('Testing basic Linked list methods', () => {
  // TODO: make sure the linked list is not equal to an empty object
  // it('should not be equal to an empty object', () => {
  //   const linkedList = new LinkedList();

  //   expect(linkedList).not.toEqual({});
  // });

  it('should instantiate the class with the basic state', () => {
    const doublyLinkedList = new LinkedList();

    expect(doublyLinkedList.head).toBe(undefined);
    expect(doublyLinkedList.tail).toBe(undefined);
    expect(doublyLinkedList.size).toBe(0);
  });

  it('should head and tail be the same value when pushing a value into an empty linked list', () => {
    const doublyLinkedList = new LinkedList();
    const firstValue = 'hello';
    doublyLinkedList.push(firstValue);

    expect(doublyLinkedList.tail).toBe(doublyLinkedList.head);
    expect(doublyLinkedList.size).toBe(1);
  });

  it('should return the new length of the linked list when push a value or more', () => {
    const ll = new LinkedList();
    const expectedLL = new LinkedList();
    expectedLL.push(4, 7, 2, 3);

    expect(ll.push(4, 7, 2, 3)).toBe(4);
    expect(ll.size).toBe(4);

    expect(ll).toEqual(expectedLL);
  });

  it('should push a second value and the head and the tail should be the same node', () => {
    const doublyLinkedList = new LinkedList();
    const firstValue = 'hello';
    const secondValue = 'world';
    doublyLinkedList.push(firstValue, secondValue);

    expect(doublyLinkedList.head).toBe(firstValue);
    expect(doublyLinkedList.tail).toBe(secondValue);
    expect(doublyLinkedList.size).toBe(2);
  });

  it('should add more than one elements at the same time using the same push method', () => {
    const linkedList = new LinkedList<number>();
    linkedList.push(10);

    const expectedLinkedList = new LinkedList<number>();
    expectedLinkedList.push(10, 3, 8, 1, 3, 2, 7);

    expect(linkedList.push(3, 8, 1, 3, 2, 7)).toBe(6);
    expect(linkedList.size).toBe(7);

    expect(linkedList).toEqual(expectedLinkedList);
  });
});
