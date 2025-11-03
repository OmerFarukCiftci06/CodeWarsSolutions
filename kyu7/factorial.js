//https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc/train/javascript

function factorial(n){
  if(n <= 1){
    return 1;
  }
  return n * factorial(n-1)
}