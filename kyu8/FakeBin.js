//https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript
// My solution
function fakeBin(x) {
  return x
    .split("")
    .map((n) => (n < 5 ? "0" : "1"))
    .join("");
}

// Best solution
// function fakeBin(x) {
//   return x.replace(/\d/g, (d) => (d < 5 ? "0" : "1"));
// }

// Another solution
// function fakeBin(x) {
//   return x.replace(/[0-4]/g, "0").replace(/[5-9]/g, "1");
// }

// Another solution
// function fakeBin(x) {
//   // 0-4 arasındaki rakamları '0', 5-9 arasındakileri '1' yapar
//   return x.replace(/[0-9]/g, (digit) => (digit < 5 ? "0" : "1"));
// }
