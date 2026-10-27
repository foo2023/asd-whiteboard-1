// Usage: node p6.test.js
import assert from 'node:assert';
import { charCounter } from './p6.js';

const TESTSTR = "Hello, world!!";

const EXPECTED = "Character\tCount\nH\t1\ne\t1\nl\t3\no\t2\n,\t1\n \t1\nw\t1\nr\t1\nd\t1\n!\t2\n";
// const EXPECTED
var res = charCounter(TESTSTR);
console.log(res); // print the result
assert.equal(res, EXPECTED);
console.log("p6 test success!");
