/*

every - returns true if all the conditions are met by every element of the iterator
some - like OR condition ...

*/

const condition = (num) => {
  if (num % 2 === 0)
    return true
  else
    return false
}

const numbers = [1, 2, 3, 4, 5, 6, 7]
const oddNumbers = [3, 5, 7, 9, 11]
const evenNumbers = [2, 4, 6, 8, 90]
console.log(numbers.every(condition))
console.log(evenNumbers.every(condition))


console.log(numbers.some(condition))
console.log(oddNumbers.some(condition))



