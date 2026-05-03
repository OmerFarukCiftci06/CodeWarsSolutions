//https://www.codewars.com/kata/54dc6f5a224c26032800005c/train/javascript
// My solution
function stockList(books, categories) {
  if (books.length === 0 || categories.length === 0) {
    return "";
  }
  const categoriesObj = {};
  categories.forEach((categorie) => (categoriesObj[categorie] = 0));
  const categoriePart = [];
  const numberPart = [];
  const resultArr = [];
  for (let i = 0; i < books.length; i++) {
    let organizeArr = books[i].split(" ");
    categoriePart.push(organizeArr[0]);
    numberPart.push(organizeArr[1]);
  }
  for (let i = 0; i < books.length; i++) {
    if (categoriesObj.hasOwnProperty(categoriePart[i][0])) {
      categoriesObj[categoriePart[i][0]] += parseFloat(numberPart[i]);
    }
  }
  for (let key in categoriesObj) {
    resultArr.push(`(${key} : ${categoriesObj[key]})`);
  }
  return resultArr.join(" - ");
}

// copilot solution
// function stockList(books, categories) {
//   if (books.length === 0 || categories.length === 0) return "";
//   const categoryCounts = {};
//   categories.forEach(category => categoryCounts[category] = 0);
//   books.forEach(book => {
//     const [code, quantity] = book.split(" ");
//     const category = code[0];
//     if (categoryCounts.hasOwnProperty(category)) {
//       categoryCounts[category] += parseInt(quantity);
//     }
//   });
//   return categories.map(category => `(${category} : ${categoryCounts[category]})`).join(" - ");
// }

// gemini solution
// function stockList(books, categories) {
//   if (!books.length || !categories.length) return "";

//   // 1. Önce sayıları topla
//   const counts = books.reduce((acc, book) => {
//     const [code, quantity] = book.split(" ");
//     const firstLetter = code[0];
//     acc[firstLetter] = (acc[firstLetter] || 0) + parseInt(quantity);
//     return acc;
//   }, {});

//   // 2. Kategoriler üzerinden dönüp string'i oluştur
//   return categories
//     .map(cat => `(${cat} : ${counts[cat] || 0})`)
//     .join(" - ");
// }
