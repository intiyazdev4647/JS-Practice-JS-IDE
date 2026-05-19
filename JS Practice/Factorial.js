const readline = require("readline-sync");

function main(){
    var num = Number(readline.question("Enter any number: "));
    var fact = 1;
    for(let i = num ;i>=1; i--){
        fact = fact * i;
    }
    console.log("The factorial of",num,"is", fact)
}
// main();
function factorial(num){
    if(num <= 1) return 1;
    return num * factorial(num - 1);
}
function execute(){
    var num = Number(readline.question("Enter a number: "))
    var fact = factorial(num);
    console.log("Factorial of",num,"is",fact)
}
execute();