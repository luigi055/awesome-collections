import { Deque } from '../deque';
import { describe, it, expect } from 'vitest';

describe('Testing the flat method', () => {
  it('should only shallow copy the deque when receive 0 as argument for the depth', () => {
    const ll = new Deque([
      4,
      2,
      3,
      new Deque([4, new Deque([3]), 2]),
      3,
      new Deque([3, 6, new Deque([3, new Deque([3]), 6])]),
    ]);

    const flatten = ll.flat(0);

    expect(flatten).not.toBe(ll);
    expect(flatten).toEqual(
      new Deque([
        4,
        2,
        3,
        new Deque([4, new Deque([3]), 2]),
        3,
        new Deque([3, 6, new Deque([3, new Deque([3]), 6])]),
      ])
    );
  });

  it('should flat only the first depth level when the parameter is avoided', () => {
    const ll = new Deque([
      4,
      2,
      3,
      new Deque([4, new Deque([3]), 2]),
      3,
      new Deque([3, 6, new Deque([3, new Deque([3]), 6])]),
    ]);

    const flatten = ll.flat();

    expect(flatten).not.toBe(ll);
    expect(flatten).toEqual(
      new Deque([
        4,
        2,
        3,
        4,
        new Deque([3]),
        2,
        3,
        3,
        6,
        new Deque([3, new Deque([3]), 6]),
      ])
    );
  });

  it('should flat completely the deque using depth 3', () => {
    const ll = new Deque([
      4,
      2,
      3,
      new Deque([4, new Deque([3]), 2]),
      3,
      new Deque([3, 6, new Deque([3, new Deque([3]), 6])]),
    ]);

    const flatten = ll.flat(3);

    expect(flatten).not.toBe(ll);
    expect(flatten).toEqual(new Deque([4, 2, 3, 4, 3, 2, 3, 3, 6, 3, 3, 6]));
  });
});

describe('Testing the flatMap method', () => {
  it('should only create a new LinkedList when using flatMap with an empty list', () => {
    const linkedList = new Deque();
    const mappedLL = linkedList.flatMap((x) => [x * 2]);
    expect(mappedLL).not.toBe(linkedList);
    expect(mappedLL).toEqual(new Deque());
  });

  it('should map all strings and flatten them using flatMap', () => {
    const ll = new Deque(["it's Sunny in", '', 'California']);
    expect(ll.flatMap((x) => new Deque(x.split(' ')))).toEqual(
      new Deque(["it's", 'Sunny', 'in', '', 'California'])
    );
  });

  it('should filter values using flatMap', () => {
    const linkedList = new Deque([6, 2, 4, 1, 7, 3, 9, 4, 7]);
    const mappedLL = linkedList.flatMap((x) =>
      x < 5 ? new Deque() : new Deque([x])
    );
    expect(mappedLL).toEqual(new Deque([6, 7, 9, 7]));
  });

  it('should be the equivalent to map + flat with depth = 1', () => {
    const linkedList = new Deque([6, 2, 4, 1, 7, 3, new Deque([9]), 4, 7]);
    const mappedLL = linkedList.flatMap((x) => {
      if (Deque.isDeque(x)) {
        return x;
      }
      return x * 5;
    });
    expect(mappedLL).toEqual(new Deque([30, 10, 20, 5, 35, 15, 9, 20, 35]));
  });
});
