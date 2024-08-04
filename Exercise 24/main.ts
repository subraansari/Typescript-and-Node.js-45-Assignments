//          Question 24
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//  • Tests for equality and inequality with strings
//  • Tests using the lower case function
//  • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//  • Tests using "and" and "or" operators
//  • Test whether an item is in a array
//  • Test whether an item is not in a array


// Creating a variable
let apple = "apple";

// Test for equality with String
console.log("apple is equal to apple:");
console.log(apple == "apple");

// Test for inequality with strings
console.log("apple is not equal to apple:");
console.log(apple !== "apple");

// Tests using the lower case function
let uppercaseApple = "APPLE";

// Equal to 
console.log("APPLE is equal to apple after converting to lowercase:");
console.log(uppercaseApple.toLowerCase() == "apple");

// Not Equal to
console.log("APPLE is not equal to apple after converting to lowercase:");
console.log(uppercaseApple.toLowerCase() !== "apple");

// Numerical test involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let ten = 10;
let twenty = 20;

// Equal to
console.log("Ten is Equal to 20:");
console.log(ten == twenty);

// Not Equal to
console.log("Ten is not Equal to 20:");
console.log(ten !== twenty);

// Greater Than
console.log("Twenty is Greater than 10:");
console.log(twenty > 10);


// Less Than
console.log("Twenty is Less than 10:");
console.log(twenty < 10);

// Greater than or Equal to
console.log("Twenty is Greater than or Equal to 10:");
console.log(twenty >= 10);

// Less than or Equal to
console.log("Twenty is Less than or Equal to 10:");
console.log(twenty <= 10);

// Tests using "and" and "or" operators

// Using && (and)
console.log("Twenty is not equal to ten and 20 is Greater than 10:");
console.log(twenty !== 10 && twenty > 10);

console.log("Twenty is not equal to ten and 10 is Greater than 20:");
console.log(twenty !== 10 && ten > 20);


// Using || (Or)
console.log("Twenty is Greater than 10 Or twenty is not equal to twenty:");
console.log(twenty > 10 || twenty !== 20);

console.log("Twenty is Less than 10 Or twenty is not equal to twenty:");
console.log(twenty < 10 || twenty !== 20);

// Test whether an item is in a array
let fruits : string[] = ["Apple" , "Strawberry" , "Mango" , "Pineapple" , "Banana"]
console.log("Strawberry is include in my Fruits Array:");
console.log(fruits.includes("Strawberry"));

// Test whether an item is in a array
console.log("Strawberry is not include in my Fruits Array:");
console.log(!fruits.includes("Strawberry"));

























