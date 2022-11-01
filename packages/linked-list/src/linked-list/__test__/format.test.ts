import { LinkedList } from '../linked-list';
import { describe, it, expect } from 'vitest';

describe('string representation of the LinkedList', () => {
  it('should return an empty string when call the toString method of an empty linked list', () => {
    const ll = new LinkedList();

    expect(ll.toString()).toBe('');
  });

  it('should return an string representation of the linkedlist', () => {
    const ll = new LinkedList([1, 5, 3, 42, { a: 'a' }, [1, 3, 4, [4, 3]]]);

    expect(ll.toString()).toBe('1,5,3,42,[object Object],1,3,4,4,3');
  });

  it('should return an empty string when call the join method of an empty linked list', () => {
    const ll = new LinkedList();

    expect(ll.join()).toBe('');
  });

  it('should return a string representation of the linked list separated by comas by default', () => {
    const ll = new LinkedList([1, 5, 3, 42, { a: 'a' }, [1, 3, 4, [4, 3]]]);

    expect(ll.join()).toBe('1,5,3,42,[object Object],1,3,4,4,3');
  });

  it('should return a string representation of the linked list defining the desired separator', () => {
    const ll = new LinkedList([1, 5, 3, 42, { a: 'a' }, [1, 3, 4, [4, 3]]]);

    expect(ll.join('.')).toBe('1.5.3.42.[object Object].1,3,4,4,3');
    expect(ll.join('<->')).toBe('1<->5<->3<->42<->[object Object]<->1,3,4,4,3');
  });
});
