//https://www.codewars.com/kata/5aff237c578a14752d0035ae/train/javascript
//My solution
// Teknik olarak her iki çözüm de (senin $O(3n)$ olan çözümün ve benim önerdiğim tek geçişli $O(n)$ olan çözüm) Big O dünyasında aynı sınıftadır ($O(n)$). Ancak, pratikte tek geçişli çözüm genellikle daha hızlıdır çünkü her eleman üzerinde yalnızca bir kez işlem yapar, oysa senin çözümünde her eleman üç kez işlenir (bir kare alma, bir toplama ve bir karekök alma). Bu nedenle, tek geçişli çözüm genellikle daha verimli ve daha hızlıdır, özellikle büyük veri setleri için. Ancak, küçük veri setlerinde bu fark genellikle gözle görülür olmayabilir.
function predictAge(...ages) {
  return Math.floor(
    Math.sqrt(ages.map((x) => x * x).reduce((acc, age) => acc + age, 0)) / 2,
  );
}

//copilot solution
// function predictAge(...ages) {
//   const sumOfSquares = ages.reduce((sum, age) => sum + age * age, 0);
//   return Math.floor(Math.sqrt(sumOfSquares) / 2);
// }
