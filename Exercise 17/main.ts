//              Question 17
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program


let guestList : string[] = ["Hammad" , "Mehak" , "Ali" , "Batool" , "Tabshara" , "Salman" , "Shumaila"]

//Print Message
console.log("Unfortunately! the new dinner table won't Arrived So, we can invite only two guest");

//Remove guests from the list
while(guestList.length > 2){
    let removedGuest : string | undefined = guestList.pop();
    if(removedGuest !== undefined)
        console.log(`Sorry ${removedGuest}, We can't Invite You`);
        
}

//Print a message to each of the two people still on your list, letting them know they’re still invited.
guestList.forEach(guest =>
{
    console.log(`Dear ${guest} You're still invited For the Dinner`);
    
}
)

//Remove last two Names From the List
guestList.splice(0,guestList.length)

//Print Updated Empty List
console.log("Updated List of Guest:" , guestList);
