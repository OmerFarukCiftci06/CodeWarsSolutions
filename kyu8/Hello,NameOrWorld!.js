//https://www.codewars.com/kata/57e3f79c9cb119374600046b/train/javascript
//My solution
function hello(name) {
  if (!name || name.length == 0) return "Hello, World!";
  let text = "";
  text += name[0].toUpperCase();
  for (let i = 1; i < name.length; i++) {
    text += name[i].toLowerCase();
  }
  return "Hello, " + text + "!";
}

///************** Another solution **************/
// Copilot tarafından önerilen alternatif çözüm, verilen ismin ilk harfini büyük yaparken geri kalan harfleri küçük yaparak "Hello, Name!" formatında bir selamlama mesajı oluşturur. Eğer isim boş veya null ise, "Hello, World!" mesajını döndürür. Bu çözüm, JavaScript'in string manipülasyon özelliklerini kullanarak daha kısa ve okunabilir bir kod sağlar.
// function hello(name) {
//   if (!name) return "Hello, World!";
//   return `Hello, ${name[0].toUpperCase()}${name.slice(1).toLowerCase()}!`;
// }
