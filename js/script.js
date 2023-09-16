// IF 
const passLength = 6

if (passLength >= 10) {
    console.log("You have a very good password! :)");
} else if (passLength > 5 && passLength < 10 ){
    console.log("You have a good password.");
} else {
    console.log("You have a weak password. ;/");
}
