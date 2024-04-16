#! /usr/bin/env node
import inquirer from "inquirer";

const answer:{
    sentence: string
}= await inquirer.prompt([
    {
        name:"sentence",
        type: "input",
        message: "Enter your sentence you wanna count the word",
    }

]);

const words= answer.sentence.trim().split(" ")

//Print the array words to console
console.log(words);

// Print the word count of the sentence to the console
console.log(`Your total words are in this sentence is ${words.length} `);
