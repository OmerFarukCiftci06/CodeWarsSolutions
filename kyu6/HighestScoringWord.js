//https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript
// My Solution
function high(x) {
  let score = 0;
  let indexMemory = 0;
  let stringMemory = "";
  const arr = x.split(" ");
  for (let i = 0; i < arr.length; i++) {
    const alphabetValues = arr[i]
      .split("")
      .map((char) => char.charCodeAt(0) - 96);
    const sum = alphabetValues.reduce((acc, curr) => acc + curr, 0);
    if (score < sum) {
      score = sum;
      indexMemory = i;
      stringMemory = arr[i];
    }
  }
  return stringMemory;
}

// Copilot Solution
// function high(x) {
//   const words = x.split(' ');
//   let highestScore = 0;
//   let highestWord = '';
//   words.forEach(word => {
//     const score = word.split('').reduce((acc, char) => acc + (char.charCodeAt(0) - 96), 0);
//     if (score > highestScore) {
//       highestScore = score;
//       highestWord = word;
//     }
//   });
//   return highestWord;
// }

// Gemini Solution
// function high(x) {
//   const words = x.split(" ");

//   // Her kelimeyi puana dönüştüren yardımcı fonksiyon
//   const getScore = word =>
//     [...word].reduce((acc, char) => acc + char.charCodeAt(0) - 96, 0);

//   let highestWord = "";
//   let highestScore = 0;

//   for (const word of words) {
//     const currentScore = getScore(word);
//     if (currentScore > highestScore) {
//       highestScore = currentScore;
//       highestWord = word;
//     }
//   }

//   return highestWord;
// }
