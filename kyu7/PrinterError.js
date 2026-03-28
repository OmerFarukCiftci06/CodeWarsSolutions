//My solution
//https://www.codewars.com/kata/56541980fa08ab47a0000040/train/javascript
function printerError(s) {
  let errorLetterCount = 0;
    for(let i= 0; i < s.length; i++){
      if(s[i] > 'm'){
        errorLetterCount++
      }
    }
  return `${errorLetterCount}/${s.length}`
}

/************** Another solution **************/
// Copilot tarafından önerilen alternatif çözüm, Modern JavaScript (ES6+) dünyasında, bir diziyi başka bir diziye dönüştürürken (transformation) dışarıda boş bir dizi oluşturup içine push yapmak yerine, doğrudan .filter() metodunu kullanmak çok daha profesyonel bir yaklaşımdır. filter metodu zaten geriye yeni bir dizi döndürür ve belirli bir koşulu sağlayan elemanları seçer:
// function printerError(s) {
//   const errorLetterCount = s.split('').filter(char => char > 'm').length;
//   return `${errorLetterCount}/${s.length}`;
// }

/************** Another solution **************/
//gemini tarafından önerilen alternatif çözüm, verilen stringdeki hatalı karakterlerin sayısını bulmak için düzenli ifadeler (regex) kullanır. Bu yöntem, stringi tek bir geçişte tarayarak hatalı karakterleri sayar ve daha okunabilir bir kod sağlar. Ayrıca, regex kullanarak sadece 'a' ile 'm' arasındaki karakterleri saymak yerine, doğrudan hatalı karakterleri saymak daha etkili olabilir.
// function printerError(s) {
//   // a-m dışındaki (n-z arası) tüm karakterleri bulur
//   const errors = s.match(/[n-z]/g);
//   return `${errors ? errors.length : 0}/${s.length}`;
// }