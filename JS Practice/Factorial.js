const readline = require("readline-sync");

function main(){
    var num = Number(readline.question("Enter any number: "));
    var fact = 1;
    for(let i = num ;i>=1; i--){
        fact = fact * i;
    }
    console.log("The factorial of",num,"is", fact)
}
main();