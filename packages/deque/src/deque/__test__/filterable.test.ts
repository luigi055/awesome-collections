import { Deque } from '../deque';
import { describe, it, expect } from 'vitest';

describe('Testing the filter method', () => {
  it('should return a new deque when filter an empty deque', () => {
    const deque = new Deque<number>();

    const filteredLL = deque.filter((v) => v > 3);

    expect(filteredLL).not.toBe(deque);
    expect(filteredLL).toEqual(new Deque());
  });

  it('should return a new deque with the filtered elements', () => {
    const deque = new Deque<number>([1, 5, 2, 6, 1, 6, 4, 8, 5, 4]);

    const filteredLL = deque.filter((v, i, obj) => {
      return obj === deque && v >= 5 && i > 4;
    });

    expect(filteredLL).not.toBe(deque);
    expect(filteredLL).toEqual(new Deque([6, 8, 5]));
  });

  it('should access to the index of each value', () => {
    const deque = new Deque([4, 3, 2, 5]);

    const returnedValue = deque.filter((_number, index) => index > 1);

    expect(returnedValue).toEqual(new Deque([2, 5]));
  });

  it('should access to the original deque object in every each value', () => {
    const deque = new Deque([4, 3, 9, 2, 5]);

    const returnedValue = deque.filter(
      (number, _index, linkedListArg) => number >= linkedListArg.peekFirst()
    );

    expect(returnedValue).toEqual(new Deque([4, 9, 5]));
  });
});
