function adjacentElementsProduct(array) {
  let maxProduct = -Infinity;

  for (let i = 0; i < array.length - 1; i++) {
    let currentProduct = array[i] * array[i + 1];

    if (currentProduct > maxProduct) {
      maxProduct = currentProduct;
    }
  }

  return maxProduct;
}

adjacentElementsProduct([3, 6, -2, -5, 7, 3])
adjacentElementsProduct([-1, -2])
adjacentElementsProduct([5, 1, 2, 3, 1, 4])

/************** Another solution **************/
// copilot
// function adjacentElementsProduct(array) {
//   return Math.max(...array.slice(0, -1).map((num, i) => num * array[i + 1]));
// } This solution uses the `slice` method to create a new array that excludes the last element of the input array. Then, it uses the `map` method to multiply each element with its adjacent element (the next one in the original array). Finally, it uses the `Math.max` function to find and return the maximum product from the resulting array of products.

