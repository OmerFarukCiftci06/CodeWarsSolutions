//https://www.codewars.com/kata/58cb43f4256836ed95000f97/train/javascript
// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Your function will be tested with pre-made examples as well as random ones.

function findDifference(a, b) {
  let result = a.reduce((accumulator, currentValue) => accumulator * currentValue,1) - b.reduce((accumulator, currentValue) => accumulator * currentValue,1);
  return result > 0 ? result : result * -1;
}

//Others solution
// function volume(c) {
//   return c.reduce((x, y) => x * y);
// }

// function find_difference(a, b) {
//   return Math.abs(volume(a) - volume(b));
// }