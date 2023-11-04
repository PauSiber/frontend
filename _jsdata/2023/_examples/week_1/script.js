//Hello world
console.log('Hello World!!');

//Variable Exercises
var x = 8;
let y = 2;
const z = 6;

console.log(x, y, z);

x = 9;
y = 7;
//z = 15;

console.log(x, y, z);


console.log(a); //undefined
var a = 4;

//-------Definition of number---------
var num1 = 6;
var num2 = 4;

console.log(num1 === num2); //false
console.log(num1 === num2); //false

//Difference between == and ===
var num = 2;
var str = "2";

console.log("iki eşittir : ", num == str); //true
console.log("üç eşittir : ", num === str); //false

var result = num1 + num2;
console.log(result); //OUTPUT: 10

var float1 = 2.5;
var float2 = 5;

console.log(float1 + float2); // OUTPUT: 7.5

//-------Definition of string---------
var firstName = 'ilknur';
console.log(firstName); //OUTPUT: ilknur

var surname = 'dogan';
console.log(surname); // OUTPUT: dogan

var fullName1 = firstName + surname;
console.log(fullName1); // OUTPUT: ilknurdogan

//Old usage
var fullName2 = firstName + ' ' + surname;
console.log(fullName2); // OUTPUT: ilknur dogan

//New usage
var fullName3 = `${firstName}  ${surname}`; //Backticks Windows: "AltGr ," Mac: "option +" are use to define "template literals"
console.log(fullName3); // OUTPUT: ilknur dogan

//Old usage
let eskiString = "En sevdiğim yemekler:\nİskender\nMantı"

//New usage
let yeniString = `En sevdiğim yemekler:
İskender
Mantı`

//-------Array-------
var simpleArray = [1, 2, 3, 4, 5];
console.log(simpleArray); // OUTPUT: [1, 2, 3, 4, 5]
console.log(simpleArray[0]); // OUTPUT: 1
console.log("simpleArray'in uzunluğu: " + simpleArray.length); // OUTPUT:5

var array = [1, 'pau', 2, [4, 5, 6]]; // Arrays can include different type of variables.
console.log(array[3]); // OUTPUT:[4, 5, 6]
console.log(array.indexOf('pau')); // OUTPUT: 1

//------Conditions------
//* if
var grade = 88;
if (grade < 50) {
  console.log('Üzgünüm, dersten kaldın!');
} else if (grade > 50 && grade < 60) {
  console.log('Dersi koşullu geçtin!');
} else {
  console.log('Tebrikler, dersi geçtin!');
}

var weather = 'raining';
weather === 'raining' ? console.log('umbrella') : console.log('nothing');

//* while
var counter = 1;
while (counter <= 5) {
  console.log('Sayaç: ' + counter);
  counter++; //counter+=1
}

//* do-while
var number = 1;
do {
  console.log('Number: ' + number);
  number++;
} while (number <= 5);
//OUTPUT:
// Number:1
// Number: 2
// Number: 3
// Number: 4
// Number: 5

//* for
var colors = ['purple', 'blue', 'white'];
for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

//* switch-case
var day = 3;
switch (day) {
  case 1:
    console.log('Monday');
    break;

  case 2:
    console.log('Tuesday');
    break;

  case 3:
    console.log('Wednesday');
    break;

  case 4:
    console.log('Thursday');
    break;

  case 5:
    console.log('Friday');
    break;

  case 6:
    console.log('Saturday');
    break;

  case 7:
    console.log('Sunday');
    break;

  default:
    console.log('ERROR');
}
