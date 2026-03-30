//https://www.codewars.com/kata/586f6741c66d18c22800010a/train/javascript
//My solution
const sequenceSum = (begin, end, step) => {
  let counter = 0;
  for (let i = begin; i <= end; i += step) {
    counter += i;
  }
  return counter;
};

//copilot solution
// const sequenceSum = (begin, end, step) => {
//   return begin > end ? 0 : begin + sequenceSum(begin + step, end, step);
// };
