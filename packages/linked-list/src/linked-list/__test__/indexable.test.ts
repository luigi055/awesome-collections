import { LinkedList } from '../linked-list';
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
