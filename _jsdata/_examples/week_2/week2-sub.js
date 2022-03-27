// Declaration variables
var a = 5; // Var keyword - used for declaring variables in the global scope
let b = 5; // Let keyword - used for declaring variables that are limited in scope
const c = 5; // Const keyword - used for variables that are not going to change
console.log(a, b, c); // OUTPUT: 5 5 5

// * OBJECT
var person = {
  // Object declaration
  name: "Ufuk Can", // Object properties - key: value pairs
  surname: "Kurt",
  age: 22, // Number declaration inside object
  interest: ["reading", "workout", "running"], // Array declaration inside object
  adress: {
    // Object declaration inside object
    country: "Turkey",
    city: "Denizli",
    street: "Bursa Cad.",
  },
};

var { name: isim, age: yas } = person; // Destructuring is a way to extract data from objects or arrays.
console.log(isim, yas); // OUTPUT: Ufuk Can 22

console.log(person.name + " " + person.surname); // OUTPUT: Ufuk Can Kurt
console.log(person.age++); // OUTPUT: 22
console.log((person.age += 1)); // OUTPUT: 23

var city = ["Denizli", "Antalya", "İzmir", "Mersin", "Kütahya"]; // Array declaration
var cityCopy = [...city]; // Spread operator is used to copy arrays.

cityCopy.push("Muğla"); // Push method is used to add new item to the end of an array.
cityCopy.pop(); // Remove last item from array

console.log("orj:", city); // OUTPUT: orj: [ 'Denizli', 'Antalya', 'İzmir', 'Mersin', 'Kütahya' ]
console.log("kop:", cityCopy); // OUTPUT: kop: [ 'Denizli', 'Antalya', 'İzmir', 'Mersin', 'Kütahya', 'Muğla' ]

var number = [1, 2, 3, 4, 5, 6]; // Array declaration
var [a, b, ...args] = number;

console.log(a); // OUTPUT: 1
console.log(b); // OUTPUT: 2
console.log(args); // OUTPUT: [ 3, 4, 5, 6 ]

// * FUNCTION
// Write a function that takes a number as an argument and returns the square of that number.
function square() {
  // Function declaration
  let num = 2;
  let sq = num * num; // Square of num
  console.log(sq); // OUTPUT: 4
}

square(); // Function call

// Write a function that returns full name of a person.
function printFullName() {
  let firstName = "Ufuk Can";
  let surname = "Kurt";
  let fullName = firstName + " " + surname; // Combine two strings and declare it as fullName variable
  console.log(fullName); // OUTPUT: Ufuk Can Kurt
  console.log(`${firstName} ${surname} Pamukkale Üniversitesi`); // Template Literals - String interpolation OUTPUT: Ufuk Can Pamukkale Üniversitesi
}

printFullName(); // Function call
