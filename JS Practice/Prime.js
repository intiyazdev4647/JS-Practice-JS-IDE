const readline = require("readline-sync");

function isPrime(num) {

    if(num <= 1){
        return false;
    }

    for (var i = 2; i <= num / 2; i++) {
        if (num % i == 0) {
            return false;
        }
    }

    return true;
}

function main() {

    var num = Number(readline.question("Enter a number: "));

    if (isPrime(num)) {
        console.log(num, "is Prime Number");
    } else {
        console.log(num, "is NOT Prime Number");
    }
}

main();