/*



A function which is executed for each element in an array and then assigned to a new array and the function provided
should return boolean value...

the function you provide can have maximum 3 parameters of following use
1st one is the current element in that iteration of the array.
2nd one is the current index of the element in that iteration of the array.
3rd one is the array itself

*/

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

evens = nums.filter(isEven);
console.log("EVEN NUMBERS", evens);

function isEven(e, ind, arr) {
  return e % 2 == 0;
}
