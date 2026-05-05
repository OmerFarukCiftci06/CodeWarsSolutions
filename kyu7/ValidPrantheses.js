//https://www.codewars.com/kata/6411b91a5e71b915d237332d/train/javascript,
//My Solution "Recursive Reduction" (Özyinelemeli Azaltma)" "artık değişmeyene kadar küçültmek"
//O(n^2)
function validParentheses(parenStr) {
  let countController;
  while (true) {
    let count = parenStr.length;
    parenStr = parenStr.split("()").join("");
    if (parenStr.length == 0) {
      return true;
    } else if (countController === count) {
      return false;
    }
    countController = parenStr.length;
    parenStr = parenStr.split("()").join("");
  }
}

//Benim kodun sadeleştirilmiş hali Gemini öneri
// function validParentheses(parenStr) {
//   let prevLength;

//   while (parenStr.length > 0 && parenStr.length !== prevLength) {
//     prevLength = parenStr.length;
//     parenStr = parenStr.split("()").join("");
//   }

//   return parenStr.length === 0;
// }

//Optimal çözüm Gemini O(n) ve clean
// function validParentheses(parenStr) {
//   let stack = 0;

//   for (let char of parenStr) {
//     if (char === "(") {
//       stack++;
//     } else {
//       stack--;
//     }

//     // Eğer stack negatif olursa, bir ")" açılmadan kapanmış demektir.
//     if (stack < 0) return false;
//   }

//   // En son stack tam olarak 0 olmalı.
//   return stack === 0;
// }

// console.log(validParentheses("()(())((()))(())()")); // result should be true
// console.log(validParentheses("()()(")); // result should be false
// console.log(validParentheses("())(()")); // result should be false
