import { p1 } from './p1.js';

const SETONE = [4, 5, 2, 3, 1, 6];
const SETTWO = [8, 7, 6, 9, 4, 5];


// second version 
function isExists(curr, list) {
    let isExists = false;
    for (let i in list) {
        if (list[i] == curr) {
            isExists = true;
        }
    }
    return isExists;
}

function addToArray(item, arr) {
    // safety add item into array to prevent duplication number
    // added into the array list
    if (!isExists(item, arr)) {
        arr.push(item);
    }
    return arr;
}

function main(listOne, listTwo) {
    // ================= RESONING =================
    // 4, 5, 2, 3, 1, 6
    // 8, 7, 6, 9, 4, 5
    // double for loop, to find the similar item (this part can reuse the p4, but I decide to redo again)
    /* 
        found[] = []
        4 -> 8, 7, 6, 9, 4, 5 (MAP) record found
        5 -> 8, 7, 6, 9, 4, 5 (MAP) record found


        UPDATE:
        found = [4, 5, 6]

        after that, we list out all the found items
        already.

        next step, output parts
        not_found = (list1 U list2) - found 

        BUT, how to list1 UNION list2 ??
        FOR i IN list1:
            IF i NOT EXISTS IN found:
                ADD i INTO LIST

        FOR j IN list2:
            IF j NOT EXISTS IN found:
                ADD j INTO LIST
    */


    // check two list similar item
    // actually can reuse from the p4.js
    // I will use some different writing way to write this time
    let similarItem = [];
     for (var j = 0; j < listOne.length; j++) {
        const curr = listOne[j];
        for (var i = 0; i < listTwo.length; i++) {
            if (listTwo[i] == curr) {
                // found similar item
                similarItem = addToArray(listTwo[i], similarItem); // use safety method to add into array to prevent the value added multiple time the case where smae number appear in a list multiple time
            }
        }
    }

    // not_found = (list1 U list2) - found

    // 1st
    let notSimilarItems = [];
    for (var i = 0; i < listOne.length; i++) {
        if (!isExists(listOne[i], similarItem)) {
            notSimilarItems = addToArray(listOne[i], notSimilarItems);
        }
    }

    // 2nd items
    for (var i = 0; i < listTwo.length; i++) {
        if (!isExists(listTwo[i], similarItem)) {
            notSimilarItems = addToArray(listTwo[i], notSimilarItems);
        }
    }

    // reuse p1 sorting method
    p1(notSimilarItems);
}


main(SETONE, SETTWO);




// This version only work for one side after testing, I made mistake at the begining
// function isExists(curr, list) {
//     let isExists = false;
//     for (i in list) {
//         if (list[i] == curr) {
//             isExists = true;
//         }
//     }
//     return isExists;
// }

// function addToArray(item, arr) {
//     // safety add item into array to prevent duplication number
//     // added into the array list
//     if (!isExists(item, arr)) {
//         arr.push(item);
//     }
//     return arr;
// }

// function main(listOne, listTwo) {
//     var diffList = [];
//     for (j in listOne) {
//         var item = listOne[j];
//         const isExist = isExists(item, listTwo);

//         if (!isExist) { // is not exist
//             diffList = addToArray(item, diffList); // record it

//         // the item is exists in the list and we want to discards its' record if it exists in the difflist
//         } else if (isExist // the item exists
//             && isExists(item, diffList) // if the diffList have its record
//         ) {
//             //discard the record
//             var tmp = diffList;
//             diffList = []; // reset to new array
//             for (var i; i < tmp.length; i++) {

//                 if (item != i) { // not the item we want to discards
//                     diffList.push(i);
                    
//                 } else { // found the item we want to discards
//                     continue; // skip this item and iter to the next
//                 }
//             }
//         }
//     }

//     console.log(diffList);
// }


// main(SETONE, SETTWO);