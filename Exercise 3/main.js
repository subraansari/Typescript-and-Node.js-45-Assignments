"use strict";
//      Question 03
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase
let personName = "subra Ansari";
//in Lowercase
console.log("Lowercase:", personName.toLowerCase());
//in Uppercase
console.log("Uppercase:", personName.toUpperCase());
//in Tittlecase
console.log("Tittlecase:", personName.replace(/\b\w/g, c => c.toUpperCase()));
