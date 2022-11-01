import { it, expect } from 'vitest';
import { RawLinkedList } from '../../../../raw-linked-list';
import { push } from '../../../basic-linked-list';
import { reduceRight } from './reduce-right';

it('should throw a TypeError when the LinkedList is empty and the initial value is not passed in', () => {
  const ll = new RawLinkedList<number>();

  expect(() =>
    reduceRight<number>(
      ll,
      (previousValue, currentValue) => previousValue + currentValue
    )
  ).toThrow('Reduce of empty linked list with no initial value');
});

it('should return the initial value when reducing an empty linkedlist', () => {
  const ll = new RawLinkedList<number>();

  const reducedLL = reduceRight<number>(
    ll,
    (previousValue, currentValue) => previousValue + currentValue,
    100
  );

  expect(reducedLL).toBe(100);
});

it('should sum all values of the ll', () => {
  const ll = new RawLinkedList();
  push(ll, 5, 2, 31, 5);

  const reducedLL = reduceRight<number, number>(ll, (a, b) => a + b);

  expect(reducedLL).toBe(43);
});

it('should sum all values of the ll defining an initial value', () => {
  const ll = new RawLinkedList();
  push(ll, 5, 2, 31, 5);

  const reducedLL = reduceRight<number, number>(ll, (a, b) => a + b, 50);

  expect(reducedLL).toBe(93);
});

it('should reduce into an object', () => {
  const ll = new RawLinkedList();
  push(ll, 5, 2, 31, 5);

  const reducedLL = reduceRight<Record<string, number>>(
    ll,
    (obj, b) => ({ ...obj, [String(b)]: obj[String(b)] + 1 || 1 }),
    {}
  );

  expect(reducedLL).toEqual({
    '5': 2,
    '2': 1,
    '31': 1,
  });
});

it('should reduce linkedlist and convert it into string', () => {
  const ll = new RawLinkedList();
  push(ll, 'juana', 'maria', 'carmen', 'teresa');

  const reducedLL = reduceRight(
    ll,
    (a, b, index) => a + ', ' + b + ' ' + index
  );

  expect(reducedLL).toEqual('teresa, carmen 2, maria 1, juana 0');
});

it('should reduce linkedlist and convert it into string using the initial value', () => {
  const ll = new RawLinkedList();
  push(ll, 'juana', 'maria', 'carmen', 'teresa');

  const reducedLL = reduceRight(
    ll,
    (a, b, index) => a + ', ' + b + ' ' + index,
    ''
  );

  expect(reducedLL).toEqual(', teresa 3, carmen 2, maria 1, juana 0');
});
