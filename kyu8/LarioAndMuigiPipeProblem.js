//https://www.codewars.com/kata/57e3f79c9cb119374600046b/train/javascript
//My solution
function pipeFix(numbers) {
  let firstNumber = numbers[0];
  const lastNumber = numbers[numbers.length - 1];
  const resultArr = [];
  while (lastNumber >= firstNumber) {
    resultArr.push(firstNumber);
    firstNumber++;
  }
  return resultArr;
}
