
function iter_generation(start, end) {
    var inputs = [];

    for (var i = start; i <= end; i++) {
        inputs = inputs.concat(i);
    }

    return inputs;
}

function mapping(value) {
    if (value % 3 == 0 && value % 5 == 0) {
        return "FizzBuzz";
    } else if (value % 3 == 0) {
        return "Fizz";
    } else if (value % 5 == 0) {
        return "Buzz"
    }
    else {
        return "";
    }
}

function output_to_string() {

}

const start = 1;
const end = 100;
var inputs = iter_generation(1, 100);
for (var i = 0; i < end-start+1; i++) {
    console.log(inputs[i], mapping(inputs[i]));
}