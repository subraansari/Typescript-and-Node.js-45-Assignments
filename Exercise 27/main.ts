//          Question 27
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

//First Version
let alien_color = "green";

if(alien_color === "green"){
    console.log("(Version 01) Alien Color is Green, player earned 5 points");
} else if (alien_color === "yellow"){
    console.log("(Version 01) Alien Color is Yellow, player earned 10 points");
    
} else if (alien_color === "red"){
    console.log("(Version 01) Alien Color is Red, player earned 15 points");
    
}

//Second Version
alien_color = "yellow";

if(alien_color === "green"){
    console.log("(Version 02) Alien Color is Green, player earned 5 points");
} else if (alien_color === "yellow"){
    console.log("(Version 02) Alien Color is Yellow, player earned 10 points");
    
} else if (alien_color === "red"){
    console.log("(Version 02) Alien Color is Red, player earned 15 points");
    
}

//Third Version
alien_color = "red";

if(alien_color === "green"){
    console.log("(Version 03) Alien Color is Green, player earned 5 points");
} else if (alien_color === "yellow"){
    console.log("(Version 03) Alien Color is Yellow, player earned 10 points");
    
} else if (alien_color === "red"){
    console.log("(Version 03) Alien Color is Red, player earned 15 points");
    
}


