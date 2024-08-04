"use strict";
//          Question 43
// Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function show_magicians(Magicians) {
    Magicians.forEach(name => console.log(name));
}
function make_greet(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
let Magicians_names = ["Ali", "Sana", "Abid"];
let copy_magicians_names = Magicians_names.slice();
let copy_great_magicians = make_greet(copy_magicians_names);
console.log("\nOriginal Array\n");
show_magicians(Magicians_names);
console.log("\nCopied Array\n");
show_magicians(copy_great_magicians);
