// ! FIRST SECTION

// * NUMBERS
var num1 = 6; // Variable declaration (JS understands the type of variable, so no need to specify type as int, string etc.)
var num2 = 6;
console.log(sayi1 === sayi2); // OUTPUT: true

var result = sayi1 + sayi2; // Add two numbers and declarate result as variable
console.log(result); // OUTPUT: 12

var float1 = 1.5; // Float declaration
var float2 = 4; // or 4.0
console.log(float1 + float2); // OUTPUT: 5.5

// * BOOLEAN
var variable = false; // Boolean value declaration
console.log(false); // OUTPUT: true

// * STRING
var myName = "Javascript"; // String declaration
console.log(myName); // OUTPUT: Javascript
console.log(myName[0]); // OUTPUT: J

var firstName = "Ufuk Can";
var surname = "Kurt";

var fullName = firstName + surname; // Combine two strings and declare it as fullName variable
console.log(fullName); // OUTPUT: Ufuk CanKurt

var fullName1 = firstName + " " + surname; // Combine two strings but add space between them to prevent typo.
console.log(fullName1); // OUTPUT: Ufuk Can Kurt

var fullName2 = `${firstName} ${surname}`; // Backticks (AltGr + ,) are used to define template literals.
console.log(fullName2); // OUTPUT: Ufuk Can Kurt

//  * ARRAY
var simpleArray = [1, 2, 3, 4, 5]; // Simple array declaration
var array = [1, "Pau", [1, 2, 3, 4]]; // Arrays can include different type of variables.
console.log(array); // OUTPUT: [1, 'Pau', [1,2,3,4]]
console.log(array[1]); // OUTPUT: Pau
console.log(array[2]); // OUTPUT: [1,2,3,4]

// ! SECOND SECTION

// * CONDITIONS

var a = 3;
// Check if a is 1 or 2.
if (a == 1) {
  console.log("It's 1!!!!");
} else if (a == 2) {
  console.log("It's 2!!!");
} else {
  console.log("It is not either 1 or 2 😔");
}

var b = 13;
// Check if b is even or odd.
if (b % 2 == 0) {
  console.log("even");
} else {
  console.log("odd");
}

// Check if b is even or odd with one-line code.
console.log(b % 2 == 0 ? "even" : "odd"); // Single line if statement!

// * LOOPS

for (var i = 0; i < 5; i++) {
  // Set a variable before the loop starts (var i = 0).
  // Define the condition for the loop to run (i must be less than 5).
  // Increase a value (i++) each time the code block in the loop has been executed.

  console.log(i, "JS is Awesome!"); // OUTPUT: 0 JS is Awesome!
  //         1 JS is Awesome!
  //         2 JS is Awesome!
  //         3 JS is Awesome!
  //         4 JS is Awesome!
}

// Print every 3 indexes in array.
var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (var i = 0; i < arr.length; i += 3) {
  // Define condition as i must be less than length of array.
  // Increase its value by 3 (i += 3 or i = i+3) each time the code block in the loop has been executed.
  console.log(arr[i]); // OUTPUT: 0 3 6 9
}

var k = 0;

while (k < 3) {
  // The code block will be executed as long as a specified condition (k < 3) is true.
  console.log("The number is: ", k); // OUTPUT: The number is: 0
  //         The number is: 1
  //         The number is: 2
  k++;
}
