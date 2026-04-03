//My Solution
//https://www.codewars.com/kata/5b180e9fedaa564a7000009a/train/javascript
function solve(s){
  let upperCaseLetterCount = 0;
  let lowerCaseLetterCount = 0;
  
    for(let i = 0; i < s.length; i++){
      if(s[i] >= 'a' && s[i] <= 'z'){
        lowerCaseLetterCount++
      }else{
        upperCaseLetterCount++
      }
    }
  return lowerCaseLetterCount >= upperCaseLetterCount ? s.toLowerCase() : s.toUpperCase();
}

/************** Another solution **************/
//gemini tarafından önerilen alternatif çözüm, verilen stringdeki büyük ve küçük harflerin sayısını tek bir geçişte saymak için reduce metodunu kullanır. Bu yöntem, stringi tek bir geçişte tarayarak büyük ve küçük harflerin sayısını sayar ve daha okunabilir bir kod sağlar. Ayrıca, reduce kullanarak sadece büyük ve küçük harfleri saymak yerine, doğrudan büyük ve küçük harflerin sayısını tutan bir obje kullanmak daha etkili olabilir.
// function solve(s){
//   const counts = s.split('').reduce((acc, char) => {
//     if (char >= 'a' && char <= 'z') {
//       acc.lowerCaseLetterCount++;
//     } else if (char >= 'A' && char <= 'Z') {
//       acc.upperCaseLetterCount++;
//     }
//     return acc;
//   }, { lowerCaseLetterCount: 0, upperCaseLetterCount: 0 });
//   
//   return counts.lowerCaseLetterCount >= counts.upperCaseLetterCount ? s.toLowerCase() : s.toUpperCase();
// }