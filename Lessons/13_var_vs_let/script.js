for (var i = 0; i < 3; i++) {
  console.log("[LOOP] i =", i);
}
console.log("Outside i is", i);



// if var is used then 'i' will be accessible even after the for loop ends, outside the loop
// where as if we used let it will thrown an Exception.

/*
for (let j = 0; j < 3; j++) {
  console.log("[LOOP] i =", j);
}
console.log("Outside i is", j);
throws ReferenceError: j is not defined
*/

/*Using let to declare varibles makes sure the variable you made does not conflict with pre existing variable of the document object. */