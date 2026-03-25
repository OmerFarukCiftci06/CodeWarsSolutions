//https://www.codewars.com/kata/56269eb78ad2e4ced1000013

function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  let sqPerfect = Math.sqrt(sq);
  return Number.isInteger(sqPerfect) ? Math.pow(sqPerfect+1, 2) : -1
}