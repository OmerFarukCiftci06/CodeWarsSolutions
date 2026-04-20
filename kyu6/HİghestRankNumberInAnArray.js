//https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004/train/javascript
// My solution
function highestRank(arr) {
  const uniqueArr = [...new Set(arr)];
  let maxTimeRepeat = 0;
  let maxTimeRepeatValue = 0;

  for (let i = 0; i < uniqueArr.length; i++) {
    const initialValue = arr.filter((x) => x === uniqueArr[i]).length;

    if (initialValue > maxTimeRepeat) {
      maxTimeRepeat = initialValue;
      maxTimeRepeatValue = uniqueArr[i];
    } else if (initialValue === maxTimeRepeat) {
      if (uniqueArr[i] > maxTimeRepeatValue) {
        maxTimeRepeatValue = uniqueArr[i];
      }
    }
  }
  return maxTimeRepeatValue;
}

/***** Another solution *****/
// copilot solution
// function highestRank(arr) {
//   const frequency = {};
//   let maxCount = 0;
//   let mostFrequent = arr[0];

//   for (const num of arr) {
//     frequency[num] = (frequency[num] || 0) + 1;
//     if (frequency[num] > maxCount || (frequency[num] === maxCount && num > mostFrequent)) {
//       maxCount = frequency[num];
//       mostFrequent = num;
//     }
//   }

//Another solution
// Gemini solution
// function highestRank(arr) {
//   let counts = {};
//   let maxCount = 0;
//   let leader = 0;

//   for (const num of arr) {
//     // Obje üzerinde sayım yap (Object-Heavy mantığı!)
//     counts[num] = (counts[num] || 0) + 1;

//     // Lideri belirle
//     if (counts[num] > maxCount || (counts[num] === maxCount && num > leader)) {
//       maxCount = counts[num];
//       leader = num;
//     }
//   }
//   return leader;
// }
