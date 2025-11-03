//https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript

var countSheep = function (num){
  let sheepCountString = ""
  if(num <=0){
    return "";
  }
  for(let i = 1; i <= num; i++){
    sheepCountString += `${i} sheep...`    
  }
  return sheepCountString
}

console.log(countSheep(3))