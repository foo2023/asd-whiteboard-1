
function iter_generation(start, end) {
    // generation the value (start, end) provided in parameters and iteration to get all the values between them
    // place them inside the array and return
    var inputs = [];

    for (var i = start; i <= end; i++) {
        inputs = inputs.concat(i);
    }

    return inputs;
}

function mapping(value) {
    if (value % 3 == 0 && value % 5 == 0) { // divisible by both 3 and 5
        return "FizzBuzz";
    } else if (value % 3 == 0) { // divisible by 3 only
        return "Fizz";
    } else if (value % 5 == 0) { // divisible by 5 only
        return "Buzz"
    }
    else { // return empty string if undivisible by 3 and 5
        return "";
    }
}

const start = 1; // set the start boundary to 1
const end = 100; // set the last boundary to 100
var inputs = iter_generation(start, end);
for (var i = 0; i < end-start+1; i++) {
    console.log(inputs[i], mapping(inputs[i]));
}