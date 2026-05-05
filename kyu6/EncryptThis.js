//https://www.codewars.com/kata/5848565e273af816fb000449/train/javascript
//My Solution

var encryptThis = function (text) {
  return text
    .split(" ")
    .map((word) => {
      const firstChar = word.charCodeAt(0);
      const rest = word.slice(1);

      if (rest.length === 0) return firstChar;
      if (rest.length === 1) return firstChar + rest;

      const secondChar = rest[0];
      const middle = rest.slice(1, -1);
      const lastChar = rest[rest.length - 1];

      return firstChar + lastChar + middle + secondChar;
    })
    .join(" ");
};

//Gemini Solution Regex Solution
// const encryptThis = text => text.replace(/\b(\w)(\w?)(\w*)(\w?)\b/g, (match, a, b, c, d) =>
//   a.charCodeAt(0) + d + c + b
// );

//Another Solution
// const encryptThis = text => text
//   .split(' ')
//   .map(word => word
//   .replace(/(^\w)(\w)(\w*)(\w$)/, `$1$4$3$2`)
//   .replace(/^\w/, word.charCodeAt(0)))
//   .join(' ');
