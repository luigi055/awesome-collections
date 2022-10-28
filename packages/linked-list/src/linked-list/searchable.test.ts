import { LinkedList } from './linked-list';
import { describe, it, expect } from 'vitest';

describe('Testing the at method', () => {
  it('should return undefined when using vanilla javascript and ignoring the index argument', () => {
    const linkedList = new LinkedList();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore -- return undefined when using vanila javascript and the second argument is ignored
    expect(linkedList.at()).toBe(undefined);
    expect(linkedList.size).toBe(0);
  });
  it('should return undefined if the value is not found using at', () => {
    const linkedList = new LinkedList();

    expect(linkedList.size).toBe(0);
    expect(linkedList.at(1)).toBe(undefined);

    expect(linkedList.size).toBe(0);
    expect(linkedList.at(-4)).toBe(undefined);
  });

  it('should return each value of the linked list using the at method using positive indexes', () => {
    const linkedList = new LinkedList(['marina', 'pedro', 'clara', 'abril']);

    expect(linkedList.size).toBe(4);
    expect(linkedList.at(0)).toBe('marina');
    expect(linkedList.at(1)).toBe('pedro');
    expect(linkedList.at(2)).toBe('clara');
    expect(linkedList.at(3)).toBe('abril');
    expect(linkedList.at(4)).toBe(undefined);
  });

  it('should return each value of the linked list using the at method using negative indexes', () => {
    const linkedList = new LinkedList([
      'someone else',
      'marina',
      'pedro',
      'clara',
      'abril',
    ]);

    expect(linkedList.size).toBe(5);
    expect(linkedList.at(-1)).toBe('abril');
    expect(linkedList.at(-2)).toBe('clara');
    expect(linkedList.at(-3)).toBe('pedro');
    expect(linkedList.at(-4)).toBe('marina');
    expect(linkedList.at(-5)).toBe('someone else');
    expect(linkedList.at(-6)).toBe(undefined);
  });
});

describe('Testing the indexof method', () => {
  it('should return -1 when look for the index of a value an empty linked list', () => {
    const linkedList = new LinkedList();

    expect(linkedList.indexOf(0)).toBe(-1);
  });

  it('should find the index of a specific value inside the linkedlist', () => {
    const linkedList = new LinkedList([6, 3, 6, 4, 1]);

    expect(linkedList.indexOf(0)).toBe(-1);
    expect(linkedList.indexOf(4)).toBe(3);
    expect(linkedList.indexOf(6)).toBe(0);
  });

  it('should start looking for the index from a specific index', () => {
    const linkedList = new LinkedList([6, 3, 6, 4, 1, 3]);

    expect(linkedList.indexOf(6, 1)).toBe(2);
    expect(linkedList.indexOf(3, 3)).toBe(5);
  });

  it('should always return -1 when the second parameter is less than 0', () => {
    const linkedList = new LinkedList([6, 3, 6, 4, 1]);

    expect(linkedList.indexOf(1, -2)).toBe(-1);
    expect(linkedList.indexOf(4, -3)).toBe(-1);
    expect(linkedList.indexOf(6, -5)).toBe(-1);
  });
});

describe('Testing the lastIndexOf method', () => {
  it('should return -1 when looking for the last index of the value of an empty linked list', () => {
    const linkedList = new LinkedList();

    expect(linkedList.lastIndexOf(0)).toBe(-1);
  });

  it('should find the last index of a specific value inside the linkedlist', () => {
    const linkedList = new LinkedList([6, 3, 6, 4, 1]);

    expect(linkedList.lastIndexOf(0)).toBe(-1);
    expect(linkedList.lastIndexOf(4)).toBe(3);
    expect(linkedList.lastIndexOf(6)).toBe(2);
  });

  it('should find the last index of a specific value starting from an specified index', () => {
    const linkedList = new LinkedList([1, 4, 2, 3, 6, 1, 3, 4]);

    expect(linkedList.lastIndexOf(1, 4)).toBe(0);
    expect(linkedList.lastIndexOf(1, 5)).toBe(5);
  });
});

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
