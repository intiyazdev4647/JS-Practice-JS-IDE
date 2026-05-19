// Chapter 1 : Practice Set

// 1 : Create a variable of type string and try to add a number to it.

let a = "intiyaz";
let b = 4647
console.log(a + b)

// 2 : Use typeof operator to find the data type of the string in last question
console.log(typeof (a + b))

// 3 : Create a const object in js. can you change it to hold a number later?
const abc = {
    name: "Intiyaz",
    marks : 924
}
// a = "54" -- SyntaxError: Identifier 'a' has already been declared
// Ans : No, we cannot hold a number later if the variable is declared as const.

// 4: Try to add new key to the const object in practice 3 were u able to do it?
abc["friend"] = "Abdul Rahaman"
abc["name"] = "Intiyaz Shaik"
console.log(abc.friend)
console.log(abc)
// Ans: Yes, we can able to do it.

// 5: Writa a JS Program to create a word meaning dictionary of 5 words
const dict = {
    hook_up : "link someone or something to an object, especially electronic equipment.",
    introvert: "a person who is predominantly focused on internal thoughts and feelings rather than on external things or social interaction, often characterized as being quiet or withdrawn.",
    extrovert : "a person who is predominantly focused on external things or social interaction rather than on internal thoughts and feelings, often characterized as being outgoing and socially confident.",
    enthusiastic : "having or showing intense and eager enjoyment, interest, or approval.",
    egotistical : "excessively conceited or absorbed in oneself; self-centred."
}

console.log(dict.introvert)