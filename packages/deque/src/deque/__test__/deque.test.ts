import { describe, it, expect } from 'vitest';
import { Deque } from '../deque';

describe('testing static functions', () => {
  it('should check if the element is a deque', () => {
    const deque = new Deque();

    expect(Deque.isDeque(deque)).toBe(true);
    expect(Deque.isDeque({})).toBe(false);
    expect(Deque.isDeque([])).toBe(false);
    expect(Deque.isDeque('string')).toBe(false);
    expect(Deque.isDeque(100)).toBe(false);
    expect(Deque.isDeque(100n)).toBe(false);
    expect(Deque.isDeque(true)).toBe(false);
    expect(Deque.isDeque(null)).toBe(false);
    expect(Deque.isDeque(undefined)).toBe(false);
    expect(Deque.isDeque(Symbol('hello'))).toBe(false);
  });
});

describe('Testing basic deque methods', () => {
  it('should not be equal to an empty object', () => {
    const deque = new Deque();

    expect(deque).not.toEqual({});
  });

  it('should instantiate the class with the basic state', () => {
    const doublyLinkedList = new Deque();

    expect(doublyLinkedList.peekFirst()).toBe(undefined);
    expect(doublyLinkedList.peekLast()).toBe(undefined);
    expect(doublyLinkedList.size).toBe(0);
  });

  it('should peekFirst() and peekLast() be the same value when pushing a value into an empty deque', () => {
    const doublyLinkedList = new Deque();
    const firstValue = 'hello';
    doublyLinkedList.push(firstValue);

    expect(doublyLinkedList.peekLast()).toBe(doublyLinkedList.peekFirst());
    expect(doublyLinkedList.size).toBe(1);
  });

  it('should return the new length of the deque when push a value or more', () => {
    const ll = new Deque();
    const expectedLL = new Deque();
    expectedLL.push(4, 7, 2, 3);

    expect(ll.push(4, 7, 2, 3)).toBe(4);
    expect(ll.size).toBe(4);

    expect(ll).toEqual(expectedLL);
  });

  it('should push a second value and the peekFirst() and the peekLast() should be the same node', () => {
    const doublyLinkedList = new Deque();
    const firstValue = 'hello';
    const secondValue = 'world';
    doublyLinkedList.push(firstValue, secondValue);

    expect(doublyLinkedList.peekFirst()).toBe(firstValue);
    expect(doublyLinkedList.peekLast()).toBe(secondValue);
    expect(doublyLinkedList.size).toBe(2);
  });

  it('should add more than one elements at the same time using the same push method', () => {
    const deque = new Deque<number>();
    deque.push(10);

    const expectedLinkedList = new Deque<number>();
    expectedLinkedList.push(10, 3, 8, 1, 3, 2, 7);

    expect(deque.push(3, 8, 1, 3, 2, 7)).toBe(7);
    expect(deque.size).toBe(7);

    expect(deque).toEqual(expectedLinkedList);
  });

  it('should push a second value and the peekLast() previous should point to the peekFirst()', () => {
    const doublyLinkedList = new Deque();
    const firstValue = 'hello';
    const secondValue = 'world';
    doublyLinkedList.push(firstValue);
    doublyLinkedList.push(secondValue);

    expect(doublyLinkedList.get(doublyLinkedList.size)).toBe(undefined);
    expect(doublyLinkedList.get(doublyLinkedList.size - 2)).toBe(
      doublyLinkedList.peekFirst()
    );
    expect(doublyLinkedList.size).toBe(2);
  });

  it('should return undefined if there is not nodes to delete', () => {
    const doublyLinkedList = new Deque();

    expect(doublyLinkedList.pop()).toBe(undefined);
  });

  it('should set peekFirst() and peekLast() undefined when popping the only one node in the list', () => {
    const doublyLinkedList = new Deque();
    const firstValue = 'hello';

    doublyLinkedList.push(firstValue);

    expect(doublyLinkedList.size).toBe(1);
    expect(doublyLinkedList.pop()).toBe(firstValue);
    expect(doublyLinkedList.size).toBe(0);
    expect(doublyLinkedList.peekFirst()).toBe(undefined);
    expect(doublyLinkedList.peekLast()).toBe(undefined);
  });

  it('should set delete the second item and peekFirst() and peekLast() should be the same', () => {
    const doublyLinkedList = new Deque();
    const firstValue = 'hello';
    const secondValue = 'world';

    doublyLinkedList.push(firstValue);
    doublyLinkedList.push(secondValue);

    expect(doublyLinkedList.size).toBe(2);
    expect(doublyLinkedList.pop()).toBe(secondValue);
    expect(doublyLinkedList.size).toBe(1);
    expect(doublyLinkedList.peekFirst()).toEqual(doublyLinkedList.peekLast());
  });

  it('should pop the third item and the new peekLast() next property should be undefined', () => {
    const doublyLinkedList = new Deque();
    const firstValue = 'hello';
    const secondValue = 'world';
    const thirdValue = 'universe';

    doublyLinkedList.push(firstValue);
    doublyLinkedList.push(secondValue);
    doublyLinkedList.push(thirdValue);

    expect(doublyLinkedList.size).toBe(3);
    expect(doublyLinkedList.pop()).toBe(thirdValue);
    expect(doublyLinkedList.size).toBe(2);
    expect(doublyLinkedList.peekLast()).toEqual(secondValue);
  });

  it('should pop the third and second item and the new peekLast() and peekFirst() should be the same', () => {
    const doublylinkedlist = new Deque();
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
    expect(doublylinkedlist.peekLast()).toEqual(doublylinkedlist.peekFirst());
  });

  it('should return undefined when trying to shifting a deque without nodes', () => {
    const doublyLinkedList = new Deque();

    expect(doublyLinkedList.shift()).toEqual(undefined);
  });

  it('should delete the only one element using shift and peekFirst() and peekLast() should be undefined', () => {
    const doublyLinkedList = new Deque();
    const firstValue = 'hello';

    doublyLinkedList.push(firstValue);

    expect(doublyLinkedList.size).toBe(1);
    expect(doublyLinkedList.shift()).toEqual(firstValue);
    expect(doublyLinkedList.size).toBe(0);
    expect(doublyLinkedList.peekFirst()).toBe(undefined);
    expect(doublyLinkedList.peekLast()).toBe(undefined);
  });

  it('should delete the first node using shift and the second node is now the peekFirst()', () => {
    const doublyLinkedList = new Deque();
    const firstValue = 'hello';
    const secondValue = 'world';
    const thirdValue = 'universe';

    doublyLinkedList.push(firstValue);
    doublyLinkedList.push(secondValue);
    doublyLinkedList.push(thirdValue);

    expect(doublyLinkedList.size).toBe(3);
    expect(doublyLinkedList.shift()).toEqual(firstValue);
    expect(doublyLinkedList.size).toBe(2);
    expect(doublyLinkedList.peekFirst()).toBe(secondValue);
    expect(doublyLinkedList.peekLast()).toBe(thirdValue);
  });

  it('should delete the first and the second node using shifting twice', () => {
    const doublyLinkedList = new Deque();
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
    expect(doublyLinkedList.peekFirst()).toBe(thirdValue);
  });

  it('should unshift a value and the peekFirst() and the peekLast() should be the same node', () => {
    const doublyLinkedList = new Deque();
    const firstValue = 'hello';

    expect(doublyLinkedList.unshift(firstValue)).toBe(1);
    expect(doublyLinkedList.peekLast()).toEqual(doublyLinkedList.peekFirst());
    expect(doublyLinkedList.size).toBe(1);
  });

  it('should unshift multiple values in the deque', () => {
    const doublyLinkedList = new Deque();
    const expectedLinkedList = new Deque();
    const firstValue = 'Pedro';

    expectedLinkedList.push('my', 'name', 'is', firstValue);

    expect(doublyLinkedList.unshift(firstValue)).toBe(1);
    expect(doublyLinkedList.size).toBe(1);
    expect(doublyLinkedList.unshift('my', 'name', 'is')).toBe(4);
    expect(doublyLinkedList.size).toBe(4);
    expect(doublyLinkedList).toEqual(expectedLinkedList);
  });

  it('should unshift a pair of nodes', () => {
    const doublyLinkedList = new Deque();
    const firstValue = 'hello';
    const secondValue = 'world';

    doublyLinkedList.unshift(firstValue);
    doublyLinkedList.unshift(secondValue);

    expect(doublyLinkedList.peekFirst()).toBe(secondValue);
    expect(doublyLinkedList.peekLast()).toBe(firstValue);
    expect(doublyLinkedList.size).toBe(2);
  });

  it('should unshift three nodes', () => {
    const doublyLinkedList = new Deque();
    const firstValue = 'hello';
    const secondValue = 'world';
    const thirdValue = 'universe';

    doublyLinkedList.unshift(firstValue);
    doublyLinkedList.unshift(secondValue);
    doublyLinkedList.unshift(thirdValue);

    expect(doublyLinkedList.peekFirst()).toBe(thirdValue);
    expect(doublyLinkedList.get(1)).toBe(secondValue);
    expect(doublyLinkedList.peekLast()).toBe(firstValue);
    expect(doublyLinkedList.size).toBe(3);
  });

  it('should return undefined if the value is not found using get', () => {
    const deque = new Deque();

    expect(deque.size).toBe(0);
    expect(deque.get(1)).toBe(undefined);
  });

  it('should find the second value of the list', () => {
    const deque = new Deque();
    const firstValue = 'hello';
    const secondValue = 'World';
    const thirdValue = 'universe';

    deque.push(firstValue);
    deque.push(secondValue);
    deque.push(thirdValue);

    expect(deque.size).toBe(3);
    expect(deque.get(1)).toBe(secondValue);
  });

  it('should find the second node of the list', () => {
    const deque = new Deque();
    const firstValue = 'hello';
    const secondValue = 'World';
    const thirdValue = 'universe';

    deque.push(firstValue);
    deque.push(secondValue);
    deque.push(thirdValue);

    expect(deque.size).toBe(3);
    expect(deque.get(1)).toBe(secondValue);
    expect(deque.get(2)).toBe(thirdValue);
    expect(deque.get(0)).toBe(firstValue);
  });

  it('should find the penultimate node of the list', () => {
    const deque = new Deque();
    const firstValue = 'hello';
    const secondValue = 'World';
    const thirdValue = 'universe';
    const fourthValue = 'galaxy';
    const fifthValue = 'dimension';

    deque.push(firstValue);
    deque.push(secondValue);
    deque.push(thirdValue);
    deque.push(fourthValue);
    deque.push(fifthValue);

    expect(deque.size).toBe(5);
    expect(deque.get(3)).toBe(fourthValue);
    expect(deque.get(4)).toBe(fifthValue);
    expect(deque.get(2)).toBe(thirdValue);
  });

  it('should return undefined when get a node index that is greater than the deque size', () => {
    const deque = new Deque();
    const firstValue = 'hello';

    deque.push(firstValue);

    expect(deque.size).toBe(1);
    expect(deque.get(5)).toBe(undefined);
  });

  it('should return undefined when get a node index is less than 0', () => {
    const deque = new Deque();
    const firstValue = 'hello';

    deque.push(firstValue);

    expect(deque.size).toBe(1);
    expect(deque.get(-1)).toBe(undefined);
  });

  it('should set the second value "something"', () => {
    const deque = new Deque();
    const firstValue = 'hello';
    const secondValue = 'wonderful';

    deque.push(firstValue);
    deque.push(secondValue);
    expect(deque.set(1, 'something')).toBe(true);
    expect(deque.get(1)).toBe('something');
  });

  it('should not set a new value to a index that doesnt exist', () => {
    const deque = new Deque();
    const firstValue = 'hello';

    deque.push(firstValue);
    expect(deque.set(1, 'something')).toBe(false);
    expect(deque.get(1)).toBe(undefined);
  });

  it('should not insert a new value when the index is a negative number', () => {
    const deque = new Deque();
    const firstValue = 'hello';

    expect(deque.insert(-1, firstValue)).toBe(false);
  });

  it('should not insert a new value when the index is greater than the size of the deque', () => {
    const deque = new Deque();
    const firstValue = 'hello';
    const secondValue = 'world';

    deque.push(firstValue);

    expect(deque.insert(2, secondValue)).toBe(false);
  });

  it('should insert the first node in the deque', () => {
    const deque = new Deque();
    const firstValue = 'hello';

    expect(deque.insert(0, firstValue)).toBe(true);
    expect(deque.get(0)).toBe(firstValue);
  });

  it('should insert the last node in the deque', () => {
    const deque = new Deque();
    const firstValue = 'hello';
    const secondValue = 'world';
    const thirdValue = 'universe';
    const newThirdValue = 'galaxy';

    deque.push(firstValue);
    deque.push(secondValue);
    deque.push(thirdValue);

    expect(deque.insert(2, newThirdValue)).toBe(true);
    expect(deque.get(2)).toBe(newThirdValue);
  });

  it('should insert the first position of the deque', () => {
    const deque = new Deque();

    const firstValue = 'hello';
    const secondValue = 'world';
    const newSecondValue = 'universe';
    const thirdValue = 'galaxy';

    deque.push(firstValue);
    deque.push(secondValue);
    deque.push(thirdValue);

    expect(deque.insert(1, newSecondValue)).toBe(true);
    expect(deque.get(1)).toBe(newSecondValue);
  });

  it('should point to the proper next and the previous node when insert a new node', () => {
    const deque = new Deque();

    const firstValue = 'hello';
    const secondValue = 'world';
    const newSecondValue = 'universe';
    const thirdValue = 'galaxy';

    deque.push(firstValue);
    deque.push(secondValue);
    deque.push(thirdValue);

    expect(deque.insert(1, newSecondValue)).toBe(true);
    expect(deque.get(1)).toBe(newSecondValue);
    expect(deque.get(2)).toBe(secondValue);
    expect(deque.get(0)).toBe(firstValue);
  });

  it('should not delete the element if the index is smaller than 0', () => {
    const deque = new Deque();

    expect(deque.delete(-1)).toBe(undefined);
  });

  it('should not delete the element if the index is greater the linkedlists size', () => {
    const deque = new Deque();

    const firstValue = 'hello';
    const secondValue = 'world';
    const thirdValue = 'universe';

    deque.push(firstValue);
    deque.push(secondValue);
    deque.push(thirdValue);

    expect(deque.size).toBe(3);
    expect(deque.delete(4)).toBe(undefined);
  });

  it('should not delete the element if the index is equal the linkedlists size', () => {
    const deque = new Deque();

    const firstValue = 'hello';
    const secondValue = 'world';

    deque.push(firstValue);
    deque.push(secondValue);

    expect(deque.size).toBe(2);
    expect(deque.delete(2)).toBe(undefined);
  });

  it('should delete the first element', () => {
    const deque = new Deque();

    const firstValue = 'hello';
    const secondValue = 'world';
    const thirdValue = 'universe';

    deque.push(firstValue);
    deque.push(secondValue);
    deque.push(thirdValue);

    expect(deque.size).toBe(3);
    deque.delete(0);
    expect(deque.get(0)).toBe(secondValue);
    expect(deque.get(1)).toBe(thirdValue);
    expect(deque.size).toBe(2);
  });

  it('should delete the last element', () => {
    const deque = new Deque();

    const firstValue = 'hello';
    const secondValue = 'world';
    const thirdValue = 'universe';

    deque.push(firstValue);
    deque.push(secondValue);
    deque.push(thirdValue);

    expect(deque.size).toBe(3);
    expect(deque.delete(2)).toBe(thirdValue);

    expect(deque.get(2)).toBe(undefined);
    expect(deque.get(2)).toBe(undefined);
    expect(deque.get(0)).toBe(firstValue);
    expect(deque.size).toBe(2);
  });

  it('should delete the second element', () => {
    const deque = new Deque();

    const firstValue = 'hello';
    const secondValue = 'world';
    const thirdValue = 'universe';
    const fourthValue = 'galaxy';

    deque.push(firstValue);
    deque.push(secondValue);
    deque.push(thirdValue);
    deque.push(fourthValue);

    expect(deque.size).toBe(4);
    expect(deque.delete(1)).toBe(secondValue);
    expect(deque.get(1)).toBe(thirdValue);
    expect(deque.get(2)).toBe(fourthValue);
    expect(deque.get(0)).toBe(firstValue);
    expect(deque.size).toBe(3);
  });

  it('should clear the entire linkedlist', () => {
    const deque = new Deque([1, 5, 3, 24, 5]);

    expect(deque.size).toEqual(5);

    deque.clear();

    expect(deque).toEqual(new Deque());
    expect(deque.size).toEqual(0);
  });
});
