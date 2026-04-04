//https://www.codewars.com/kata/58daa7617332e59593000006/train/javascript
//My Solution
function findLongest(array) {
  return array.reduce((res, curr) =>
    String(curr).length > String(res).length ? curr : res,
  );
}
