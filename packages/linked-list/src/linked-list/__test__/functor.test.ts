import { LinkedList } from '../linked-list';
import { describe, it, expect } from 'vitest';

describe('Testing the map function', () => {
  it('should only return a copy of the linkedlist if map an empty linkedlist', () => {
    const linkedList = new LinkedList<number>();

    const addedTwoLinkedList = linkedList.map((value) => value + 2);

    expect(addedTwoLinkedList).not.toBe(linkedList);
    expect(addedTwoLinkedList).toEqual(new LinkedList());
  });

  it('should add 2 to each value of the linkedlist and return new copy', () => {
    const linkedList = new LinkedList([0, 5, 15, 20, 25, 30]);

    const addedTwoLinkedList = linkedList.map((value) => value + 2);

    expect(linkedList).toEqual(new LinkedList([0, 5, 15, 20, 25, 30]));
    expect(addedTwoLinkedList).toEqual(new LinkedList([2, 7, 17, 22, 27, 32]));
  });

  it('should concat 2 to each value of the linkedlist and return new linked list of string', () => {
    const linkedList = new LinkedList([0, 5, 15, 20, 25, 30]);

    const addedTwoLinkedList = linkedList.map((value) => value + '2');

    expect(addedTwoLinkedList).toEqual(
      new LinkedList(['02', '52', '152', '202', '252', '302'])
    );
  });

  it('should not ignore undefined or void values', () => {
    const linkedList = new LinkedList([0, 5, 15, 20, 25, 30]);

    const addedTwoLinkedList = linkedList.map((value) => {
      if (value % 3 === 0) return;
      return value + 2;
    });

    expect(addedTwoLinkedList).toEqual(
      new LinkedList([undefined, 7, undefined, 22, 27, undefined])
    );
  });
});
