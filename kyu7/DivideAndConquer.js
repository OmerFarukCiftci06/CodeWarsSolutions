// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.
//My Solution
//https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/javascript
function divCon(x) {
  let count = 0;
  x.forEach((element) => {
    if (Number.isInteger(element)) {
      count += element;
    } else {
      count -= element;
    }
  });
  return count;
}

//Gemini Solution
// function divCon(x) {
//   return x.reduce((acc, curr) =>
//     Number.isInteger(curr) ? acc + curr : acc - Number(curr), 0
//   );
// }

//Copilot Solution
// function divCon(x) {
//   return x.reduce((sum, item) => {
//     if (typeof item === 'number') {
//       return sum + item;
//     } else if (typeof item === 'string' && !isNaN(item)) {
//       return sum - Number(item);
//     }
//     return sum;
//   }, 0);
// }
