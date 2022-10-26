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
