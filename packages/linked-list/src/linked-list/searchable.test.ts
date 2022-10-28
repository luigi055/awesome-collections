import { LinkedList } from './linked-list';
import { describe, it, expect } from 'vitest';

describe('Testing the includes method', () => {
  it('should return false when look for a value in an empty linked list', () => {
    const linkedList = new LinkedList<number>();

    expect(linkedList.includes(0)).toBe(false);
  });

  it('should check if a value is inside the linkedlist', () => {
    const linkedList = new LinkedList([6, 3, 6, 4, 1]);

    expect(linkedList.includes(0)).toBe(false);
    expect(linkedList.includes(4)).toBe(true);
  });

  it('should check if a value in inside the linkedlist starting from an specific index', () => {
    const linkedList = new LinkedList([6, 4, 3, 6, 1]);

    expect(linkedList.includes(0, 0)).toBe(false);
    expect(linkedList.includes(4, 2)).toBe(false);
    expect(linkedList.includes(4, 1)).toBe(true);
  });
});

describe('Testing the find method', () => {
  it('should return undefined when trying to find an element inside an empty linked list', () => {
    const linkedlist = new LinkedList();

    expect(
      linkedlist.find((value) => {
        return value === 100;
      })
    ).toBe(undefined);
  });

  it('should return undefined then invoking the find function but the test function never met the condition', () => {
    const linkedlist = new LinkedList([4, 6, 2, 34, 8, 3, 1, 3]);

    expect(
      linkedlist.find((value) => {
        return value === 100;
      })
    ).toBe(undefined);
  });

  it('should return the value inside a linkedlist using the find method when the condition is met', () => {
    const linkedlist = new LinkedList([4, 6, 2, 34, 8, 3, 1, 3]);

    expect(
      linkedlist.find((value, index, obj) => {
        if (index === 7 && obj === linkedlist) {
          // Look for the number 3 at the seventh position
          return value === 3;
        } else {
          return false;
        }
      })
    ).toBe(3);
  });
});

describe('Testing the findIndex method', () => {
  it('should return -1 when trying to find an element inside an empty linkedlist using the findIndex method', () => {
    const ll = new LinkedList();
    expect(ll.findIndex((value) => value === 100)).toBe(-1);
  });

  it('should return -1 when trying to find an element inside a linkedlist using the findIndex method', () => {
    const ll = new LinkedList([4, 6, 2, 34, 8, 3, 1, 3]);

    expect(ll.findIndex((value) => value === 100)).toBe(-1);
  });

  it('should return the index of the element which met the condition using findIndex method', () => {
    const ll = new LinkedList([4, 6, 2, 34, 8, 3, 1, 3]);

    expect(
      ll.findIndex((value, index, obj) => {
        if (index === 7 && obj === ll) {
          // Look for the number 3 at the seventh position
          return value === 3;
        } else {
          return false;
        }
      })
    ).toBe(7);
  });
});

describe('Testing the some method', () => {
  it('should return false when trying to check if some values are in an empty linked list', () => {
    const ll = new LinkedList();

    expect(ll.some((value) => value === 3 || value === 5)).toBe(false);
  });

  it('should return true if the condition function returns true', () => {
    const ll = new LinkedList([1, 5, 2, 7]);

    expect(
      ll.some((value, index) => index === 1 && (value === 3 || value === 5))
    ).toBe(true);
  });

  it("should return false if the condition function doesn't met the condition", () => {
    const ll = new LinkedList([1, 5, 2, 7]);

    expect(ll.some((value) => value === 10)).toBe(false);
  });
});

describe('Testing the every method', () => {
  it('should return true no matter what when call the every method in an empty linked list', () => {
    const ll = new LinkedList();

    expect(ll.every(() => true)).toBe(true);
    expect(ll.every(() => false)).toBe(true);
  });

  it('should return true when checking if all values in the linked list met with the condition', () => {
    const ll = new LinkedList([6, 4, 3, 6, 1]);

    expect(ll.every((a) => a > 0)).toBe(true);
  });

  it("should return false when at least one value doesn't meet the condition", () => {
    const ll = new LinkedList([6, 4, 3, 6, 1]);

    expect(ll.every((a) => a > 1)).toBe(false);
  });
});
