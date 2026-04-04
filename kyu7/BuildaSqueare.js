//https://www.codewars.com/kata/59a96d71dbe3b06c0200009c/train/javascript
//My solution
function generateShape(integer) {
  let multiplyTimesInteger = "+".repeat(integer);
  const arr = [];
  for (let i = 0; i < integer; i++) {
    arr.push(multiplyTimesInteger);
  }
  return arr.join("\n");
}

//copilot solution
// function generateShape(integer) {
//   return Array.from({ length: integer }, () => '+'.repeat(integer)).join('\n');
// }

//gemini solution
// function generateShape(n) {
//   return Array(n).fill("+".repeat(n)).join("\n");
// }
