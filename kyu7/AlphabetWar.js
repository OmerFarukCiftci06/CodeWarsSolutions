//https://www.codewars.com/kata/59377c53e66267c8f6000027/train/javascript
//mysolution
function alphabetWar(fight) {
  let count = 0;
  const powerOfValues = {
    m: 4,
    q: 3,
    d: 2,
    z: 1,
    w: -4,
    p: -3,
    b: -2,
    s: -1,
  };
  for (let i = 0; i < fight.length; i++) {
    if (powerOfValues[fight[i]]) {
      count += powerOfValues[fight[i]];
    }
  }
  return count > 0
    ? "Right side wins!"
    : count == 0
      ? "Let's fight again!"
      : "Left side wins!";
}

/************** Another solution **************/
// copilot
// function alphabetWar(fight) {
//   const left = { w: 4, p: 3, b: 2, s: 1 };
//   const right = { m: 4, q: 3, d: 2, z: 1 };
//   let leftPower = 0;
//   let rightPower = 0;
//   for (let i = 0; i < fight.length; i++) {
//     if (left[fight[i]]) leftPower += left[fight[i]];
//     if (right[fight[i]]) rightPower += right[fight[i]];
//   }
//   if (leftPower > rightPower) return "Left side wins!";
//   if (rightPower > leftPower) return "Right side wins!";
//   return "Let's fight again!";
// }

// Another solution
// gemini
//function alphabetWar(fight) {
//   const scores = { w:4, p:3, b:2, s:1, m:-4, q:-3, d:-2, z:-1 };
//   const result = [...fight].reduce((acc, char) => acc + (scores[char] || 0), 0);

//   return result > 0 ? "Left side wins!" : result < 0 ? "Right side wins!" : "Let's fight again!";
// }
