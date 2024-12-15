console.log("hello");
function hiPausiber() {
  console.log("hi paüsiber");
}
hiPausiber();

function printHello(name) {
  console.log("Merhaba " + name);
}
printHello("Samet");
// printHello();
function sum(sayi1, sayi2) {
  console.log(sayi1 + sayi2);
  //   console.warn(sayi1 + sayi2);
  //   console.error(sayi1+ sayi2);
}
sum(5, 6);

var add = function (sayi1, sayi2) {
  console.log(sayi1 + sayi2);
};
add(5, 5);

function addition(sayi1, sayi2) {
  return sayi1 + sayi2;
}

console.log(addition(1, 2));

var num1 = 5;
var num2 = 4;
function addition2() {
  var num3 = 3;
  console.log(num1 + num2 + num3);
}

addition2();

// function carpma() {
//   console.log(num1 * num3);
// }
// carpma();

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

// printScreen1();
// printScreen2();
// printScreen3();
// let counter = 1;
// const IntervalID = setInterval(function () {
//  console.log(counter);
//  counter++;
//  if(counter===10){
//   clearInterval(IntervalID);
//  }
// }, 1000);

function mesajVer() {
  alert("Herkese Merhabalar!!!!!");
}

// mesajVer();

function greeting(ad, soyad) {
  alert(`Merhaba ${ad} ${soyad}`);
}

// greeting("Abdül", "Samet", "Aydınhan");
// greeting("Samet");
// greeting();

function greetingDefault(ad = "Paü", soyad = "Siber") {
  alert(`Merhaba ${ad} ${soyad}`);
}

// greetingDefault();
// greetingDefault("samet", "aydınhan");

function topla(sayi1, sayi2) {
  return sayi1 + sayi2;
}

var sonuc = topla(10, 20);
console.log("Toplam " + sonuc);

function carp(sayi1, sayi2) {
  return sayi1 * sayi2;
}

var result = carp(10, 20);
console.log("Çarpım " + result);

const helloWorld = () => "Hello World";

console.log(helloWorld());

const carpim = (sayi1, sayi2) => sayi1 * sayi2;

console.log(carpim(3, 2));

const toplam = (a, b) => {
  let result = a + b;
  console.log(result);
};

toplam(1, 2);

// let deneyim = prompt("Kaç yıllık geliştirici tecruben var");

// const developer =
//   deneyim > 5
//     ? () => alert("Bir cok konuyu biliyorum")
//     : () => alert("Hiçbir şey bilmiyorum.");

// developer();

function programDetayi(tarih, etkinlik) {
  const tumProgram = () => tarih + " - " + etkinlik;

  console.log(tumProgram() + " eğitimi başlıyor");
  console.log(tumProgram() + " eğitimi sona erdi.");
}

programDetayi("13 aralık 2024", "JavaScript");

const meyveler = ["muz", "cilek", "portakal"];
meyveler.map((meyve) => console.log(meyve));

const sayilar = [2, 3, 4, 5, 10];
const yeniArray = sayilar.map((sayi) => {
  return sayi * 2;
});

console.log(sayilar);
console.log(yeniArray);

const ages = [10, 20, 30, 40, 50, 60, 70];
const newAges = ages.filter((age) => age > 50);

console.log(newAges);

const emptyObj = {};
emptyObj.isim = "Işın";
emptyObj.age = 21;

console.log(emptyObj);

let item1 = new Object();
let item2 = {};
console.log("item1", typeof item1);
console.log("item2", typeof item2);

const person = {
    firstName: 'Işınnur',
    lastName: 'Günay',
    age: 21,
    country: "Turkey",
    city: 'Antalya',
    skills: [
        "HTML",
        "CSS",
        'JavaScript',
        "React"
    ],
    isMarried: false,
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
    "phone number": "+90 502 444 44 44"
}

console.log(person);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.location);
console.log(person.getFullName());

console.log(person["firstName"]);
console.log(person["lastName"]);
console.log(person["age"]);

console.log(person["phone number"]);

person.country = "Spain";
console.log(person.country);

person.job = "Developer";
console.log(person.job);

person.skills.push("Java");
person.skills.push("C++");

console.log(person.skills);

console.log(person);

const {firstName, lastName} = person;
    
console.log(firstName, lastName);




