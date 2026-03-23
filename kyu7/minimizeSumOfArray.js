//my solution
function minSum(arr) {
  let sum = 0;
  while(arr.length > 0) {
    let max = Math.max(...arr);
    arr.splice(arr.indexOf(max), 1); // Max'ı bul ve sil
    
    let min = Math.min(...arr);
    arr.splice(arr.indexOf(min), 1); // Min'i bul ve sil
    
    sum += max * min;
  }
  return sum;
}

minSum([5, 4, 2, 3])
minSum([12, 6, 10, 26, 3, 24])
minSum([9, 2, 8, 7, 5, 4, 0, 6])

/************** Another solution **************/
// copilot
// function minSum(arr) {
//   arr.sort((a, b) => a - b);
//     let sum = 0;
//     for (let i = 0; i < arr.length / 2; i++) {
//         sum += arr[i] * arr[arr.length - 1 - i];
//     }
//     return sum;
// } Commented out the above solution as it is more efficient than the first one. It sorts the array and then multiplies the smallest and largest elements together, which is a more optimal approach to achieve the desired result.

// gemini solution
// function minSum(arr) {
//   // 1. Diziyi küçükten büyüğe sıralıyoruz
//   arr.sort((a, b) => a - b);
  
//   let totalMinSum = 0;
//   let left = 0;               // En küçük elemanın indeksi
//   let right = arr.length - 1; // En büyük elemanın indeksi

//   // 2. Uçlardan merkeze doğru geliyoruz
//   while (left < right) {
//     totalMinSum += arr[left] * arr[right];
//     left++;
//     right--;
//   }

//   return totalMinSum;
// } This solution sorts the array and then uses two pointers (left and right) to multiply the smallest and largest elements together, moving towards the center of the array. This approach is efficient with a time complexity of O(n log n) due to the sorting step, and it effectively minimizes the sum of products as required by the problem.