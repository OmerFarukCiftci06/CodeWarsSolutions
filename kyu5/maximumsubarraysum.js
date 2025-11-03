// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript
// Task:
// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// For example:

// Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output: 6 (Sum of [4, -1, 2, 1])
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead. Your solution should be fast, it will be tested on very large arrays so slow solutions will time out.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

//My solution
var maxSequence = function(arr) {
  let maxSum = 0;
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum = Math.max(0, currentSum + arr[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
};
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
console.log(maxSequence([]))
console.log(maxSequence([-2,-1,-3,-4,-1,-2,-1,-5,-4]))
console.log(maxSequence([7,4,11,-11,39,36,10,-6,37,-10,-32,44,-26,-34,43,43]))

//Others solution
// var maxSequence = function(arr){
//   var min = 0, ans = 0, i, sum = 0;
//   for (i = 0; i < arr.length; ++i) {
//     sum += arr[i];
//     min = Math.min(sum, min);
//     ans = Math.max(ans, sum - min);
//   }
//   return ans;
// }

// function maxSequence(arr) {
//   var max = 0
  
//   for (var i = 0; i < arr.length; i++) {
//     for (var sum = 0, j = i; j < arr.length; j++) {
//       sum += arr[j]
//       if (sum > max) max = sum
//     }
//   }
  
//   return max
// }

// var maxSequence = function(arr){
//   var maxSum = 0;
//   var currentSum = 0;
  
//   for (var i = 0; i < arr.length; i++) {
//     currentSum += arr[i];
    
//     if (currentSum <= 0) {
//       currentSum = 0;
//     }
//     maxSum = Math.max(maxSum, currentSum);
//   }
  
//   return maxSum;
// }