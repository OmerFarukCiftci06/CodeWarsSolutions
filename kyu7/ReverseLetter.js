//https://www.codewars.com/kata/58b8c94b7df3f116eb00005b/train/javascript
//mysolution
function reverseLetter(str) {
  return str.replace(/[^a-z]/g, "").split("").reverse().join("")
}

/************** Another solution **************/
// gemini 
// function reverseLetter(str) {
//   // Sadece a-z arası harfleri bul, diziye at, ters çevir ve birleştir.
//   return (str.match(/[a-z]/g) || []).reverse().join("");
// }