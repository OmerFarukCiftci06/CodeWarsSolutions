//https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript
// My Solution

function longest(s1, s2) {
  let x = s1 + s2;
  let uniqueConcat = new Set(x);
  let uniqueConcatString = [...uniqueConcat].join("");
  let uniqueConcatStringSorted = uniqueConcatString.split("").sort().join("");

  return uniqueConcatStringSorted;
}

//Copilot Solution
// function longest(s1, s2) {
//   const uniqueChars = new Set(s1 + s2);
//   return Array.from(uniqueChars).sort().join('');
// }

// Gemini Solution
// function longest(s1, s2) {
//   return [...new Set(s1 + s2)].sort().join('');
// }
