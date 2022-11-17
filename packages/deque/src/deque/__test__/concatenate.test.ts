import { Deque } from '../deque';
import { describe, it, expect } from 'vitest';

describe('deque is concatenable', () => {
  it("should only copy an linkedlist if the concat doesn't receive any argument", () => {
    const ll = new Deque([2, 5, 4]);

    const newLL = ll.concat();
    expect(newLL).toEqual(new Deque([2, 5, 4]));
    expect(newLL).not.toBe(ll);
  });

  it('should add more than one deques and return a new one with the final result', () => {
    const ll = new Deque([2, 5, 4]);

    const newLinkedList = ll.concat(
      new Deque([22, 25, 24]),
      new Deque([32, 35, 34])
    );

    expect(newLinkedList).toEqual(new Deque([2, 5, 4, 22, 25, 24, 32, 35, 34]));
    expect(newLinkedList).not.toBe(ll);
  });

  it('should concatenate values of the same type without being in a deque', () => {
    const ll = new Deque([2, 5, 4]);

    const newLinkedList = ll.concat(
      new Deque([22, 25, 24]),
      1500,
      6000,
      new Deque([32, 35, 34]),
      150_000
    );

    expect(newLinkedList).toEqual(
      new Deque([2, 5, 4, 22, 25, 24, 1500, 6000, 32, 35, 34, 150_000])
    );
    expect(newLinkedList).not.toBe(ll);
  });
});
