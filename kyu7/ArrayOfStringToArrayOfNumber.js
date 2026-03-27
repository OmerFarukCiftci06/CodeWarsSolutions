//my solution
//https://www.codewars.com/kata/5783d8f3202c0e486c001d23/train/javascript
function toNumberArray(stringarray){
  const arr= []
  stringarray.forEach((x) => arr.push(parseFloat(x)));
  return arr;
}

/************** Another solution **************/
// Copilot tarafından önerilen alternatif çözüm, verilen string array'ini map fonksiyonu kullanarak her bir elemanı parseFloat ile sayıya dönüştürür. Bu yöntem, forEach döngüsüne göre daha kısa ve daha okunabilir bir kod sağlar. Ayrıca, map fonksiyonu yeni bir array döndürdüğü için, orijinal array'i değiştirmez ve daha fonksiyonel bir yaklaşım sunar.
// function toNumberArray(stringarray){
//   return stringarray.map(parseFloat);
// }

//************** Another solution **************/
// Modern JavaScript (ES6+) dünyasında, bir diziyi başka bir diziye dönüştürürken (transformation) dışarıda boş bir dizi oluşturup içine push yapmak yerine, doğrudan .map() metodunu kullanmak çok daha profesyonel bir yaklaşımdır. map metodu zaten geriye yeni bir dizi döndürür:
// function toNumberArray(stringarray) {
//   return stringarray.map(Number);
// }