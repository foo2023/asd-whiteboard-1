function p1() {
    var inputValues = [21, 400, 8, -3, 77, 99, -16, 55, 111, -36, 28];
    console.log(inputValues);



    // =================== step of reasoning ===================

    // LENGTH: 11
    // iter 1 (the most largest value)
    //[0] [21, 400], 8, -3, 77, 99, -16, 55, 111, -36, 28
    //[1] 21, [400, 8], -3, 77, 99, -16, 55, 111, -36, 28
    //[2] 21, 8, [400, -3], 77, 99, -16, 55, 111, -36, 28
    //[3] 21, 8, -3, [400, 77], 99, -16, 55, 111, -36, 28
    //[4] 21, 8, -3, 77, [400, 99], -16, 55, 111, -36, 28
    //[5] 21, 8, -3, 77, 99, [400, -16], 55, 111, -36, 28
    //[6] 21, 8, -3, 77, 99, -16, [400, 55], 111, -36, 28
    //[7] 21, 8, -3, 77, 99, -16, 55, [400, 111], -36, 28
    //[8] 21, 8, -3, 77, 99, -16, 55, 111, [400, -36], 28
    //[9] 21, 8, -3, 77, 99, -16, 55, 111, -36, [400, 28]
    //[RESULT] 21, 8, -3, 77, 99, -16, 55, 111, -36, 28, 400


    // iter 2 (second leargest value)
    //[0] [21, 8], -3, 77, 99, -16, 55, 111, -36, 28, 400
    //[1] 8, [21, -3], 77, 99, -16, 55, 111, -36, 28, 400
    //[2] 8, -3, [21, 77], 99, -16, 55, 111, -36, 28, 400
    //[3] 8, -3, 21, [77, 99], -16, 55, 111, -36, 28, 400
    //[4] 8, -3, 21, 77, [99, -16], 55, 111, -36, 28, 400
    //[5] 8, -3, 21, 77, -16, [99, 55], 111, -36, 28, 400
    //[6] 8, -3, 21, 77, -16, 55, [99, 111], -36, 28, 400
    //[7] 8, -3, 21, 77, -16, 55, 99, [111, -36], 28, 400
    //[8] 8, -3, 21, 77, -16, 55, 99, -36, [111, 28], 400
    //[RESULT] 8, -3, 21, 77, -16, 55, 99, -36, 28, 111, 400
    //[RESULT] 8, -3, 21, 77, -16, 55, 99, -36, 28, 111, 400


    // j: iter 10 times, each times will decide the next bigger value in place

    /*
        LET length = 11; 
        (We only need iter 10 times); 
        CONCLUDE: LENGTH - 1;
    */
    for (var j = 0; j < inputValues.length - 1; j++) { 

        /*
            because each iter in i is group with two.
            example: 1, 2, 3
            [1, 2], 3 : i = 0
            1, [2, 3] : i = 1
            
            CONCLUDE: i - 1 (is right)

            BUT, wait.
            everytimes after each iter of j, the iter to the back value, we can ignore them right??
            
            BECAUSE they are in right place already.

            YA, so we just minus j
        */
        for (var i = 0; i < inputValues.length - j - 1; i++) {
            if (inputValues[i] > inputValues[i+1]) {
                var tmp = inputValues[i];

                inputValues[i] = inputValues[i+1];

                inputValues[i+1] = tmp;
            }
        }
    }

    console.log(inputValues);

}

p1();
module.exports = { p1 };