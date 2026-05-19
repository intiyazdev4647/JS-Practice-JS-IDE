const readline = require("readline-sync")

function main(){
    var num, rev = 0, r,a;
    num = Number(readline.question("Enter a number: "));
    a = num; 
    while(num > 0){
        r = num % 10;
        rev = rev * 10 + r;
        num = Math.floor(num / 10); //Math.floor() is used to remove the decimal points
    }
    console.log("The reverse num of",a,"is",rev)
}
main()