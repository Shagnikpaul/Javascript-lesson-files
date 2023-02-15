/*



A function which is executed for each element in an array and the value that the function returns is again provided for next iteration...
its kinda like recursion...

the function you provide can have maximum 2 parameters of following use
1st one is the previous value returned by the function in previous iteration
2nd one is the current  element in that iteration of the array.


*/

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let total = nums.reduce(sum);
console.log("Sum =", total);

function sum(s, e) {
  return s + e;
}
