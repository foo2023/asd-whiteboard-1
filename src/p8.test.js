// Usage: node p8.test.js
import assert from 'node:assert';
import { anagramChecker } from './p8.js';

// [input1, input2, expected]
const CASES = [
    ["listen", "silent", true],
    ["debit card", "Bad credit", true],
    ["hello", "bye", false],
    ["restful", "fluster", true], // problem statement says false, but both are r,e,s,t,f,u,l once each
    ["listen", "silentt", false],
    ["Conversation", "Voices, rant on", true],
    ["Listen", "silent", true],
];

for (const [a, b, expected] of CASES) {
    const res = anagramChecker(a, b); // calling the method from p8.js
    assert.equal(expected, res);
    console.log(`anagramChecker("${a}", "${b}") = ${res} pass`);
}
