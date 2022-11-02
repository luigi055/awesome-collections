import { LinkedList } from '../linked-list';
import { describe, it, expect } from 'vitest';

describe('Testing the flat method', () => {
  it('should only shallow copy the linked list when receive 0 as argument for the depth', () => {
    const ll = new LinkedList([
      4,
      2,
      3,
      new LinkedList([4, new LinkedList([3]), 2]),
      3,
      new LinkedList([3, 6, new LinkedList([3, new LinkedList([3]), 6])]),
    ]);

    const flatten = ll.flat(0);

    expect(flatten).not.toBe(ll);
    expect(flatten).toEqual(
      new LinkedList([
        4,
        2,
        3,
        new LinkedList([4, new LinkedList([3]), 2]),
        3,
        new LinkedList([3, 6, new LinkedList([3, new LinkedList([3]), 6])]),
      ])
    );
  });

  it('should flat only the first depth level when the parameter is avoided', () => {
    const ll = new LinkedList([
      4,
      2,
      3,
      new LinkedList([4, new LinkedList([3]), 2]),
      3,
      new LinkedList([3, 6, new LinkedList([3, new LinkedList([3]), 6])]),
    ]);

    const flatten = ll.flat();

    expect(flatten).not.toBe(ll);
    expect(flatten).toEqual(
      new LinkedList([
        4,
        2,
        3,
        4,
        new LinkedList([3]),
        2,
        3,
        3,
        6,
        new LinkedList([3, new LinkedList([3]), 6]),
      ])
    );
  });

  it('should flat completely the linked list using depth 3', () => {
    const ll = new LinkedList([
      4,
      2,
      3,
      new LinkedList([4, new LinkedList([3]), 2]),
      3,
      new LinkedList([3, 6, new LinkedList([3, new LinkedList([3]), 6])]),
    ]);

    const flatten = ll.flat(3);

    expect(flatten).not.toBe(ll);
    expect(flatten).toEqual(
      new LinkedList([4, 2, 3, 4, 3, 2, 3, 3, 6, 3, 3, 6])
    );
  });
});
