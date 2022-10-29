import { LinkedList } from '../linked-list';
import { describe, it, expect } from 'vitest';

describe('Testing the filter method', () => {
  it('should return a new linkedlist when filter an empty linkedlist', () => {
    const ll = new LinkedList<number>();

    const filteredLL = ll.filter((v) => v > 3);

    expect(filteredLL).not.toBe(ll);
    expect(filteredLL).toEqual(new LinkedList());
  });

  it('should return a new Linkedlist with the filtered elements', () => {
    const ll = new LinkedList<number>([1, 5, 2, 6, 1, 6, 4, 8, 5, 4]);

    const filteredLL = ll.filter((v, i, obj) => {
      return obj === ll && v >= 5 && i > 4;
    });

    expect(filteredLL).not.toBe(ll);
    expect(filteredLL).toEqual(new LinkedList([6, 8, 5]));
  });

  it('should access to the index of each value', () => {
    const linkedList = new LinkedList([4, 3, 2, 5]);

    const returnedValue = linkedList.filter((_number, index) => index > 1);

    expect(returnedValue).toEqual(new LinkedList([2, 5]));
  });

  it('should access to the original linked list object in every each value', () => {
    const linkedList = new LinkedList([4, 3, 9, 2, 5]);

    const returnedValue = linkedList.filter(
      (number, _index, linkedListArg) => number >= linkedListArg.head
    );

    expect(returnedValue).toEqual(new LinkedList([4, 9, 5]));
  });
});
