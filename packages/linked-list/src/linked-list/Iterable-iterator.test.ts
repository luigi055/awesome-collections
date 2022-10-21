import { describe, it, expect } from 'vitest';
import { LinkedList } from './linked-list';

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
