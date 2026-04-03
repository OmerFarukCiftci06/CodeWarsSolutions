// https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript
//mysolution
function expandedForm(num) {
  let numArr = String(num).split("");
  let results = []; 
  
  for(let i = 0; i < numArr.length; i++){
    let currentValue = numArr[i] * Math.pow(10, numArr.length - i - 1);
    
    if(numArr[i] == 0){
        continue;
    }
    
    results.push(currentValue); 
  }
  
  return results.join(" + "); 
}

expandedForm(70304);
console.log(expandedForm(70300));

/************** Another solution **************/
// copilot solution
// function expandedForm(num) {
//   return String(num) 
//     .split('')
//     .reverse()
//     .map((digit, index) => digit * Math.pow(10, index))
//     .filter(value => value !== 0)
//     .reverse()
//     .join(' + ');
// }