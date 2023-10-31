import inquirer from 'inquirer';
const maxTries = 5; // Maximum number of tries allowed
let tries = 0; // Number of tries taken
const systemGeneratedNo = Math.floor(Math.random() * 100);
async function playGame() {
    while (tries < maxTries) {
        const answer = await inquirer.prompt([
            {
                type: "number",
                name: "userGuess",
                message: `Guess the number (Attempt ${tries + 1} of ${maxTries}):`
            }
        ]);
        const { userGuess } = answer;
        tries++;
        if (userGuess === systemGeneratedNo) {
            console.log(`Congratulations! You guessed the correct number (${systemGeneratedNo}). You win!`);
            break;
        }
        else if (userGuess < systemGeneratedNo) {
            console.log(`Try a higher number.`);
        }
        else {
            console.log(`Try a lower number.`);
        }
    }
    if (tries === maxTries) {
        console.log(`You've reached the maximum number of tries. The secret number was ${systemGeneratedNo}. You lose!`);
    }
}
playGame();
