//https://www.codewars.com/kata/57a5c31ce298a7e6b7000334/train/javascript
// My solution
function binToDec(bin) {
  return bin
    .split("")
    .reverse()
    .reduce((acc, current, index) => acc + Math.pow(2, index) * current, 0);
}

// Best solution
function binToDec(bin) {
  return parseInt(bin, 2);
}
