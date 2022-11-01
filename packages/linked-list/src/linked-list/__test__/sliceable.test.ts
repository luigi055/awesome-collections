import { describe, it, expect } from 'vitest';
import { LinkedList } from '../linked-list';

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
});

describe('Testing the copy method', () => {
  it('should copy the entire list when the copy method invoked', () => {
    const ll = new LinkedList([5, 2, 43, 5]);
    const newList = ll.copy();

    expect(newList).not.toBe(ll);
    expect(newList).toEqual(new LinkedList([5, 2, 43, 5]));
  });
});

describe('testing the splice method', () => {
  it('should do nothing when trying to splice an empty linked list', () => {
    const linkedList = new LinkedList();

    linkedList.splice(0);

    expect(linkedList).toEqual(new LinkedList());
  });

  it('should remove the only element in the linked list when start parameter is 0', () => {
    const linkedList = new LinkedList([4]);

    const removedLinkedList = linkedList.splice(0);

    expect(removedLinkedList).toEqual(new LinkedList([4]));
    expect(removedLinkedList.size).toEqual(1);
    expect(linkedList.size).toBe(0);
    expect(linkedList).toEqual(new LinkedList([]));
  });

  it('should remove the only element in the linked list when start parameter is 1', () => {
    const linkedList = new LinkedList([4]);

    const removedLinkedList = linkedList.splice(1);

    expect(removedLinkedList).toEqual(new LinkedList());
    expect(removedLinkedList.size).toEqual(0);
    expect(linkedList).toEqual(new LinkedList([4]));
    expect(linkedList.size).toBe(1);
  });

  it('should remove the 2 first elements in the linked list using the splice method', () => {
    const linkedList = new LinkedList([4, 1, 3, 6, 2]);

    const removedLinkedList = linkedList.splice(2);

    expect(removedLinkedList).toEqual(new LinkedList([3, 6, 2]));

    expect(linkedList.size).toBe(2);
    expect(linkedList).toEqual(new LinkedList([4, 1]));
  });

  it('should not remove any element from the start using when passing in a negative number since it would be equal to 0', () => {
    const linkedList = new LinkedList([4, 1, 3, 6, 2]);

    const removedLinkedList = linkedList.splice(-5);

    expect(removedLinkedList.size).toBe(5);
    expect(removedLinkedList).toEqual(new LinkedList([4, 1, 3, 6, 2]));

    expect(linkedList.size).toBe(0);
    expect(linkedList).toEqual(new LinkedList());
  });

  it('should remove the last element of the linked list', () => {
    const linkedList = new LinkedList([4, 1, 3, 6, 2]);

    const removedLinkedList = linkedList.splice(0, 4);

    expect(removedLinkedList.size).toBe(4);
    expect(removedLinkedList).toEqual(new LinkedList([4, 1, 3, 6]));

    expect(linkedList.size).toBe(1);
    expect(linkedList).toEqual(new LinkedList([2]));
  });

  it('should remove the first element of the linked list passing in the 2 arguments', () => {
    const linkedList = new LinkedList([4, 1, 3, 6, 2]);

    const removedLinkedList = linkedList.splice(1, 4);

    expect(removedLinkedList.size).toBe(4);
    expect(removedLinkedList).toEqual(new LinkedList([1, 3, 6, 2]));

    expect(linkedList.size).toBe(1);
    expect(linkedList).toEqual(new LinkedList([4]));
  });

  it('should keep the middle element of the list', () => {
    const linkedList = new LinkedList([4, 1, 3, 6, 2]);

    const removedLinkedList = linkedList.splice(2, 1);

    expect(removedLinkedList.size).toBe(1);
    expect(removedLinkedList).toEqual(new LinkedList([3]));

    expect(linkedList.size).toBe(4);
    expect(linkedList).toEqual(new LinkedList([4, 1, 6, 2]));
  });

  it('should keep all the elements if the second parameter is larger than the current size', () => {
    const linkedList = new LinkedList([4, 1, 3, 6, 2]);

    const splicedLL = linkedList.splice(2, 10);

    expect(splicedLL).not.toBe(linkedList);
    expect(splicedLL).toEqual(new LinkedList([3, 6, 2]));
    expect(linkedList.size).toBe(2);
    expect(linkedList).toEqual(new LinkedList([4, 1]));
  });

  it('should remove all elements of the linkedlist when pass in 0 as starting index and the length of the ll, plus add 2 extra elements', () => {
    const linkedList = new LinkedList(['Charles', 'Jhon', 'Julio']);

    const removedLinkedList = linkedList.splice(0, 3, 'Marco', 'Joe');

    expect(removedLinkedList.size).toBe(3);
    expect(removedLinkedList).toEqual(
      new LinkedList(['Charles', 'Jhon', 'Julio'])
    );
    expect(linkedList.size).toBe(2);
    expect(linkedList).toEqual(new LinkedList(['Marco', 'Joe']));
  });

  it('should remove the last 2 elements, plus add 2 extra elements', () => {
    const linkedList = new LinkedList(['Charles', 'Jhon', 'Julio']);

    const removedLinkedList = linkedList.splice(1, 3, 'Marco', 'Joe');

    expect(removedLinkedList.size).toBe(2);
    expect(removedLinkedList).toEqual(new LinkedList(['Jhon', 'Julio']));
    expect(linkedList.size).toBe(3);
    expect(Array.from(linkedList.values())).toEqual(
      Array.from(new LinkedList(['Charles', 'Marco', 'Joe']).values())
    );
  });
  it('should add the replacement elements at the edn when the start index is larger than the size of the linked list', () => {
    const linkedList = new LinkedList(['Charles', 'Jhon', 'Julio']);

    const removedLinkedList = linkedList.splice(6, 3, 'Marco', 'Joe');

    expect(removedLinkedList.size).toBe(0);
    expect(removedLinkedList).toEqual(new LinkedList());
    expect(linkedList.size).toBe(5);
    expect(Array.from(linkedList.values())).toEqual(
      Array.from(
        new LinkedList(['Charles', 'Jhon', 'Julio', 'Marco', 'Joe']).values()
      )
    );
  });
});
