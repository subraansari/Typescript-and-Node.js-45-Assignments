//              Question 18
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in an array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

let placeToVisit : string[] = ["Paris" , "Italy" , "London" , "New York" , "Dubai" , "Abu Dhabi" , "Australia"]

//Print in its original order
console.log("Original Order:" ,placeToVisit);

//Print array in alphabetical order
console.log("Alphabetical Order:" ,placeToVisit.slice().sort());

//Array is still in its original order by printing it again
console.log("Original Order after Sorting:" ,placeToVisit);

//Print array in reverse alphabetical order without changing the order of the original list
console.log("Reverse Alphabetical Order:" ,placeToVisit.slice().sort().reverse());

//Array is still in its original order by printing it again
console.log("Original Order After Reverse Sorting:" ,placeToVisit);

//Reverse the order of list
console.log("Reverse Order: ",placeToVisit.reverse());

//Reverse the order of the list again
console.log("Back to Original Order:" ,placeToVisit.reverse());

//Sort array so it’s stored in alphabetical order
console.log("Sorted in Alphabetical Order:",placeToVisit.slice().sort());

//Sort to change array so it’s stored in reverse alphabetical order
console.log("Stored in Reverse Alphabetical Order",placeToVisit.slice().sort().reverse());




