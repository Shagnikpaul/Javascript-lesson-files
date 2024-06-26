/*

<array_name>.map(<some_function_name>)

A function which is executed for each element in an array and then assigned to a new array and the function provided
should return some value...

the function you provide can have maximum 3 parameters of following use
1st one is the current element in that iteration of the array.
2nd one is the current index of the element in that iteration of the array.
3rd one is the array itself

*/

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

nums.forEach(joe); // runs for all the non-empty elements of the array.
console.log("Ran square map for the array", nums);
console.log(nums.map(square));

function square(e, ind, arr) {
  return Math.pow(e, 2.0);
}

function joe(e, ind, arr) {
  console.log("I got element -", e, "with index", ind);
}
