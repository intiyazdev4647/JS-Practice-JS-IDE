const readline = require("readline-sync")

function main(){
    var num, rev = 0, digits,temp;
    num = Number(readline.question("Enter a number: "));
    temp = num; 
    while(temp > 0){
        digit = temp % 10;
        rev = rev * 10 + digit;
        temp = Math.floor(temp / 10); //Math.floor() is used to remove the decimal points
    }
    console.log("The reverse num of",num,"is",rev)
}
main()