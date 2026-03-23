//my solution
function remove(s,n){
  const arrSs = s.split("");
  const anotherArr= []
  let count = 0
  for(let i = 0; i < arrSs.length; i++){
    if(arrSs[i] === "!" && count < n){
      count++
      continue;
    }
    anotherArr.push(arrSs[i]);
  }
  return anotherArr.join("");
}

remove("Hi!",100)
remove("!!!Hi !!hi!!! !hi",1)


// const remove = (s, n) => n <= 0 ? s : remove(s.replace("!", ""), n - 1); recursive solution, but it is not efficient for large n.

// function remove(s,n){
//   for (var i=0;i<n;i++) s=s.replace("!","");
//   return s;
// } This is a simple iterative solution that replaces the first occurrence of "!" with an empty string n times. It is more efficient than the recursive solution for large n, but it still may not be the most optimal solution if n is very large and there are many "!" in the string.

/* The most efficient solution would be to iterate through the string once and build a new string while keeping track of how many "!" have been removed. This way, we can avoid the overhead of multiple string replacements and achieve a time complexity of O(s.length). Here's how you can implement it: */

// function remove(s, n) {
//   let result = '';
//   let count = 0;
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === '!' && count < n) {
//             count++;
//         } else {
//             result += s[i];
//         }
//     }
//     return result;
// }

// remove("Hi!", 100);
// remove("!!!Hi !!hi!!! !hi", 1);
// This solution iterates through the string once, checks for "!" characters, and builds a new string while keeping track of how many "!" have been removed. It is efficient and works well even for large values of n and long strings.