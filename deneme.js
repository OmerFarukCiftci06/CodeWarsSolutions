const users = [
  { id: 1, name: "Ali", age: 25, active: true },
  { id: 2, name: "Zeynep", age: 17, active: true },
  { id: 3, name: "Can", age: 30, active: false },
  { id: 4, name: "Buse", age: 22, active: true },
  { id: 5, name: "Deniz", age: 15, active: true }
];


//Senin yaklaşımında mapSort fonksiyonu, greaterthan18 fonksiyonuna göbekten bağlı. Yani mapSort'u her çağırdığında mutlaka 18 yaş filtresi çalışmak zorunda.

// Gerçek bir projede (örneğin Angular'da bir Service yazarken), bazen 18 yaşındakileri, bazen de sadece "aktif" olanları listelemek istersin. Bu yüzden filtreleme mantığını tamamen bağımsız bir callback haline getirmek en profesyonelidir. Böylece istediğin zaman farklı filtreler uygulayabilir ve kodun esnekliğini artırabilirsin. Ayrıca, map ve sort işlemlerini de ayrı fonksiyonlara bölmek, kodun okunabilirliğini ve bakımını kolaylaştırır. Bu şekilde, her bir fonksiyon tek bir sorumluluğa sahip olur ve gerektiğinde kolayca değiştirilebilir veya yeniden kullanılabilir hale gelir.
// 1. Aktif kullanıcıları filtrele
function greaterthan18(users) { 
  return users.filter(user => user.age > 18);
}

function mapSort(users) {
  return greaterthan18(users).map(user => user.name).toSorted();
}

console.log(mapSort(users));

users.filter(user => user.age > 18).map(user => user.name).sort();

//gemini
//// 1. Bağımsız Filtre Fonksiyonları (Logic)
// const isAdult = user => user.age > 18;
// const isActive = user => user.active;

// // 2. Bağımsız Dönüştürücü (Transformation)
// const toName = user => user.name;

// // 3. Ana İşlem (Execution)
// function processUsers(data, filterFn) {
//   return data
//     .filter(filterFn)
//     .map(toName)
//     .sort();
// }



Çözülecek
// 3. Yeni Görev: Object-Heavy (Gelsin Yeni Challenge!)
// Madem vites yükseltiyoruz, seni Angular'da data-mapping yaparken terletecek, bol objeli bir senaryoya davet ediyorum.

// Senaryo: Bir "E-ticaret Sepeti" verisi alıyorsun. Sepetteki ürünlerin kategorileri karışık. Senden bu ürünleri kategorilerine göre gruplaman isteniyor.

// Girdi (Input):

// JavaScript
// const products = [
//   { id: 1, name: "Laptop", category: "Electronics", price: 1000 },
//   { id: 2, name: "Mouse", category: "Electronics", price: 50 },
//   { id: 3, name: "Shirt", category: "Fashion", price: 20 },
//   { id: 4, name: "Shoes", category: "Fashion", price: 80 },
//   { id: 5, name: "Phone", category: "Electronics", price: 500 }
// ];
// Senden Beklenen Çıktı (Output):

// JavaScript
// {
//   Electronics: ["Laptop", "Mouse", "Phone"],
//   Fashion: ["Shirt", "Shoes"]
// }
// Kurallar:

// Sonuç bir Obje olmalı.

// Key'ler (Anahtarlar) category isimleri olmalı.

// Value'lar (Değerler) o kategoriye ait ürünlerin sadece isimlerinden oluşan bir dizi olmalı.

// İpucu (Strateji):
// Bu soruyu çözmek için en "Senior" yol .reduce() metodudur. Eğer reduce şu an karmaşık gelirse, önce boş bir obje oluşturup forEach ile içine verileri yerleştirmeyi deneyebilirsin.

// Hangisini denemek istersin? Önce forEach ile mi başlayalım yoksa doğrudan reduce dünyasına mı dalalım?