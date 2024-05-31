let joe = ["NO", "YEs", "JOe", "Mama"];

console.log("joe array", joe);
console.log("joe[0]", joe[0]); // no Out of bounds exception here ... returns undefined

// add element at the end...
joe.push("JO1");
console.log("After pushin JO1", joe);

// remove last element
joe.pop();
console.log("after joe.pop()", joe);

// add something at the beginning of the array
joe.unshift("YOYO");
console.log("joe.unshift('YOYO')", joe);

console.log("Length of array joe", joe.length);


// iteration shortcut
console.log("ITERATION :");
for (let i of joe) {
  console.log(i);
}

// sort
joe.sort();
console.log("After sorting", joe);
