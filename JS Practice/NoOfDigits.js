const readline = require("readline-sync")

function main(){
    var num = Number(readline.question("Enter a number: "));
    let temp = num, digits=0;
    while(temp > 0){
        digits++;
        temp = Math.floor(temp / 10);
    }
    console.log("Number of Digits in number",num,"is",digits)
}
main()