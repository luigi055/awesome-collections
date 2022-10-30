import { LinkedList } from '../linked-list';
import { describe, it, expect } from 'vitest';

describe('Testing the sort method', () => {
  it('should do nothing when trying to sort an empty linkedlist', () => {
    const ll = new LinkedList();

    expect(ll.sort()).toEqual(new LinkedList());
  });

  it('should do nothing when trying to sort a linkedlist with only one element', () => {
    const ll = new LinkedList([4]);

    expect(ll.sort()).toEqual(new LinkedList([4]));
  });

  it('should sort by default UTF-16 by default ascending', () => {
    const ll = new LinkedList([4, 6, 2, 34, 8, 3, 1, 3]);

    ll.sort();

    expect(ll).toEqual(new LinkedList([1, 2, 3, 3, 34, 4, 6, 8]));
  });

  it('should sort elements in-place (mutate the linkedlist)', () => {
    const ll = new LinkedList([4, 6, 2, 34, 8, 3, 1, 3]);

    ll.sort();

    expect(ll).toEqual(new LinkedList([1, 2, 3, 3, 34, 4, 6, 8]));
  });

  it('should sort numbers ascending', () => {
    const ll = new LinkedList([4, 6, 2, 34, 8, 3, 1, 3]);

    ll.sort((a, b) => a - b);

    expect(ll).toEqual(new LinkedList([1, 2, 3, 3, 4, 6, 8, 34]));
  });

  it('should sort numbers descending', () => {
    const ll = new LinkedList([4, 6, 2, 34, 8, 3, 1, 3]);

    ll.sort((a, b) => b - a);

    expect(ll).toEqual(new LinkedList([34, 8, 6, 4, 3, 3, 2, 1]));
  });

  it('should sort strings in descending order', () => {
    const ll = new LinkedList(['cat', 'dog', 'elephant', 'bee', 'ant']);

    ll.sort((a, b) => {
      if (a > b) return -1;
      if (a < b) return 1;
      return 0;
    });

    expect(ll).toEqual(
      new LinkedList(['elephant', 'dog', 'cat', 'bee', 'ant'])
    );
  });
});
