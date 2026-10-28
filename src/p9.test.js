// Usage: node p9.test.js
import assert from 'node:assert';
import { Graph, Node } from './p9.js';

const graph = new Graph();

// create every node, hold them in "nodes" and pass them into the graph
const nodes = {};
for (const id of ["A", "B", "C", "D", "E", "F", "G", "H"]) {
    nodes[id] = new Node(id);
    graph.addNode(nodes[id]);
}

// create every path, by passing the held nodes (from -> to)
const EDGES = [
    ["A", "B"], ["B", "A"], ["B", "C"], ["B", "D"],
    ["D", "G"], ["D", "E"], ["B", "E"], ["E", "F"],
    ["F", "B"], ["C", "F"], ["F", "G"],
];
for (const [from, to] of EDGES) {
    graph.addPath(nodes[from], nodes[to]);
}

// [start, end, expected]
const CASES = [
    ["D", "B", "D --> E --> F --> B"], // README says False, but this path exists
    ["F", "A", "F --> B --> A"],
    ["G", "C", "False"],
    ["E", "D", "E --> F --> B --> D"],
    ["A", "H", "False"], // H is not connected
    ["H", "A", "False"],
    ["F", "A", "F --> B --> A"], // same as above, make sure visited status is reset between calls
];

for (const [from, to, expected] of CASES) {
    const res = graph.start(from, to); // calling the method from p9.js
    assert.equal(res, expected);
    console.log(`start("${from}", "${to}") = ${res} pass`);
}

// [start, end], these must throw an error
const ERROR_CASES = [
    ["A", "Z"], // end node not exist
    ["Z", "A"], // start node not exist
    ["Y", "Z"], // both not exist
    ["A", "A"], // same node
];

for (const [from, to] of ERROR_CASES) {
    assert.throws(() => graph.start(from, to), Error);
    console.log(`start("${from}", "${to}") throws pass`);
}
