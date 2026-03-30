//My solution
//https://www.codewars.com/kata/5541f58a944b85ce6d00006a/train/javascript
function productFib(prod) {
  let f1 = 0; // Fibonacci(n)
  let f2 = 1; // Fibonacci(n+1)

  while (f1 * f2 < prod) {
    let nextFib = f1 + f2;
    f1 = f2;
    f2 = nextFib;
  }

  return [f1, f2, f1 * f2 === prod];
}

// Örnek Kullanım:
console.log(productFib(4895)); // [55, 89, true]
console.log(productFib(5895)); // [89, 144, false]

//gemini solution
// function productFib(prod) {
//   let [a, b] = [0, 1];

//   while (a * b < prod) {
//     [a, b] = [b, a + b];
//   }

//   return [a, b, a * b === prod];
// }
