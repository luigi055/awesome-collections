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

describe('Testing the flatMap method', () => {
  it('should only create a new LinkedList when using flatMap with an empty list', () => {
    const linkedList = new LinkedList();
    const mappedLL = linkedList.flatMap((x) => [x * 2]);
    expect(mappedLL).not.toBe(linkedList);
    expect(mappedLL).toEqual(new LinkedList());
  });

  it('should map all strings and flatten them using flatMap', () => {
    const ll = new LinkedList(["it's Sunny in", '', 'California']);
    expect(ll.flatMap((x) => new LinkedList(x.split(' ')))).toEqual(
      new LinkedList(["it's", 'Sunny', 'in', '', 'California'])
    );
  });

  it('should filter values using flatMap', () => {
    const linkedList = new LinkedList([6, 2, 4, 1, 7, 3, 9, 4, 7]);
    const mappedLL = linkedList.flatMap((x) =>
      x < 5 ? new LinkedList() : new LinkedList([x])
    );
    expect(mappedLL).toEqual(new LinkedList([6, 7, 9, 7]));
  });

  it('should be the equivalent to map + flat with depth = 1', () => {
    const linkedList = new LinkedList([
      6,
      2,
      4,
      1,
      7,
      3,
      new LinkedList([9]),
      4,
      7,
    ]);
    const mappedLL = linkedList.flatMap((x) => {
      if (LinkedList.isLinkedList(x)) {
        return x;
      }
      return x * 5;
    });
    expect(mappedLL).toEqual(
      new LinkedList([30, 10, 20, 5, 35, 15, 9, 20, 35])
    );
  });
});
