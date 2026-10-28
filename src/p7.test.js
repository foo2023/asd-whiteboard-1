// Usage: node p7.test.js
import assert from 'node:assert';
import { squareRoot } from './p7.js';

// [input, expected]
const CASES = [
    [0, 0],
    [4, 2],
    [16, 4],
    [36, 6],
    [225, 15],
    [9801, 99],
    [62500, 250],
    [250000, 500],
    [499849, 707],
    [998001, 999],
];

for (const [input, expected] of CASES) {
    const res = squareRoot(input); // calling the method from p7.js
    assert.equal(expected, res);
    console.log(`squareRoot(${input}) = ${res} pass`);
}
