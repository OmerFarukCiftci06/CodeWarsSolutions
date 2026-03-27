//My solution
//https://www.codewars.com/kata/5977618080ef220766000022/train/javascript
function usdcny(usd) {
  let CNY = (usd * 6.75);
  return `${CNY.toFixed(2)} Chinese Yuan`;
}