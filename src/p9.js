


/*
    [main]
    nodes -> Map

    [Node]
    Where can I reach


*/

class Node {
    paths = [];
    id = "";
    visitedStatus = false;
    constructor(id) {
        this.id = id;
    }

    addPath(p) {
        this.paths.push(p);
    }

    rec(recPath, intendedId) {
        if (this.visitedStatus) {
            // if visited status is true
            // means previously have been travel
            // skip this
            return false;
        }
        this.visitedStatus = true; // set the current node visited status to true

        for(const path of this.paths) {
            const dest = path.getDest();

            // found the intended node id
            if (dest.getId() == intendedId) {
                recPath.push(dest.getId());
                return true;
            } else {
                recPath.push(dest.getId()); // append current rec/iteration node id into the recPath 
                const status = dest.rec(recPath, intendedId); //continue recursive

                if (status) {
                    return true; // true
                } else {
                    // dest return false (status)

                    // remove the last item added by previous(above)
                    // For purpose of making the logic clear in recursive
                    // I keep only the method who call the other node to push(add) it's dest node in the recPath
                    // And the status with false return back to here, it will be the only one who pop(delete from stack) of it's own record.
                    recPath.pop(); 
                }
            }
        }

        // return false by default, if the iteraion for all its (dest node) not found.
        return false;
    }

    getId() {
        return this.id;
    }

    // after travel finish, reset the visited status back to false
    resetVisitedStatus() {
        this.visitedStatus = false;
    }
}

class Path {
    // path will be hold by loc node
    // it is directed
    // loc -> dest
    // for simplicity purpose, the path only hold the dest node
    dest;
    constructor(dest) {
        this.dest = dest;
    }

    getDest() {
        return this.dest;
    }
}

class Graph {
    // each graph consit of nodes
    nodes = new Map();

    addNode(node) {
        this.nodes.set(node.getId(), node);
    }

    addPath(loc, dest) {
        const path = new Path(dest);

        loc.addPath(path); // only the loc node will hold the path
    }

    recStr(recPath) {
        // simple make the recPath into a string

        let str = "";
        for (const count in recPath) {
            const currId = recPath[count];
            if (count == 0) {
                // means starting point
                str = currId + "";
            } else {

                str = str.concat(` --> ${currId}`);
            }
        }
        return str;
    }

    start(from, to) {

        // retrieve the node from the mapList
        const curr = this.nodes.get(from);
        const dest = this.nodes.get(to);

        if (curr == undefined || dest == undefined) {
            // one or both nodes are undifined
            throw new Error("one or more nodes are undifined!");
        } else if (curr == dest) {
            // both node are the same
            throw new Error("Please provide the two different nodes!");
        } else {
            var recPath = [];
            recPath.push(curr.getId()); // put the curr node into the first item in the path
            const status = curr.rec(recPath, dest.getId());

            // the same way I did in the Node.rec()
            if (status) {
                this.resetVisitedStatus(); // reset status
                return this.recStr(recPath); // return the path as string
            } else {
                this.resetVisitedStatus(); // reset status
                recPath.pop();
                return "False"; // return "False"
            }
        }

    }

    // private helper function
    // to reset back the visited status of every nodes
    resetVisitedStatus() {
        for (const [key, node] of this.nodes) {
            node.resetVisitedStatus();
        }
    }
}


export { Graph, Node, Path };