// Parametresiz Fonksiyon
function hiPausiber() {
  console.log("hi PauSiber ♥");
}
hiPausiber(); //OUTPUT: hi PauSiber ♥

// Parametreli Fonksiyon tanımlaması
function printHello(name) {
  //name adında bir parametre aldı.
  console.log("Merhaba " + name);
}
printHello("Sema"); //OUTPUT: MerhabaSema

function sum(sayi1, sayi2) {
  //function name and parameters
  console.log(sayi1 + sayi2); //body
}
sum(5, 6); //OUTPUT: 11

//Anonim Fonksiyon
var add = function (sayi1, sayi2) {
  //Anonim bir fonksiyon oluşturduktan sonra bu fonsksiyonu bir değişkene atadık
  console.log(sayi1 + sayi2);
};
add(4, 5); //OUTPUT: 9

// Değer Döndüren Fonksiyon
function addition(sayi1, sayi2) {
  return sayi1 + sayi2;
}
console.log(addition(1, 2)); //OUTPUT: 3 //add değişkenine 1+2 değerini fonksiyon kullanarak atadık.

//Fonksiyon Kapsamı

//global değişkenleri tanımlıyoruz
var num1 = 5;
var num2 = 2;
function addition2() {
  var num3 = 3; //num3 adında lokal bir değişken tanımlıyoruz
  console.log(num1 + num2 + num3); //Fonksiyon içinde global ve local değişkenleri kullanıyoruz
}
addition2(); //OUTPUT: 10

function carpma() {
  console.log(num1*num3);
  //Burada hata alıyoruz: bunun nedeni başka bir fonksiyonun içinde tanımlı olan num3 lokal değişkenini kapsamı dışında kullanmaya çalışmamız. sayi1 değişkeni ise global olduğundan burada kullanılabilir
}
carpma();

// Asenkron Çalışma
function printScreen1() {
  console.log("İlk ekran çıktısı");
}

function printScreen2() {
  setTimeout(function () {
    console.log("İkinci ekran çıktısı");
  }, 3000);
}

function printScreen3() {
  console.log("Üçüncü ekran çıktısı");
}
printScreen1();
printScreen2();
printScreen3();
// OUTPUT: İlk ekran çıktısı
           // Üçüncü ekran çıktısı
           // İkinci ekran çıktısı

function mesajVer() {
  alert("Herkese Merhabalar!");
}
mesajVer();

function greeting(ad, soyad) {
  alert(`Merhaba ${ad} ${soyad}`);
}

greeting("Durdu", "İlknur", "Doğan");
greeting("Sema")
greeting()

// Eğer parametre göndermezsek default değerleri alır
function greetingDefault(ad = "Paü", soyad = "Siber") {
  alert(`Merhaba ${ad} ${soyad}`);
}
greetingDefault("Sema")
greetingDefault()

function topla(sayi1, sayi2) {
  return sayi1 + sayi2;
}

var sonuc = topla(10, 20);
console.log(sonuc); // OUTPUT: 30

// return anahtar kelimesi olmazsa undefined döner.
function carp(sayi1, sayi2) {
  sayi1 * sayi2;
}
var result = carp(10, 20);
console.log(result); // OUTPUT: undefined

// Arrow Functions
const helloWorld = () => "Hello World";
console.log(helloWorld()); // OUTPUT: Hello World

const carpim = (sayi1, sayi2) => sayi1 * sayi2;
console.log(carpim(3, 5)); // OUTPUT: 15

// Bir satıra sığmayan arrow function
let toplam = (a, b) => {
  let result = a + b;
  console.log(result);
};
toplam(1, 2);

let deneyim = prompt('Kac yillik gelistirici tecrubeniz var');
// Bu kod, bir developer adında bir değişken oluşturur ve bu değişkene bir fonksiyon atar.
const developer =
  deneyim > 5
    ? () => alert('Bir cok konuyu biliyorum')
    : () => alert('Hicbir sey bilmiyorum:)');

developer();

// İç içe Fonksiyon
function programDetayi(tarih, etkinlik) {
  // İç içe yardımcı fonksiyon
  const tumProgram = () => tarih + " - " + etkinlik;

  console.log(tumProgram() + " eğitimi başlıyor. ");
  console.log(tumProgram() + " eğitimi sona erdi.");
}

programDetayi("3 Kasım 2023", "JavaScript");

// map fonksiyonu
const meyveler =["muz", "cilek", "portakal"]
meyveler.map((meyve) => console.log(meyve))


const sayilar = [2, 3, 4, 5, 10]
const yeniArray = sayilar.map(sayi => {
    return sayi * 2;
})

console.log(sayilar); // OUTPUT: [2, 3, 4, 5, 10]
console.log(yeniArray); // OUTPUT: [4, 6, 8, 10, 20]

// filter fonksiyonu
const ages = [10, 20, 30, 40, 50, 60, 70];
const newAges = ages.filter(age => age > 50)
console.log(newAges)



               // NESNE (OBJECT)

// Boş Obje oluşturma
const emptyObj = {};
emptyObj.isim = "Işın"; // OUTPUT: isim:"Işın"


// Obje oluşturma yöntemleri
let item1 = new Object();
let item2 = {};
console.log("item1", typeof item1);
console.log("item2", typeof item2);

// Değerlerle nesne oluşturma

// Bir nesneden değer alma
// köşeli parantez ve alıntı kullanma
// (nokta) kullanarak devamında key ismi.

const person = {
  firstName: "Isinnur",
  lastName: "Gunay",
  age: 20,
  country: "Turkey",
  city: "Antalya",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
  ],
  isMarried: false,
  getFullName: function () {
    return `${this.firstName}${this.lastName}`;
    },
  "phone number": "+904578478545"
};
console.log(person);

// Obje elemanı tanımlarken sayı da kullanamıyoruz kullanmak isterse "" içine alıyoruz

// . (nokta) kullanarak erişme
console.log(person.firstName); // Isinnur
console.log(person.lastName); // Gunay
console.log(person.age);      // 20
console.log(person.location); // undefined
console.log(person.getFullName()) // IsinnurGunay

// köşeli parantez ve alıntı kullanma
console.log(person["firstName"]);
console.log(person["lastName"]);
console.log(person["age"]);
console.log(person["age"]);
console.log(person["location"]); // undefined

// örneğin telefon numarasına erişmek için yalnızca köşeli parantez yöntemini kullanıyoruz
console.log(person["phone number"]);

// Bir nesne için yeni anahtar ayarlama
// nesne elemanında değişiklik
person.country = "Spain";
console.log(person.country)

// nesneye yeni eleman ekleme
person.job = "developer";
console.log(person.title)

// nesne elemanı olan bir array'e yeni eleman gönderme
person.skills.push("Java");
person.skills.push("C++");
console.log(person.skills);

// Nesnenin son halini görmek için person'ı yeniden yazdırıyoruz
console.log(person);


// OBJECT METHODS

// Bir nesneyi işlemenin farklı yöntemleri vardır. Mevcut yöntemlerden bazılarını görelim.

// Object.assign: Orijinal nesneyi değiştirmeden bir nesneyi kopyalamak için

const person = {
  firstName: "Asabeneh",
  age: 250,
  country: "Finland",
  city: "Helsinki",
  skills: ["HTML", "CSS", "JS"],
  title: "teacher",
  address: {
    street: "Heitamienkatu 16",
    pobox: 2002,
    city: "Helsinki",
  },
  getPersonInfo: function () {
    return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`;
  },
};

//Object methods: Object.assign, Object.keys, Object.values, Object.entries
//hasOwnProperty

const copyPerson = Object.assign({}, person);
console.log(copyPerson);

// Object.keys() kullanarak nesne anahtarlarını alma
// Object.keys: To get the keys or properties of an object as an array

const keys = Object.keys(copyPerson);
console.log(keys); //['firstName', 'age', 'country','city', 'skills','title', 'address', 'getPersonInfo']
const address = Object.keys(copyPerson.address);
console.log(address); //['street', 'pobox', 'city']

// Object.values() kullanarak nesne değerlerini alma
// Object.values: Bir nesnenin değerlerini dizi olarak almak için

const values = Object.values(copyPerson);
console.log(values);

// Object.entries() kullanarak nesne anahtarlarını ve değerlerini alma
// Object.entries:Bir dizideki anahtarları ve değerleri almak için

const entries = Object.entries(copyPerson);
console.log(entries);

// hasOwnProperty() kullanarak özellikleri kontrol etme
// hasOwnProperty: Bir nesnede belirli bir anahtarın veya özelliğin mevcut olup olmadığını kontrol etmek için

console.log(copyPerson.hasOwnProperty("name"));
console.log(copyPerson.hasOwnProperty("score"));
