//https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/javascript
// My solution O(n^2)
function longestConsec(strarr, k) {
  if (k < 1 || strarr.length === 0 || strarr.length < k) {
    return "";
  }

  let maxLength = 0;
  let bestIndex = 0;
  let everyIterationLength = strarr.map((a) => a.length);

  for (let i = 0; i <= everyIterationLength.length - k; i++) {
    let currentWindowSum = everyIterationLength
      .slice(i, i + k)
      .reduce((acc, cur) => acc + cur, 0);

    if (maxLength < currentWindowSum) {
      maxLength = currentWindowSum;
      bestIndex = i;
    }
  }

  return strarr.slice(bestIndex, bestIndex + k).join("");
}

console.log(
  longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2),
);

//My solution Gemini O(n)
// function longestConsec(strarr, k) {
//   const n = strarr.length;
//   if (n === 0 || k > n || k <= 0) return "";

//   // 1. İlk 'k' elemanın toplam uzunluğunu hesapla (İlk pencere)
//   let currentLength = 0;
//   for (let i = 0; i < k; i++) {
//     currentLength += strarr[i].length;
//   }

//   let maxLength = currentLength;
//   let bestIndex = 0;

//   // 2. Pencereyi kaydırmaya başla (O(n) - Her elemana sadece bir kez dokunulur)
//   for (let i = k; i < n; i++) {
//     // Yeni elemanı ekle, pencerenin arkasında kalan eski elemanı çıkar
//     currentLength = currentLength + strarr[i].length - strarr[i - k].length;

//     if (currentLength > maxLength) {
//       maxLength = currentLength;
//       bestIndex = i - k + 1; // Yeni pencerenin başlangıç indeksi
//     }
//   }

//   return strarr.slice(bestIndex, bestIndex + k).join("");
// }

//Modern syntax solution Gemini
// const longestConsec = (strarr, k) => {
//   const n = strarr.length;
//   if (n === 0 || k > n || k <= 0) return "";

//   return strarr
//     .map((_, i) => strarr.slice(i, i + k).join("")) // Her indeksi k'lı gruplara çevir
//     .reduce((longest, current) =>
//       current.length > longest.length ? current : longest
//     ); // En uzun olanı seç (İlkini korur)
// };
