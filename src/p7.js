/*
    REASONING
    These reasoning show that, we can assign a minStart (where it starting point), this can skip the number of the iteration to find the squareroot value.

    digits = String(value).length
    half = Math.floor(digits / 2)
    minStart = 10 * 10 * ... (multiply 10, "half" times) = 10^half

    [SPECIAL CASE] - will manually handle
    value given = 0
    result = 0
    digits = 1, half = floor(1 / 2) = 0
    minStart = 10^0 = 1
    1(minStart) > 0(result)


    value given = 1
    result = 1
    digits = 1, half = floor(1 / 2) = 0
    minStart = 10^0 = 1
    1(minStart) = 1(result)


    value given = 100
    result = 10
    digits = 3, half = floor(3 / 2) = floor(1.5) = 1
    minStart = 10^1 = 10
    10(minStart) = 10(result)


    value given = 529
    result = 23
    digits = 3, half = floor(3 / 2) = floor(1.5) = 1
    minStart = 10^1 = 10
    10(minStart) < 23(result)


    value given = 961
    result = 31
    digits = 3, half = floor(3 / 2) = floor(1.5) = 1
    minStart = 10^1 = 10
    10(minStart) < 31(result)


    value given = 1000,000
    result = 1000
    digits = 7, half = floor(7 / 2) = floor(3.5) = 3
    minStart = 10^3 = 10 * 10 * 10 = 1000
    1000(minStart) = 1000(result)


    value given = 1000,000,000,000 (perfect square, 1000000 * 1000000)
    result = 1000,000
    digits = 13, half = floor(13 / 2) = floor(6.5) = 6
    minStart = 10^6 = 10 * 10 * 10 * 10 * 10 * 10 = 1000,000
    1000,000(minStart) = 1000,000(result)
*/


export function squareRoot(val) {
    if (val >= 0) {
        const digits = String(val).length;
        const half = Math.floor(digits/2);
        var minStart = 0;

        //calculation to minStart increment every iter by (*10)
        // this calculation is inspire by our human way to roughtly guessing for the square root of example (100, we can guess it is 10; 500, we will guess it will be greater than 10; we construct the answer by inspecting the number of its' digits devided by half - square root)
        for (var i = 1; i <= half; i++) {
            minStart = minStart * 10;
        }

        var cursor = minStart; // minStart give a good starting point to the cursor to start
        var isStop = false; // init to false, when intended to stop, just assign it to true


        if (val == 0) {
            // special case as shown in the REASONING
            return 0;
        }

        // normal case
        while (!isStop) {
            if (cursor > val) {
                isStop = true;
                return undefined;
            } else {

                // test the cursor with square, match with the val
                if (cursor * cursor == val) {
                    isStop = true;
                    return cursor;
                }
                cursor++; // next iter
            }
        }
    }
}