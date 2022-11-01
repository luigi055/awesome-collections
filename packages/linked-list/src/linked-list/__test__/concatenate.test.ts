import { LinkedList } from '../linked-list';
import { describe, it, expect } from 'vitest';

describe('Linked list is concatenable', () => {
  it("should only copy an linkedlist if the concat doesn't receive any argument", () => {
    const ll = new LinkedList([2, 5, 4]);

    const newLL = ll.concat();
    expect(newLL).toEqual(new LinkedList([2, 5, 4]));
    expect(newLL).not.toBe(ll);
  });

  it('should add more than one linked lists and return a new one with the final result', () => {
    const ll = new LinkedList([2, 5, 4]);

    const newLinkedList = ll.concat(
      new LinkedList([22, 25, 24]),
      new LinkedList([32, 35, 34])
    );

    expect(newLinkedList).toEqual(
      new LinkedList([2, 5, 4, 22, 25, 24, 32, 35, 34])
    );
    expect(newLinkedList).not.toBe(ll);
  });

  it('should concatenate values of the same type without being in a linked list', () => {
    const ll = new LinkedList([2, 5, 4]);

    const newLinkedList = ll.concat(
      new LinkedList([22, 25, 24]),
      1500,
      6000,
      new LinkedList([32, 35, 34]),
      150_000
    );

    expect(newLinkedList).toEqual(
      new LinkedList([2, 5, 4, 22, 25, 24, 1500, 6000, 32, 35, 34, 150_000])
    );
    expect(newLinkedList).not.toBe(ll);
  });
});
