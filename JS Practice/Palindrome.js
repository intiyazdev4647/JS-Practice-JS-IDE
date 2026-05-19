const readline = require("readline-sync")

function main(){
    var num, digit, res=0, temp;
    num = Number(readline.question("Enter a number: "))
    temp = num;
    while(temp > 0){
        digit = temp % 10;
        res = res * 10 + digit;
        temp = Math.floor(temp/10);
    }
    if(res == num){
        console.log(num,"is Palindrome")
    }else{
        console.log(num,"is NOT a Palindrome")
    }
}
main()