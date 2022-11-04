import { describe, it, expect } from 'vitest';
import { LinkedList } from '../linked-list';

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
  it('should not be equal to an empty object', () => {
    const linkedList = new LinkedList();

    expect(linkedList).not.toEqual({});
  });

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

    expect(linkedList.push(3, 8, 1, 3, 2, 7)).toBe(7);
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
    expect(doublyLinkedList.unshift('my', 'name', 'is')).toBe(4);
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

  it('should clear the entire linkedlist', () => {
    const linkedList = new LinkedList([1, 5, 3, 24, 5]);

    expect(linkedList.size).toEqual(5);

    linkedList.clear();

    expect(linkedList).toEqual(new LinkedList());
    expect(linkedList.size).toEqual(0);
  });
});
