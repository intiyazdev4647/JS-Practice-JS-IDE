const readline = require("readline-sync");

function main(){
    var numRange = Number(readline.question("Enter a number range: "));
    var first = 0, second = 1, next;
    console.log("Fibonnaci Series")
    for(let i = 0; i<=numRange; i++){
        // console.log(first, " ");
        process.stdout.write(first + " ");
        next = first + second;
        first = second;
        second = next;
    }
}
main()