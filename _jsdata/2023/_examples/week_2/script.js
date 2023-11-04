console.log("hello")

function hiPausiber(){
    console.log("hi paüsiber")
}
hiPausiber();

function printHello(name){
console.log("merhaba" + name)
}
printHello(" ilknur")

function sum(sayi1, sayi2){
    console.log(sayi1 + sayi2)
}
sum(2,3)
sum(10,2)

var add = function (sayi1, sayi2){
    console.log(sayi1 + sayi2)
}
add(5, 10)

function addition(sayi1, sayi2){
    return sayi1 + sayi2
}
console.log(addition(2,5))

var num1 = 5;
var num2 = 2;
function addition2(){
    let num3 = 3;
    console.log(num1 + num2 + num3)
}
addition2();

function carpma(){
    console.log(num1 * num3)
}
carpma();

function printScreen(){
    console.log("İlk ekran çıktısı")
}

function printScreen2(){
    
    setTimeout(function(){
        console.log("İkinci ekran çıktısı")
    },3000)
}

function printScreen3(){
    console.log("üçüncü ekran çıktısı")
}
printScreen()
printScreen2()
printScreen3()

function greeting(){
    alert("herkese merhaba")
}
greeting()

function selamlama(ad, soyad){
    alert(`Merhaba ${ad} ${soyad}`)
}
selamlama("Durdu", "İlknur", "Doğan")
selamlama("Sema")
selamlama()

function greetingDefault(ad = "Paü", soyad = "Siber"){
    alert(`Merhaba ${ad} ${soyad}`)
}
greetingDefault("Semanur","Özkan")
greetingDefault("Sema")
greetingDefault()

function carp(sayi1, sayi2){
 return sayi1*sayi2
}
console.log(carp(2,3))

const helloWorld = () => "Hello World"
console.log(helloWorld())

const carpim = (sayi1, sayi2) => sayi1*sayi2;
console.log(carpim(2,3))

let toplam = (a, b) => {
    return a + b   
}
console.log(toplam(10,5))

let deneyim = prompt("kaç yıllık geliştirici tecrübeniz var")
const developer = 
    deneyim > 5
      ? () => alert("Bir çok konuyu biliyorum")
      : () => alert("Hiçbir şey bilmiyorum")
developer()

const meyveler = ["muz", "çilek", "portakal"]
meyveler.map((m) => console.log(m))

const sayilar = [2, 3 , 4, 5, 6]
const yeniArray = sayilar.map(sayi => {
    return sayi*2
})
console.log(yeniArray)
console.log(sayilar)

const ages = [10, 20, 30, 40, 50, 60, 70]
const newAges = ages.filter(age => age > 50)
console.log(newAges)

const emptyObj = {}
console.log(emptyObj)

emptyObj.isim = "Işın"
console.log(emptyObj)

let item1 = new Object()
let item2 = {}
console.log("item1", typeof item1)
console.log("item2", typeof item2)

const person = {
    firstName: "Işınnur",
    lastName: "Günay",
    age: 20,
    country: "Turkey",
    skills: [
        "HTML",
        "css",
        "JavaScript",
        "React"
    ],
    isMarried: false,
    getFullName: function()  { 
        return `${this.firstName} ${this.lastName}`
    },
    "phone number": "+9054545458",
    
}
console.log(person)

console.log(person.firstName)
console.log(person.age)
console.log(person.location)
console.log(person.getFullName())

console.log(person["firstName"])
console.log(person["phone number"])

person.country = "Spain"
console.log(person.country)

person.job = "developer"
console.log(person.job)

person.skills.push("java")
console.log(person.skills)

person.skills = person.skills.filter((item) => item !== "css") 

console.log(person)












