#! /usr/bin/env/node
// this line is called a shebang, it tells the OS to run it with node.js

import inquirer from "inquirer"


const answers: {
    Sentence: string
} = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the words: "
    }
])


const words = answers.Sentence.trim().split(" ")



console.log(words)
console.log(`your sentence word count word is ${words.length}`);

