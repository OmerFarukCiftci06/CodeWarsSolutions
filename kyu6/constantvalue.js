// function solve(s) {
//   const value = ch => ch.charCodeAt(0) - 96;
//   return Math.max(
//     ...s
//       .split(/[aeiou]+/)
//       .map(sub => [...sub].reduce((sum, ch) => sum + value(ch), 0))
//   );
// }
// solve("zodiac")

function solve(s) {
  let highest = 0
  let sum = 0
  
  for (const char of s) {
    if (isConsonant(char)) {
      sum += getValue(char)
      
      if (highest < sum) {
          highest = sum
      }
    } else {
      sum = 0
    }
  }  
  
  return highest
};

function getValue(char) {
  return char.charCodeAt(0) - 97 + 1
}

function isConsonant(char) {
  return !'aeiou'.includes(char)
}