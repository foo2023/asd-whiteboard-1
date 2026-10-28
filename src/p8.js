// ReplaceAll reference: https://www.w3schools.com/jsref/jsref_string_replaceall.asp

export function anagramChecker(a, b) {

    // normalize a and b in the first step
    var normA = a.toLowerCase().replaceAll(/\s|,|\.|\?|!/g, "");
    var normB = b.toLowerCase().replaceAll(/\s|,|\.|\?|!/g, "");
    /**
     * In nodejs shell (testing before writing the replace formula)
     * > var c = "hello, how are you. Are you good?\t\n\s hello"
     * > c.replaceAll(/\s|,|\.|\?|!/g, "")
        'hellohowareyouAreyougoodshello'
     */

    if (normA.length != normB.length) { // Legnth of a & b should same
        return false;
    }

    // THE RULES:
    // Build two loop,
    // let a AS in the first loop
    // b AS the second loop
    // every char in a, should appear in b.
    // if one of the char in a not appear in b, return false;
    // if every char in a appear in b, return true;

    for (var j = 0; j < normA.length; j++) { // iteration to the a
        const charInA = normA[j];
        var isExist = false; // default to false

        for (var i = 0; i < normB.length; i++) {
            const charInB = normB[i];

            if (charInA.toLowerCase == charInB.toLowerCase) {
                isExist = true; // if found, assign to true
                break; // break the current iteration in b
            }
        }
        
        // after the iteration to the b, check the result
        if (!isExist) {
            return false; // if it does not exist in the b, return false as a final result
        }
    }

    return true; // after all the iteration within a and b, if all ok, then return true as a final result
}