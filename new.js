const readline = require('readline-sync');

function main() {
    const name = readline.question('Enter your name: ');
    const age = readline.question('Enter your age: ');
    console.log(`Hello, ${name}! You are ${age} years old.`);
}
main();