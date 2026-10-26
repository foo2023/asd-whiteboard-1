const SETONE = [4, 5, 2, 3, 1, 6];
const SETTWO = [8, 7, 6, 9, 4, 5];

function match(curr, list) {
    let matchList = []
    for (i in list) {
        if (list[i] == curr) {
            matchList.push(list[i]);
        }
    }
    return matchList;
}

function main(listOne, listTwo) {
    let matchList = [];
    for (j in listOne) {
        
        // hold the results first
        const hold = match(listOne[j], listTwo);
        for (h in hold) { // iter each result
            const holded = hold[h];
            let isExist = false;
            for (m in matchList) {
                // map with each item in the current matchList
                if (holded == matchList[m]) { // if the number appear in the matchList already
                    isExist = true;
                }
            }
    
            // if did not the hold item (h) not exist in any current item list
            if (isExist == false) {
                matchList.push(holded);
            }
        }
    }

    console.log(matchList);
}


main(SETONE, SETTWO);