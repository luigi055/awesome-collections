import { describe, it, expect } from 'vitest';
import { LinkedList } from './linked-list';

describe('Copying the linkedlist', () => {
  it('should copy an empty linkedlist with slice', () => {
    const ll = new LinkedList();
    const newList = ll.slice();

    expect(newList).not.toBe(ll);
    expect(newList).toEqual(new LinkedList());
  });

  it('should copy the entire list when the slice method is called without params', () => {
    const ll = new LinkedList([5, 2, 43, 5]);
    const newList = ll.slice();

    expect(newList).not.toBe(ll);
    expect(newList).toEqual(new LinkedList([5, 2, 43, 5]));
  });

  it('should copy a portion of the list', () => {
    const ll = new LinkedList([5, 2, 43, 5]);

    const newList = ll.slice(1, 3);

    expect(newList).toEqual(new LinkedList([2, 43]));
  });

  it('should copy from the specified index up to the end of the list, second parameter is optional', () => {
    const ll = new LinkedList([5, 2, 43, 5]);

    const newList = ll.slice(1);

    expect(newList).toEqual(new LinkedList([2, 43, 5]));
  });

  it('should copy the entire list when the copy method invoked', () => {
    const ll = new LinkedList([5, 2, 43, 5]);
    const newList = ll.copy();

    expect(newList).not.toBe(ll);
    expect(newList).toEqual(new LinkedList([5, 2, 43, 5]));
  });
});
