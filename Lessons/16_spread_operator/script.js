// basically convert a whole array or other types of lists/string into seperate arguments which can be used in functions requiring multiple arguments

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("Max number from the list is", (max_Number = Math.max(...nums)));

let names1 = ["JOE", "MAMA"];
let names2 = ["DEEZ", "NUTS"];
names1.push(...names2);
console.log("CONCATTED ARRAYS", names1);

// can also be used to print the elements of the array...
console.log(...names1);