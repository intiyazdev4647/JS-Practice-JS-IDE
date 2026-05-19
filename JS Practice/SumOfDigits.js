const readline = require("readline-sync")

function main(){
    var num = Number(readline.question("Enter a number: "))
    calculateSumOfDigits(num);
}
function calculateSumOfDigits(num){
    var temp, digit, sum= 0;
    temp = num;
    while(temp > 0){
        digit = temp % 10;
        sum = sum + digit;
        temp = Math.floor(temp/10);
    }
    console.log("The sum of digits is",sum)
}
main()