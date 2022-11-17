import { describe, it, expect } from 'vitest';
import { Deque } from '../deque';

describe('Testing the reduce method', () => {
  it('should throw a TypeError when the LinkedList is empty and the initial value is not passed in', () => {
    const deque = new Deque<number>();

    expect(() =>
      deque.reduce(
        (previousValue, currentValue) => previousValue + currentValue
      )
    ).toThrow('Reduce of empty linked list with no initial value');
  });

  it('should return the initial value when reducing an empty deque', () => {
    const deque = new Deque<number>();

    const reducedDeque = deque.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      100
    );

    expect(reducedDeque).toBe(100);
  });

  it('should sum all values of the deque', () => {
    const deque = new Deque([5, 2, 31, 5]);

    const reducedDeque = deque.reduce((a, b) => a + b);

    expect(reducedDeque).toBe(43);
  });

  it('should sum all values of the deque defining an initial value', () => {
    const deque = new Deque([5, 2, 31, 5]);

    const reducedDeque = deque.reduce((a, b) => a + b, 50);

    expect(reducedDeque).toBe(93);
  });

  it('should reduce into an object', () => {
    const deque = new Deque([5, 2, 31, 5]);

    const reducedDeque = deque.reduce<Record<string, number>>(
      (obj, b) => ({ ...obj, [b]: obj[b] + 1 || 1 }),
      {}
    );

    expect(reducedDeque).toEqual({
      '5': 2,
      '2': 1,
      '31': 1,
    });
  });

  it('should reduce deque and convert it into string', () => {
    const deque = new Deque(['juana', 'maria', 'carmen', 'teresa']);

    const reducedDeque = deque.reduce(
      (a, b, index) => a + ', ' + b + ' ' + index
    );

    expect(reducedDeque).toEqual('juana, maria 1, carmen 2, teresa 3');
  });

  it('should reduce deque and convert it into string using the initial value', () => {
    const deque = new Deque(['juana', 'maria', 'carmen', 'teresa']);

    const reducedDeque = deque.reduce(
      (a, b, index) => a + ', ' + b + ' ' + index,
      ''
    );

    expect(reducedDeque).toEqual(', juana 0, maria 1, carmen 2, teresa 3');
  });

  it('should not ignore undefined or void values', () => {
    const linkedList = new Deque([0, 5, 15, 20, 25, 30]);

    const reducedDeque = linkedList.reduce((a, b, index, deque) => {
      if (deque.peekLast() === 30 && index === 5) {
        return a + 100;
      }
      return a + b;
    });

    expect(reducedDeque).toEqual(165);
  });
});

describe('Testing the reduceRight method', () => {
  it('should throw a TypeError when the Deque is empty and the initial value is not passed in when reducing from tail', () => {
    const deque = new Deque<number>();

    expect(() =>
      deque.reduceRight(
        (previousValue, currentValue) => previousValue + currentValue
      )
    ).toThrow('Reduce of empty linked list with no initial value');
  });

  it('should return the initial value when reducing an empty deque from tail', () => {
    const deque = new Deque<number>();

    const reducedDque = deque.reduceRight(
      (previousValue, currentValue) => previousValue + currentValue,
      100
    );

    expect(reducedDque).toBe(100);
  });

  it('should reduce the deque from the tail', () => {
    const deque = new Deque(['juana', 'maria', 'carmen', 'teresa']);

    const reducedDque = deque.reduceRight(
      (a, b, index) => a + ', ' + b + ' ' + index
    );

    expect(reducedDque).toEqual('teresa, carmen 2, maria 1, juana 0');
  });

  it('should reduce the deque the tail passing in an initial value', () => {
    const deque = new Deque(['juana', 'maria', 'carmen', 'teresa']);

    const reducedDque = deque.reduceRight(
      (a, b, index) => a + ', ' + b + ' ' + index,
      ''
    );

    expect(reducedDque).toEqual(', teresa 3, carmen 2, maria 1, juana 0');
  });

  it('should not ignore undefined or void values', () => {
    const linkedList = new Deque([0, 5, 15, 20, 25, 30]);

    const reducedDque = linkedList.reduceRight((a, b, index, deque) => {
      if (deque.peekLast() === 30 && index === 5) {
        return a + 100;
      }
      return a + b;
    });

    expect(reducedDque).toEqual(95);
  });
});
