//https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce/train/javascript
//My solution
function multiTable(number) {
  let text = "";
  for (let i = 1; i <= 10; i++) {
    text += `${i} * ${number} = ${i * number}\n`;
  }
  return text.trim();
}

//gemini solution
// function multiTable(number) {
//   return Array.from({ length: 10 }, (_, i) => {
//     const step = i + 1;
//     return `${step} * ${number} = ${step * number}`;
//   }).join('\n');
// }
