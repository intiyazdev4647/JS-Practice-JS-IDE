const readline = require("readline-sync")

function main(){
    var num, rem, temp, digits=0, sum=0;
    num = Number(readline.question("Enter a number: ")) 
    temp = num;
    while(temp > 0){
        digits++;
        temp = Math.floor(temp / 10);
    }
    temp = num;
    while(temp > 0){
        rem = temp % 10;
        let d = Math.pow(rem,digits);
        sum = sum + d;
        temp = Math.floor(temp / 10);
    }
    if(sum == num){
        console.log(num, "is a Armstrong Number")
    }else{
        console.log(num," is NOt an armstrong number")
    }
}
main();