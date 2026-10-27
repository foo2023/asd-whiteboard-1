// Usage: node p1.test.js
import assert from 'node:assert';
import { p1 } from './p1.js';

const SAMPLEINPUT = [21, 400, 8, -3, 77, 99, -16, 55, 111, -36, 28];

// expected output (from README Problem 1)
const EXPECTED = [-36, -16, -3, 8, 21, 28, 55, 77, 99, 111, 400];

// p1 sorts the array in place, so check SAMPLEINPUT after calling it
p1(SAMPLEINPUT);
assert.deepStrictEqual(SAMPLEINPUT, EXPECTED);
console.log("PASS: p1 sorts the sample input in ascending order");
