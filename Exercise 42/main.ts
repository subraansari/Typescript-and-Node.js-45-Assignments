//          Question 42
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified


function show_magicians(Magicians : string[]){
    Magicians.forEach(name => console.log(name)
    );
}

function make_greet(magicians : string[]){
    return magicians.map(name => `The Great ${name}`)
}
let Magicians_names = ["Ali" , "Sana" , "Abid"]

let greet_magicians = make_greet(Magicians_names)

show_magicians(greet_magicians)
