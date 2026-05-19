const readline = require("readline-sync")

function main(){
    var inp = String(readline.question("Enter a String: "))
    var char, res = "";
    for(let i = inp.length; i>=0;i--){
        char = inp.charAt(i);
        res = res + char;
    }
    console.log("Reversed String:",res)
}
main();