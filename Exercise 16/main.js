"use strict";
//      Question 16
//  More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation on messages, one for each person in your list.
let guestList = ["Mehak", "Batool", "Tabshara", "Salman"];
console.log(`Dear ${guestList} I found a bigger dinner table So, I'm Inviting More People`);
//Add one new guest to the beginning of array
guestList.unshift("Hammad");
//Add one new guest to the middle of array
guestList.splice(Math.floor(guestList.length / 2), 0, "Ali");
//Add one new guest to the end of the list.
guestList.push("Shumaila");
//Print a new set of invitation on messages, one for each person in a list
guestList.forEach(guest => {
    console.log(`Dear ${guest}, You Are Invited in the more pople category on dinner`);
});
