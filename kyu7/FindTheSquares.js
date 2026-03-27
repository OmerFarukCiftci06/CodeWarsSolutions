//My Solution
//https://www.codewars.com/kata/60908bc1d5811f0025474291/train/javascript
const findSquares = num => {
  let bigger=1;
  let smaller=0;
  
  // Zaman Karmaşıklığı ($O(n)$): Sayı büyüdükçe (örneğin num = 1,000,001 olduğunda) while döngün yarım milyon kez dönecektir. Codewars gibi platformlarda büyük test caseleri geldiğinde "Time Out" (Zaman Aşımı) hatası alma riskin çok yüksek.
  while(bigger*bigger-smaller*smaller !== num){
    bigger++
    smaller++
  }
  bigger *= bigger
  smaller *= smaller
  return `${bigger}-${smaller}`
};

/************** Another solution **************/
// Copilot tarafından önerilen alternatif çözüm, verilen sayının iki tam kare arasındaki farkını bulmak için matematiksel bir yaklaşım kullanır. Bu çözüm, num'u 2'ye bölerek daha küçük bir sayı elde eder ve ardından bu sayının karekökünü alarak daha büyük tam kareyi bulur. Daha sonra, daha büyük tam kareden 1 çıkararak daha küçük tam kareyi bulur. Son olarak, her iki tam kareyi hesaplayarak sonucu istenen formatta döndürür. Bu yöntem, büyük sayılar için daha verimli olabilir ve zaman aşımına neden olmaz.
// const findSquares = num => {
//   const smaller = Math.floor(num / 2); // (num - 1) / 2 ile aynı sonucu verir
//   const bigger = smaller + 1;
  
//   return `${bigger * bigger}-${smaller * smaller}`;
// };