//https://www.codewars.com/kata/5503013e34137eeeaa001648/train/javascript
// My solution to the problem of creating a diamond shape with asterisks.
function diamond(n) {
  if (n <= 0 || n % 2 === 0) return null;

  let result = "";

  for (let i = 1; i <= n; i += 2) {
    const spaces = (n - i) / 2;
    result += " ".repeat(spaces) + "*".repeat(i) + "\n";
  }

  for (let i = n - 2; i >= 1; i -= 2) {
    const spaces = (n - i) / 2;
    result += " ".repeat(spaces) + "*".repeat(i) + "\n";
  }

  return result;
}

// //Another solution to the same problem, using a different approach.
// function diamond(n) {
//   if (n <= 0 || n % 2 === 0) return null;

//   let result = "";

//   for (let i = 0; i < n; i++) {
//     const spaces = Math.abs((n - 1) / 2 - i);
//     const stars = n - 2 * spaces;
//     result += " ".repeat(spaces) + "*".repeat(stars) + "\n";
//   }

//   return result;
// }

// //Copilot solution to the same problem, using a more functional programming approach with Array.from and template literals.
// function diamond(n) {
//   if (n <= 0 || n % 2 === 0) return null;
//     return Array.from({ length: n }, (_, i) => {
//         const spaces = Math.abs((n - 1) / 2 - i);
//         const stars = n - 2 * spaces;
//         return " ".repeat(spaces) + "*".repeat(stars);
//     }).join("\n") + "\n";
// }

// //gemini solution to the same problem, using a more concise approach and template literals.
// function diamond(n) {
//   if (n <= 0 || n % 2 === 0) return null;
//   let result = "";

//   for (let i = 0; i < n; i++) {
//     // Merkezden ne kadar uzaktayız? (Mutlak değer)
//     // n=5 için uzaklıklar: 2, 1, 0, 1, 2 olur
//     const distance = Math.abs(Math.floor(n / 2) - i);

//     const stars = n - (distance * 2);
//     result += " ".repeat(distance) + "*".repeat(stars) + "\n";
//   }

//   return result;
// }
