import { describe, it, expect } from 'vitest';
import { LinkedList } from '../linked-list';

describe('Testing the reduce method', () => {
  it('should throw a TypeError when the LinkedList is empty and the initial value is not passed in', () => {
    const ll = new LinkedList<number>();

    expect(() =>
      ll.reduce((previousValue, currentValue) => previousValue + currentValue)
    ).toThrow('Reduce of empty linked list with no initial value');
  });

  it('should return the initial value when reducing an empty linkedlist', () => {
    const ll = new LinkedList<number>();

    const reducedLL = ll.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      100
    );

    expect(reducedLL).toBe(100);
  });

  it('should sum all values of the ll', () => {
    const ll = new LinkedList([5, 2, 31, 5]);

    const reducedLL = ll.reduce((a, b) => a + b);

    expect(reducedLL).toBe(43);
  });

  it('should sum all values of the ll defining an initial value', () => {
    const ll = new LinkedList([5, 2, 31, 5]);

    const reducedLL = ll.reduce((a, b) => a + b, 50);

    expect(reducedLL).toBe(93);
  });

  it('should reduce into an object', () => {
    const ll = new LinkedList([5, 2, 31, 5]);

    const reducedLL = ll.reduce<Record<string, number>>(
      (obj, b) => ({ ...obj, [b]: obj[b] + 1 || 1 }),
      {}
    );

    expect(reducedLL).toEqual({
      '5': 2,
      '2': 1,
      '31': 1,
    });
  });

  it('should reduce linkedlist and convert it into string', () => {
    const ll = new LinkedList(['juana', 'maria', 'carmen', 'teresa']);

    const reducedLL = ll.reduce((a, b, index) => a + ', ' + b + ' ' + index);

    expect(reducedLL).toEqual('juana, maria 1, carmen 2, teresa 3');
  });

  it('should reduce linkedlist and convert it into string using the initial value', () => {
    const ll = new LinkedList(['juana', 'maria', 'carmen', 'teresa']);

    const reducedLL = ll.reduce(
      (a, b, index) => a + ', ' + b + ' ' + index,
      ''
    );

    expect(reducedLL).toEqual(', juana 0, maria 1, carmen 2, teresa 3');
  });

  it('should not ignore undefined or void values', () => {
    const linkedList = new LinkedList([0, 5, 15, 20, 25, 30]);

    const reducedLL = linkedList.reduce((a, b, index, ll) => {
      if (ll.tail === 30 && index === 5) {
        return a + 100;
      }
      return a + b;
    });

    expect(reducedLL).toEqual(165);
  });
});
