import { describe, it, expect } from 'vitest';
import { LinkedList } from './linked-list';

describe('testing static functions', () => {
  it('should check if the element is a linked list', () => {
    const linkedList = new LinkedList();

    expect(LinkedList.isLinkedList(linkedList)).toBe(true);
    expect(LinkedList.isLinkedList({})).toBe(false);
    expect(LinkedList.isLinkedList([])).toBe(false);
    expect(LinkedList.isLinkedList('string')).toBe(false);
    expect(LinkedList.isLinkedList(100)).toBe(false);
    expect(LinkedList.isLinkedList(100n)).toBe(false);
    expect(LinkedList.isLinkedList(true)).toBe(false);
    expect(LinkedList.isLinkedList(null)).toBe(false);
    expect(LinkedList.isLinkedList(undefined)).toBe(false);
    expect(LinkedList.isLinkedList(Symbol('hello'))).toBe(false);
  });
});

describe('Testing basic Linked list methods', () => {
  // TODO: make sure the linked list is not equal to an empty object
  // it('should not be equal to an empty object', () => {
  //   const linkedList = new LinkedList();

  //   expect(linkedList).not.toEqual({});
  // });

  it('should instantiate the class with the basic state', () => {
    const doublyLinkedList = new LinkedList();

    expect(doublyLinkedList.head).toBe(undefined);
    expect(doublyLinkedList.tail).toBe(undefined);
    expect(doublyLinkedList.size).toBe(0);
  });

  it('should head and tail be the same value when pushing a value into an empty linked list', () => {
    const doublyLinkedList = new LinkedList();
    const firstValue = 'hello';
    doublyLinkedList.push(firstValue);

    expect(doublyLinkedList.tail).toBe(doublyLinkedList.head);
    expect(doublyLinkedList.size).toBe(1);
  });

  it('should return the new length of the linked list when push a value or more', () => {
    const ll = new LinkedList();
    const expectedLL = new LinkedList();
    expectedLL.push(4, 7, 2, 3);

    expect(ll.push(4, 7, 2, 3)).toBe(4);
    expect(ll.size).toBe(4);

    expect(ll).toEqual(expectedLL);
  });

  it('should push a second value and the head and the tail should be the same node', () => {
    const doublyLinkedList = new LinkedList();
    const firstValue = 'hello';
    const secondValue = 'world';
    doublyLinkedList.push(firstValue, secondValue);

    expect(doublyLinkedList.head).toBe(firstValue);
    expect(doublyLinkedList.tail).toBe(secondValue);
    expect(doublyLinkedList.size).toBe(2);
  });

  it('should add more than one elements at the same time using the same push method', () => {
    const linkedList = new LinkedList<number>();
    linkedList.push(10);

    const expectedLinkedList = new LinkedList<number>();
    expectedLinkedList.push(10, 3, 8, 1, 3, 2, 7);

    expect(linkedList.push(3, 8, 1, 3, 2, 7)).toBe(6);
    expect(linkedList.size).toBe(7);

    expect(linkedList).toEqual(expectedLinkedList);
  });

  it('should push a second value and the tail previous should point to the head', () => {
    const doublyLinkedList = new LinkedList();
    const firstValue = 'hello';
    const secondValue = 'world';
    doublyLinkedList.push(firstValue);
    doublyLinkedList.push(secondValue);

    expect(doublyLinkedList.get(doublyLinkedList.size)).toBe(undefined);
    expect(doublyLinkedList.get(doublyLinkedList.size - 2)).toBe(
      doublyLinkedList.head
    );
    expect(doublyLinkedList.size).toBe(2);
  });

  it('should return undefined if there is not nodes to delete', () => {
    const doublyLinkedList = new LinkedList();

    expect(doublyLinkedList.pop()).toBe(undefined);
  });

  it('should set head and tail undefined when popping the only one node in the list', () => {
    const doublyLinkedList = new LinkedList();
    const firstValue = 'hello';

    doublyLinkedList.push(firstValue);

    expect(doublyLinkedList.size).toBe(1);
    expect(doublyLinkedList.pop()).toBe(firstValue);
    expect(doublyLinkedList.size).toBe(0);
    expect(doublyLinkedList.head).toBe(undefined);
    expect(doublyLinkedList.tail).toBe(undefined);
  });

  it('should set delete the second item and head and tail should be the same', () => {
    const doublyLinkedList = new LinkedList();
    const firstValue = 'hello';
    const secondValue = 'world';

    doublyLinkedList.push(firstValue);
    doublyLinkedList.push(secondValue);

    expect(doublyLinkedList.size).toBe(2);
    expect(doublyLinkedList.pop()).toBe(secondValue);
    expect(doublyLinkedList.size).toBe(1);
    expect(doublyLinkedList.head).toEqual(doublyLinkedList.tail);
  });

  it('should pop the third item and the new tail next property should be undefined', () => {
    const doublyLinkedList = new LinkedList();
    const firstValue = 'hello';
    const secondValue = 'world';
    const thirdValue = 'universe';

    doublyLinkedList.push(firstValue);
    doublyLinkedList.push(secondValue);
    doublyLinkedList.push(thirdValue);

    expect(doublyLinkedList.size).toBe(3);
    expect(doublyLinkedList.pop()).toBe(thirdValue);
    expect(doublyLinkedList.size).toBe(2);
    expect(doublyLinkedList.tail).toEqual(secondValue);
  });

  it('should pop the third and second item and the new tail and head should be the same', () => {
    const doublylinkedlist = new LinkedList();
    const firstvalue = 'hello';
    const secondvalue = 'world';
    const thirdvalue = 'universe';

    doublylinkedlist.push(firstvalue);
    doublylinkedlist.push(secondvalue);
    doublylinkedlist.push(thirdvalue);

    expect(doublylinkedlist.size).toBe(3);
    expect(doublylinkedlist.pop()).toBe(thirdvalue);
    expect(doublylinkedlist.pop()).toBe(secondvalue);
    expect(doublylinkedlist.size).toBe(1);
    expect(doublylinkedlist.tail).toEqual(doublylinkedlist.head);
  });

  it('should return undefined when trying to shifting a linked list without nodes', () => {
    const doublyLinkedList = new LinkedList();

    expect(doublyLinkedList.shift()).toEqual(undefined);
  });

  it('should delete the only one element using shift and head and tail should be undefined', () => {
    const doublyLinkedList = new LinkedList();
    const firstValue = 'hello';

    doublyLinkedList.push(firstValue);

    expect(doublyLinkedList.size).toBe(1);
    expect(doublyLinkedList.shift()).toEqual(firstValue);
    expect(doublyLinkedList.size).toBe(0);
    expect(doublyLinkedList.head).toBe(undefined);
    expect(doublyLinkedList.tail).toBe(undefined);
  });

  it('should delete the first node using shift and the second node is now the head', () => {
    const doublyLinkedList = new LinkedList();
    const firstValue = 'hello';
    const secondValue = 'world';
    const thirdValue = 'universe';

    doublyLinkedList.push(firstValue);
    doublyLinkedList.push(secondValue);
    doublyLinkedList.push(thirdValue);

    expect(doublyLinkedList.size).toBe(3);
    expect(doublyLinkedList.shift()).toEqual(firstValue);
    expect(doublyLinkedList.size).toBe(2);
    expect(doublyLinkedList.head).toBe(secondValue);
    expect(doublyLinkedList.tail).toBe(thirdValue);
  });

  it('should delete the first and the second node using shifting twice', () => {
    const doublyLinkedList = new LinkedList();
    const firstValue = 'hello';
    const secondValue = 'world';
    const thirdValue = 'universe';

    doublyLinkedList.push(firstValue);
    doublyLinkedList.push(secondValue);
    doublyLinkedList.push(thirdValue);

    expect(doublyLinkedList.size).toBe(3);
    expect(doublyLinkedList.shift()).toEqual(firstValue);
    expect(doublyLinkedList.shift()).toEqual(secondValue);
    expect(doublyLinkedList.size).toBe(1);
    expect(doublyLinkedList.head).toBe(thirdValue);
  });

  it('should unshift a value and the head and the tail should be the same node', () => {
    const doublyLinkedList = new LinkedList();
    const firstValue = 'hello';

    expect(doublyLinkedList.unshift(firstValue)).toBe(1);
    expect(doublyLinkedList.tail).toEqual(doublyLinkedList.head);
    expect(doublyLinkedList.size).toBe(1);
  });

  it('should unshift multiple values in the linked list', () => {
    const doublyLinkedList = new LinkedList();
    const expectedLinkedList = new LinkedList();
    const firstValue = 'Pedro';

    expectedLinkedList.push('my', 'name', 'is', firstValue);

    expect(doublyLinkedList.unshift(firstValue)).toBe(1);
    expect(doublyLinkedList.size).toBe(1);
    expect(doublyLinkedList.unshift('my', 'name', 'is')).toBe(3);
    expect(doublyLinkedList.size).toBe(4);
    expect(doublyLinkedList).toEqual(expectedLinkedList);
  });

  it('should unshift a pair of nodes', () => {
    const doublyLinkedList = new LinkedList();
    const firstValue = 'hello';
    const secondValue = 'world';

    doublyLinkedList.unshift(firstValue);
    doublyLinkedList.unshift(secondValue);

    expect(doublyLinkedList.head).toBe(secondValue);
    expect(doublyLinkedList.tail).toBe(firstValue);
    expect(doublyLinkedList.size).toBe(2);
  });

  it('should unshift three nodes', () => {
    const doublyLinkedList = new LinkedList();
    const firstValue = 'hello';
    const secondValue = 'world';
    const thirdValue = 'universe';

    doublyLinkedList.unshift(firstValue);
    doublyLinkedList.unshift(secondValue);
    doublyLinkedList.unshift(thirdValue);

    expect(doublyLinkedList.head).toBe(thirdValue);
    expect(doublyLinkedList.get(1)).toBe(secondValue);
    expect(doublyLinkedList.tail).toBe(firstValue);
    expect(doublyLinkedList.size).toBe(3);
  });

  it('should return undefined if the value is not found using get', () => {
    const linkedList = new LinkedList();

    expect(linkedList.size).toBe(0);
    expect(linkedList.get(1)).toBe(undefined);
  });

  it('should find the second value of the list', () => {
    const linkedList = new LinkedList();
    const firstValue = 'hello';
    const secondValue = 'World';
    const thirdValue = 'universe';

    linkedList.push(firstValue);
    linkedList.push(secondValue);
    linkedList.push(thirdValue);

    expect(linkedList.size).toBe(3);
    expect(linkedList.get(1)).toBe(secondValue);
  });

  it('should find the second node of the list', () => {
    const linkedList = new LinkedList();
    const firstValue = 'hello';
    const secondValue = 'World';
    const thirdValue = 'universe';

    linkedList.push(firstValue);
    linkedList.push(secondValue);
    linkedList.push(thirdValue);

    expect(linkedList.size).toBe(3);
    expect(linkedList.get(1)).toBe(secondValue);
    expect(linkedList.get(2)).toBe(thirdValue);
    expect(linkedList.get(0)).toBe(firstValue);
  });

  it('should find the penultimate node of the list', () => {
    const linkedList = new LinkedList();
    const firstValue = 'hello';
    const secondValue = 'World';
    const thirdValue = 'universe';
    const fourthValue = 'galaxy';
    const fifthValue = 'dimension';

    linkedList.push(firstValue);
    linkedList.push(secondValue);
    linkedList.push(thirdValue);
    linkedList.push(fourthValue);
    linkedList.push(fifthValue);

    expect(linkedList.size).toBe(5);
    expect(linkedList.get(3)).toBe(fourthValue);
    expect(linkedList.get(4)).toBe(fifthValue);
    expect(linkedList.get(2)).toBe(thirdValue);
  });

  it('should return undefined when get a node index that is greater than the linked list size', () => {
    const linkedList = new LinkedList();
    const firstValue = 'hello';

    linkedList.push(firstValue);

    expect(linkedList.size).toBe(1);
    expect(linkedList.get(5)).toBe(undefined);
  });

  it('should return undefined when get a node index is less than 0', () => {
    const linkedList = new LinkedList();
    const firstValue = 'hello';

    linkedList.push(firstValue);

    expect(linkedList.size).toBe(1);
    expect(linkedList.get(-1)).toBe(undefined);
  });

  it('should set the second value "something"', () => {
    const linkedList = new LinkedList();
    const firstValue = 'hello';
    const secondValue = 'wonderful';

    linkedList.push(firstValue);
    linkedList.push(secondValue);
    expect(linkedList.set(1, 'something')).toBe(true);
    expect(linkedList.get(1)).toBe('something');
  });

  it('should not set a new value to a index that doesnt exist', () => {
    const linkedList = new LinkedList();
    const firstValue = 'hello';

    linkedList.push(firstValue);
    expect(linkedList.set(1, 'something')).toBe(false);
    expect(linkedList.get(1)).toBe(undefined);
  });

  it('should not insert a new value when the index is a negative number', () => {
    const linkedList = new LinkedList();
    const firstValue = 'hello';

    expect(linkedList.insert(-1, firstValue)).toBe(false);
  });

  it('should not insert a new value when the index is greater than the size of the linked list', () => {
    const linkedList = new LinkedList();
    const firstValue = 'hello';
    const secondValue = 'world';

    linkedList.push(firstValue);

    expect(linkedList.insert(2, secondValue)).toBe(false);
  });

  it('should insert the first node in the linked list', () => {
    const linkedList = new LinkedList();
    const firstValue = 'hello';

    expect(linkedList.insert(0, firstValue)).toBe(true);
    expect(linkedList.get(0)).toBe(firstValue);
  });

  it('should insert the last node in the linked list', () => {
    const linkedList = new LinkedList();
    const firstValue = 'hello';
    const secondValue = 'world';
    const thirdValue = 'universe';
    const newThirdValue = 'galaxy';

    linkedList.push(firstValue);
    linkedList.push(secondValue);
    linkedList.push(thirdValue);

    expect(linkedList.insert(2, newThirdValue)).toBe(true);
    expect(linkedList.get(2)).toBe(newThirdValue);
  });

  it('should insert the first position of the linked list', () => {
    const linkedList = new LinkedList();

    const firstValue = 'hello';
    const secondValue = 'world';
    const newSecondValue = 'universe';
    const thirdValue = 'galaxy';

    linkedList.push(firstValue);
    linkedList.push(secondValue);
    linkedList.push(thirdValue);

    expect(linkedList.insert(1, newSecondValue)).toBe(true);
    expect(linkedList.get(1)).toBe(newSecondValue);
  });

  it('should point to the proper next and the previous node when insert a new node', () => {
    const linkedList = new LinkedList();

    const firstValue = 'hello';
    const secondValue = 'world';
    const newSecondValue = 'universe';
    const thirdValue = 'galaxy';

    linkedList.push(firstValue);
    linkedList.push(secondValue);
    linkedList.push(thirdValue);

    expect(linkedList.insert(1, newSecondValue)).toBe(true);
    expect(linkedList.get(1)).toBe(newSecondValue);
    expect(linkedList.get(2)).toBe(secondValue);
    expect(linkedList.get(0)).toBe(firstValue);
  });

  it('should not delete the element if the index is smaller than 0', () => {
    const linkedList = new LinkedList();

    expect(linkedList.delete(-1)).toBe(undefined);
  });

  it('should not delete the element if the index is greater the linkedlists size', () => {
    const linkedList = new LinkedList();

    const firstValue = 'hello';
    const secondValue = 'world';
    const thirdValue = 'universe';

    linkedList.push(firstValue);
    linkedList.push(secondValue);
    linkedList.push(thirdValue);

    expect(linkedList.size).toBe(3);
    expect(linkedList.delete(4)).toBe(undefined);
  });

  it('should not delete the element if the index is equal the linkedlists size', () => {
    const linkedList = new LinkedList();

    const firstValue = 'hello';
    const secondValue = 'world';

    linkedList.push(firstValue);
    linkedList.push(secondValue);

    expect(linkedList.size).toBe(2);
    expect(linkedList.delete(2)).toBe(undefined);
  });

  it('should delete the first element', () => {
    const linkedList = new LinkedList();

    const firstValue = 'hello';
    const secondValue = 'world';
    const thirdValue = 'universe';

    linkedList.push(firstValue);
    linkedList.push(secondValue);
    linkedList.push(thirdValue);

    expect(linkedList.size).toBe(3);
    linkedList.delete(0);
    expect(linkedList.get(0)).toBe(secondValue);
    expect(linkedList.get(1)).toBe(thirdValue);
    expect(linkedList.size).toBe(2);
  });

  it('should delete the last element', () => {
    const linkedList = new LinkedList();

    const firstValue = 'hello';
    const secondValue = 'world';
    const thirdValue = 'universe';

    linkedList.push(firstValue);
    linkedList.push(secondValue);
    linkedList.push(thirdValue);

    expect(linkedList.size).toBe(3);
    expect(linkedList.delete(2)).toBe(thirdValue);

    expect(linkedList.get(2)).toBe(undefined);
    expect(linkedList.get(2)).toBe(undefined);
    expect(linkedList.get(0)).toBe(firstValue);
    expect(linkedList.size).toBe(2);
  });

  it('should delete the second element', () => {
    const linkedList = new LinkedList();

    const firstValue = 'hello';
    const secondValue = 'world';
    const thirdValue = 'universe';
    const fourthValue = 'galaxy';

    linkedList.push(firstValue);
    linkedList.push(secondValue);
    linkedList.push(thirdValue);
    linkedList.push(fourthValue);

    expect(linkedList.size).toBe(4);
    expect(linkedList.delete(1)).toBe(secondValue);
    expect(linkedList.get(1)).toBe(thirdValue);
    expect(linkedList.get(2)).toBe(fourthValue);
    expect(linkedList.get(0)).toBe(firstValue);
    expect(linkedList.size).toBe(3);
  });
});

describe('Linked list is IterableIterator', () => {
  it('should create an initialize an linked list from an iterable', () => {
    const linkedList = new LinkedList([5, 2, 7, 1, 4]);

    expect(linkedList.size).toBe(5);
    expect(linkedList.head).toBe(5);
    expect(linkedList.get(1)).toBe(2);
    expect(linkedList.get(2)).toBe(7);
    expect(linkedList.get(3)).toBe(1);
    expect(linkedList.tail).toBe(4);
  });

  it('should instantiate the linked list using any iterable', () => {
    const linkedListFromArray = new LinkedList([5, 2, 7, 1, 4]);
    const linkedListFromSet = new LinkedList(new Set([5, 2, 7, 1, 4]));
    const linkedListFromString = new LinkedList('hello');

    const expected = new LinkedList();
    expected.push(5, 2, 7, 1, 4);

    expect(linkedListFromArray).toEqual(expected);

    expect(linkedListFromSet).toEqual(expected);
    expect(linkedListFromString).toEqual(
      new LinkedList(['h', 'e', 'l', 'l', 'o'])
    );
  });

  it('should iterate using the for of loop', () => {
    const linkedList = new LinkedList<number>();
    linkedList.push(5, 2, 7, 1, 4);

    const array = [];

    for (const element of linkedList) {
      array.push(element);
    }

    expect(array).toEqual([5, 2, 7, 1, 4]);
    expect(Array.from(linkedList)).toEqual([5, 2, 7, 1, 4]);
  });

  it('should iterate all the values in the linked list', () => {
    const linkedList = new LinkedList([18n, 50n, 44n, 2n, 23n]);

    const expectedValues = [];
    for (const element of linkedList.values()) {
      expectedValues.push(element);
    }

    expect(expectedValues).toEqual([18n, 50n, 44n, 2n, 23n]);
  });

  it('should iterate all the keys in the linked list', () => {
    const linkedList = new LinkedList([18n, 50n, 44n, 2n, 23n]);

    const expectedKeys = [];
    for (const key of linkedList.keys()) {
      expectedKeys.push(key);
    }

    expect(expectedKeys).toEqual([0, 1, 2, 3, 4]);
  });

  it('should iterate all the entries in the linked list', () => {
    const linkedList = new LinkedList([63, 223, 64, 81, 23, 56]);

    const expectedEntries = [];
    for (const key of linkedList.entries()) {
      expectedEntries.push(key);
    }

    expect(expectedEntries).toEqual([
      [0, 63],
      [1, 223],
      [2, 64],
      [3, 81],
      [4, 23],
      [5, 56],
    ]);
  });

  it('should manually go through all the iterator', () => {
    const linkedList = new LinkedList([5, 8, 3, 13, 6, 9]);

    const iterator = linkedList[Symbol.iterator]();

    const firstNext = iterator.next();
    const secondNext = iterator.next();
    const thirdNext = iterator.next();
    const fourthNext = iterator.next();
    const fifthtNext = iterator.next();
    const sixthNext = iterator.next();
    const seventhNext = iterator.next();
    const eighthNext = iterator.next();

    expect(firstNext.value).toBe(5);
    expect(firstNext.done).toBe(false);

    expect(secondNext.value).toBe(8);
    expect(secondNext.done).toBe(false);

    expect(thirdNext.value).toBe(3);
    expect(thirdNext.done).toBe(false);

    expect(fourthNext.value).toBe(13);
    expect(fourthNext.done).toBe(false);

    expect(fifthtNext.value).toBe(6);
    expect(fifthtNext.done).toBe(false);

    expect(sixthNext.value).toBe(9);
    expect(sixthNext.done).toBe(false);

    expect(seventhNext.value).toBe(undefined);
    expect(seventhNext.done).toBe(true);

    expect(eighthNext.value).toBe(undefined);
    expect(eighthNext.done).toBe(true);
  });

  it('should not show removed elements when call the next method manually', () => {
    const linkedList = new LinkedList([5, 8, 3, 13, 6, 9]);

    const iterator = linkedList[Symbol.iterator]();

    const firstNext = iterator.next();
    const secondNext = iterator.next();

    linkedList.pop();
    linkedList.pop();
    linkedList.pop();
    linkedList.pop();

    const thirdNext = iterator.next();
    const fourthNext = iterator.next();
    const fifthtNext = iterator.next();
    const sixthNext = iterator.next();
    const seventhNext = iterator.next();
    const eighthNext = iterator.next();

    expect(firstNext.value).toBe(5);
    expect(firstNext.done).toBe(false);

    expect(secondNext.value).toBe(8);
    expect(secondNext.done).toBe(false);

    expect(thirdNext.value).toBe(undefined);
    expect(thirdNext.done).toBe(true);

    expect(fourthNext.value).toBe(undefined);
    expect(fourthNext.done).toBe(true);

    expect(fifthtNext.value).toBe(undefined);
    expect(fifthtNext.done).toBe(true);

    expect(sixthNext.value).toBe(undefined);
    expect(sixthNext.done).toBe(true);

    expect(seventhNext.value).toBe(undefined);
    expect(seventhNext.done).toBe(true);

    expect(eighthNext.value).toBe(undefined);
    expect(eighthNext.done).toBe(true);
  });

  it('should manually go through all the elements using values method', () => {
    const linkedList = new LinkedList([5, 8, 3, 13, 6, 9]);

    const iterator = linkedList.values();

    const firstNext = iterator.next();
    const secondNext = iterator.next();
    const thirdNext = iterator.next();
    const fourthNext = iterator.next();
    const fifthtNext = iterator.next();
    const sixthNext = iterator.next();
    const seventhNext = iterator.next();
    const eighthNext = iterator.next();

    expect(firstNext.value).toBe(5);
    expect(firstNext.done).toBe(false);

    expect(secondNext.value).toBe(8);
    expect(secondNext.done).toBe(false);

    expect(thirdNext.value).toBe(3);
    expect(thirdNext.done).toBe(false);

    expect(fourthNext.value).toBe(13);
    expect(fourthNext.done).toBe(false);

    expect(fifthtNext.value).toBe(6);
    expect(fifthtNext.done).toBe(false);

    expect(sixthNext.value).toBe(9);
    expect(sixthNext.done).toBe(false);

    expect(seventhNext.value).toBe(undefined);
    expect(seventhNext.done).toBe(true);

    expect(eighthNext.value).toBe(undefined);
    expect(eighthNext.done).toBe(true);
  });

  it('should not show removed elements when call the next method manually using the values method', () => {
    const linkedList = new LinkedList([5, 8, 3, 13, 6, 9]);

    const iterator = linkedList.values();

    const firstNext = iterator.next();
    const secondNext = iterator.next();

    linkedList.pop();
    linkedList.pop();
    linkedList.pop();

    const thirdNext = iterator.next();
    const fourthNext = iterator.next();
    const fifthtNext = iterator.next();
    const sixthNext = iterator.next();
    const seventhNext = iterator.next();
    const eighthNext = iterator.next();

    expect(firstNext.value).toBe(5);
    expect(firstNext.done).toBe(false);

    expect(secondNext.value).toBe(8);
    expect(secondNext.done).toBe(false);

    expect(thirdNext.value).toBe(3);
    expect(thirdNext.done).toBe(false);

    expect(fourthNext.value).toBe(undefined);
    expect(fourthNext.done).toBe(true);

    expect(fifthtNext.value).toBe(undefined);
    expect(fifthtNext.done).toBe(true);

    expect(sixthNext.value).toBe(undefined);
    expect(sixthNext.done).toBe(true);

    expect(seventhNext.value).toBe(undefined);
    expect(seventhNext.done).toBe(true);

    expect(eighthNext.value).toBe(undefined);
    expect(eighthNext.done).toBe(true);
  });

  it('should manually go through all the elements using keys method', () => {
    const linkedList = new LinkedList([5, 8, 3, 13, 6, 9]);

    const iterator = linkedList.keys();

    const firstNext = iterator.next();
    const secondNext = iterator.next();
    const thirdNext = iterator.next();
    const fourthNext = iterator.next();
    const fifthtNext = iterator.next();
    const sixthNext = iterator.next();
    const seventhNext = iterator.next();
    const eighthNext = iterator.next();

    expect(firstNext.value).toBe(0);
    expect(firstNext.done).toBe(false);

    expect(secondNext.value).toBe(1);
    expect(secondNext.done).toBe(false);

    expect(thirdNext.value).toBe(2);
    expect(thirdNext.done).toBe(false);

    expect(fourthNext.value).toBe(3);
    expect(fourthNext.done).toBe(false);

    expect(fifthtNext.value).toBe(4);
    expect(fifthtNext.done).toBe(false);

    expect(sixthNext.value).toBe(5);
    expect(sixthNext.done).toBe(false);

    expect(seventhNext.value).toBe(undefined);
    expect(seventhNext.done).toBe(true);

    expect(eighthNext.value).toBe(undefined);
    expect(eighthNext.done).toBe(true);
  });

  it('should not show removed elements when call the next method manually using the keys method', () => {
    const linkedList = new LinkedList([5, 8, 3, 13, 6, 9]);

    const iterator = linkedList.keys();

    const firstNext = iterator.next();
    const secondNext = iterator.next();

    linkedList.pop();
    linkedList.pop();
    linkedList.pop();

    const thirdNext = iterator.next();
    const fourthNext = iterator.next();
    const fifthtNext = iterator.next();
    const sixthNext = iterator.next();
    const seventhNext = iterator.next();
    const eighthNext = iterator.next();

    expect(firstNext.value).toBe(0);
    expect(firstNext.done).toBe(false);

    expect(secondNext.value).toBe(1);
    expect(secondNext.done).toBe(false);

    expect(thirdNext.value).toBe(2);
    expect(thirdNext.done).toBe(false);

    expect(fourthNext.value).toBe(undefined);
    expect(fourthNext.done).toBe(true);

    expect(fifthtNext.value).toBe(undefined);
    expect(fifthtNext.done).toBe(true);

    expect(sixthNext.value).toBe(undefined);
    expect(sixthNext.done).toBe(true);

    expect(seventhNext.value).toBe(undefined);
    expect(seventhNext.done).toBe(true);

    expect(eighthNext.value).toBe(undefined);
    expect(eighthNext.done).toBe(true);
  });

  it('should manually go through all the elements using the entries method', () => {
    const linkedList = new LinkedList([5, 8, 3, 13, 6, 9]);

    const iterator = linkedList.entries();

    const firstNext = iterator.next();
    const secondNext = iterator.next();
    const thirdNext = iterator.next();
    const fourthNext = iterator.next();
    const fifthtNext = iterator.next();
    const sixthNext = iterator.next();
    const seventhNext = iterator.next();
    const eighthNext = iterator.next();

    expect(firstNext.value).toEqual([0, 5]);
    expect(firstNext.done).toBe(false);

    expect(secondNext.value).toEqual([1, 8]);
    expect(secondNext.done).toBe(false);

    expect(thirdNext.value).toEqual([2, 3]);
    expect(thirdNext.done).toBe(false);

    expect(fourthNext.value).toEqual([3, 13]);
    expect(fourthNext.done).toBe(false);

    expect(fifthtNext.value).toEqual([4, 6]);
    expect(fifthtNext.done).toBe(false);

    expect(sixthNext.value).toEqual([5, 9]);
    expect(sixthNext.done).toBe(false);

    expect(seventhNext.value).toBe(undefined);
    expect(seventhNext.done).toBe(true);

    expect(eighthNext.value).toBe(undefined);
    expect(eighthNext.done).toBe(true);
  });

  it('should not show removed elements when call the next method manually using the entries method', () => {
    const linkedList = new LinkedList([5, 8, 3, 13, 6, 9]);

    const iterator = linkedList.entries();

    const firstNext = iterator.next();
    const secondNext = iterator.next();

    linkedList.pop();
    linkedList.pop();
    linkedList.pop();

    const thirdNext = iterator.next();
    const fourthNext = iterator.next();
    const fifthtNext = iterator.next();
    const sixthNext = iterator.next();
    const seventhNext = iterator.next();
    const eighthNext = iterator.next();

    expect(firstNext.value).toEqual([0, 5]);
    expect(firstNext.done).toBe(false);

    expect(secondNext.value).toEqual([1, 8]);
    expect(secondNext.done).toBe(false);

    expect(thirdNext.value).toEqual([2, 3]);
    expect(thirdNext.done).toBe(false);

    expect(fourthNext.value).toBe(undefined);
    expect(fourthNext.done).toBe(true);

    expect(fifthtNext.value).toBe(undefined);
    expect(fifthtNext.done).toBe(true);

    expect(sixthNext.value).toBe(undefined);
    expect(sixthNext.done).toBe(true);

    expect(seventhNext.value).toBe(undefined);
    expect(seventhNext.done).toBe(true);

    expect(eighthNext.value).toBe(undefined);
    expect(eighthNext.done).toBe(true);
  });

  it('should each iterator be completely independent when manage its internal iterator state', () => {
    const linkedList = new LinkedList([500, 34, 76, 423, 99]);

    const valuesOneIterator = linkedList[Symbol.iterator]();

    const valuesOneIteratorFirst = valuesOneIterator.next().value;
    const valuesOneIteratorSecond = valuesOneIterator.next().value;

    const valuesTwoIterator = linkedList[Symbol.iterator]();

    const valuesTwoIteratorFirst = valuesTwoIterator.next().value;
    const valuesTwoIteratorSecond = valuesTwoIterator.next().value;

    expect(valuesOneIteratorFirst).toBe(500);
    expect(valuesOneIteratorSecond).toBe(34);
    expect(valuesTwoIteratorFirst).toBe(500);
    expect(valuesTwoIteratorSecond).toBe(34);
  });
  it('should iterable and iterator traits share the same state', () => {
    const linkedList = new LinkedList([5, 8, 3, 13, 6, 9]);
    const iter = linkedList.values();

    expect(iter.next()).toEqual({ value: 5, done: false });
    expect(iter.next()).toEqual({ value: 8, done: false });

    const expectedRestOfIterator = [];
    for (const it of iter) {
      expectedRestOfIterator.push(it);
    }

    expect(expectedRestOfIterator).toEqual([3, 13, 6, 9]);
  });
});
