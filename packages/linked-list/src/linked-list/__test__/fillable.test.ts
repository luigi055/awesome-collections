import { LinkedList } from '../linked-list';
import { describe, it, expect } from 'vitest';

describe('linked list is fillable', () => {
  it('should do nothing when trying to fill an empty linked list', () => {
    const ll = new LinkedList();

    const filledLL = ll.fill(5);

    expect(filledLL).toBe(ll);
    expect(ll).toEqual(new LinkedList());
  });

  it('should fill all elements of the linked list with the new specified value', () => {
    const ll = new LinkedList([6, 2, 4, 3, 8, 1, 4, 3]);

    const filledLL = ll.fill(5);

    expect(filledLL).toBe(ll);
    expect(ll).toEqual(new LinkedList([5, 5, 5, 5, 5, 5, 5, 5]));
  });

  it('should fill all element with the new value from an specific index', () => {
    const ll = new LinkedList([1, 4, 2, 6, 8, 7, 3, 6, 4, 2]);

    const filledLL = ll.fill(5, 4);

    expect(filledLL).toBe(ll);
    expect(ll).toEqual(new LinkedList([1, 4, 2, 6, 5, 5, 5, 5, 5, 5]));
  });

  it('should fill all element with the new value from an specific index to the specific end', () => {
    const ll = new LinkedList([1, 4, 2, 6, 8, 7, 3, 6, 4, 2]);

    const filledLL = ll.fill(5, 3, 7);

    expect(filledLL).toBe(ll);
    expect(ll).toEqual(new LinkedList([1, 4, 2, 5, 5, 5, 5, 6, 4, 2]));
  });

  it('should fill only one specific number (end starts from 1 the same as length)', () => {
    const ll = new LinkedList([1, 4, 2, 6, 8, 7, 3, 6, 4, 2]);

    const filledLL = ll.fill(5, 3, 4);

    expect(filledLL).toBe(ll);
    expect(ll).toEqual(new LinkedList([1, 4, 2, 5, 8, 7, 3, 6, 4, 2]));
  });
});
