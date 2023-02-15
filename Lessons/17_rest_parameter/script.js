//kwaargs of python in JS

console.log("Sum of 4+2+5+1 =", sum(4, 2, 5, 1));

function sum(...nums) {
  let s = 0;
  for (let k of nums) {
    s += k;
  }
  return s;
}
