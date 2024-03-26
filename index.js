#!/usr/bin/env node
import inquirer from "inquirer";
// 1; computer will generate a random number
//2; user input for guessing number
//3; compaire user input with computer generated number
//const randomeNumber = 13;
const randomeNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        typr: "number",
        message: "please guess a number 1-6:",
    }
]);
if (answer.userGuessedNumber === randomeNumber) {
    console.log("congtratulation you guess rightnumber.");
}
else {
    console.log("you guessed wrong Number");
}
console.log(randomeNumber);
