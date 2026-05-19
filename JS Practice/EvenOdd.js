const readline = require("readline-sync")
function main(){
    var num = Number(readline.question("Enter any number: "))
    if(num%2==0){
        console.log(num," is Even")
    }else{
        console.log(num," is Odd")
    }
}
main()