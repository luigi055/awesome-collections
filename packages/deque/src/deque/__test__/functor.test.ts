import { Deque } from '../deque';
import { describe, it, expect } from 'vitest';

describe('Testing the map function', () => {
  it('should only return a copy of the linkedlist if map an empty linkedlist', () => {
    const linkedList = new Deque<number>();

    const addedTwoLinkedList = linkedList.map((value) => value + 2);

    expect(addedTwoLinkedList).not.toBe(linkedList);
    expect(addedTwoLinkedList).toEqual(new Deque());
  });

  it('should add 2 to each value of the linkedlist and return new copy', () => {
    const linkedList = new Deque([0, 5, 15, 20, 25, 30]);

    const addedTwoLinkedList = linkedList.map((value) => value + 2);

    expect(linkedList).toEqual(new Deque([0, 5, 15, 20, 25, 30]));
    expect(addedTwoLinkedList).toEqual(new Deque([2, 7, 17, 22, 27, 32]));
  });

  it('should concat 2 to each value of the linkedlist and return new deque of string', () => {
    const linkedList = new Deque([0, 5, 15, 20, 25, 30]);

    const addedTwoLinkedList = linkedList.map((value) => value + '2');

    expect(addedTwoLinkedList).toEqual(
      new Deque(['02', '52', '152', '202', '252', '302'])
    );
  });

  it('should not ignore undefined or void values', () => {
    const linkedList = new Deque([0, 5, 15, 20, 25, 30]);

    const addedTwoLinkedList = linkedList.map((value) => {
      if (value % 3 === 0) return;
      return value + 2;
    });

    expect(addedTwoLinkedList).toEqual(
      new Deque([undefined, 7, undefined, 22, 27, undefined])
    );
  });
});
