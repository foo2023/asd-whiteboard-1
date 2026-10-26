// usage: node .\src\p3.js [MAX_COUNT]

function trampoline(fn) {
    let hold = fn;

    // when the recursive end, it will return undifined instead of the
    // next recursive function (and its' parmeters)
    while(typeof(hold) == "function") {

        // calling the recursive function in here instead of call directly in the function it self
        // this can prevent recursive and stackoverflow (every functions stack on top of its' parrent, overflow the stack memory)
        // the next function will be call in here, and after every call, the previous call function will not be saved on the stack memory.
        hold = hold();
    }
}

function main() {
    const remaining = process.argv[2];
    trampoline(main_rec(0n, 1n, remaining)); // BIGINT (supports more larger value)
}

function main_rec(prev_prev, prev, remaining) {
    if (remaining > 0) {
        const curr = prev_prev + prev;

        // prev_prev == 0 means this is the first number, so no need to add ", " in the front for formating purpose
        var str = String(prev_prev != 0
            ? (", " + curr)
            : curr);
        process.stdout.write(str);

        // return the recursive as function instead of value (without  call it directly)
        return () => main_rec(prev, curr, remaining - 1);
    }
    return undefined; // when remaining = 0, do nothing.
}

main();

