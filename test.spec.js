import { lessThanHalfRejected } from './lessThanHalfRejected.js';
import { test, expect } from '@playwright/test';

// Create a new promises
const promise1 = Promise.resolve('Resolved');
const promise2 = Promise.resolve('Resolved');
const promise3 = Promise.resolve('Resolved');
const promise4 = Promise.reject('Rejected');
const promise5 = Promise.reject('Rejected');
const promise6 = Promise.resolve('Resolved');
const promise7 = Promise.resolve('Resolved');
const promise8 = Promise.reject('Rejected');
const promise9 = Promise.reject('Rejected');
const promise10 = Promise.reject('Rejected');

// Create a collection of promises
const promiseCollection1 = [promise1, promise2, promise3, promise4, promise5];
const promiseCollection2 = [promise6, promise7, promise8, promise9, promise10];

// Log results
console.log(
  lessThanHalfRejected(promiseCollection1)
    .then((value) => console.log(value))
    .catch((error) => console.error(error))
);
console.log(
  lessThanHalfRejected(promiseCollection2)
    .then((value) => console.log(value))
    .catch((error) => console.error(error))
);
// Tests
test.describe('Testing Promise Collection', () => {
  test('Resolved', () => {
    expect(
      lessThanHalfRejected(promiseCollection1)
        .then((value) => console.log(value))
        .catch((error) => console.error(error))
    ).toEqual(Promise.resolve('Resolved more than half of promises'));
  });
  test('Rejected', () => {
    expect(
      lessThanHalfRejected(promiseCollection2)
        .then((value) => console.log(value))
        .catch((error) => console.error(error))
    ).toEqual(Promise.resolve('Rejected more than half of promises'));
  });
});
