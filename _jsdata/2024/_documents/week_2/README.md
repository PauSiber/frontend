# JavaScript Eğitim Kodu - README

## Yazar: Samet Aydınhan

Bu dosya, JavaScript programlama dilinde temel ve orta düzey konuları kapsayan kod örneklerini içermektedir. Bu örnekler, eğitim sırasında katılımcılara gösterilmiş ve uygulanmıştır. Her bir örnek, belirli bir konsepti anlamayı kolaylaştırmak amacıyla oluşturulmuştur.

---

## İçindekiler

1. [JavaScript ve HTML Bağlantısı Kontrol Etme](#javascript-ve-html-bağlantısı-kontrol-etme)
2. [Fonksiyonlar](#fonksiyonlar)
   - Basit Fonksiyonlar
   - Parametreli ve Varsayılan Değerli Fonksiyonlar
3. [Anonim Fonksiyonlar ve Arrow Fonksiyonlar](#anonim-fonksiyonlar-ve-arrow-fonksiyonlar)
4. [SetTimeout ve SetInterval Kullanımı](#settimeout-ve-setinterval-kullanımı)
5. [Dizi İşlemleri](#dizi-işlemleri)
6. [Obje İşlemleri](#obje-işlemleri)

---

### JavaScript ve HTML Bağlantısı Kontrol Etme
```javascript
console.log("hello"); // Konsola "hello" yazdırır
```

---

### Fonksiyonlar

#### Basit Fonksiyonlar
```javascript
function hiPausiber() {
  console.log("hi paüsiber");
}
hiPausiber();
```

#### Parametreli Fonksiyonlar
```javascript
function printHello(name) {
  console.log("Merhaba " + name);
}
printHello("Samet");
```

#### Fonksiyonlarda Return Kullanımı
```javascript
function addition(sayi1, sayi2) {
  return sayi1 + sayi2;
}
console.log(addition(1, 2));
```

---

### Anonim Fonksiyonlar ve Arrow Fonksiyonlar

#### Anonim Fonksiyonlar
```javascript
var add = function (sayi1, sayi2) {
  console.log(sayi1 + sayi2);
};
add(5, 5);
```

#### Arrow Fonksiyonlar
```javascript
const helloWorld = () => "Hello World";
console.log(helloWorld());

const carpim = (sayi1, sayi2) => sayi1 * sayi2;
console.log(carpim(3, 2));
```

---

### SetTimeout ve SetInterval Kullanımı

#### SetTimeout Kullanımı
```javascript
function printScreen2() {
  setTimeout(function () {
    console.log("İkinci ekran çıktısı");
  }, 3000);
}
printScreen2();
```

#### SetInterval Kullanımı
```javascript
let counter = 1;
const intervalID = setInterval(function () {
  console.log(counter);
  counter++;
  if (counter === 10) {
    clearInterval(intervalID);
  }
}, 1000);
```

---

### Dizi İşlemleri

#### Map ve Filter Kullanımı
```javascript
const sayilar = [2, 3, 4, 5, 10];
const yeniArray = sayilar.map((sayi) => sayi * 2);
console.log(yeniArray);

const ages = [10, 20, 30, 40, 50, 60, 70];
const newAges = ages.filter((age) => age > 50);
console.log(newAges);
```

---

### Obje İşlemleri

#### Obje Oluşturma ve Manipülasyon
```javascript
const person = {
  firstName: 'Işınnur',
  lastName: 'Günay',
  age: 21,
  country: "Turkey",
  skills: ["HTML", "CSS", 'JavaScript', "React"],
};

person.country = "Spain";
person.skills.push("Java");
console.log(person);
```

#### Destructuring
```javascript
const { firstName, lastName } = person;
console.log(firstName, lastName);
```

---

## Notlar
- Kodlarda JavaScript fonksiyonları, fonksiyon yazımı ve obje kavramı anlatılmıştır.
- Örnekler üzerinde farklı denemeler yapılarak daha iyi bir öğrenim sağlanabilir.
- Kullanıcıların sorularını eğitmenlerle paylaşabilir.

