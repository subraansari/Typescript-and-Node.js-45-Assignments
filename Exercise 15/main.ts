//         Question 15
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation on messages, one for each person who is still in your list


let guestList : string[] = ["Areena" , "Mehak" , "Batool" , "Tabshara"]
//print the name who is not invited for the dinner
let unableAttend : string = guestList.splice(0,1)[0]
console.log(`${unableAttend} is not invited at dinner`);
guestList.push("Salman")

//print a message
guestList.forEach((guest => {
    console.log(`Dear ${guest}, You Are Invited at Dinner`);
    
}))


