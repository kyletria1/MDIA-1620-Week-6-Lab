const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
You are making a number guessing game.
The function will take in an answer and a guess.
If the guess is bigger than the answer, you will say "Too Big!"
If the guess is smaller than the answer, you will say "Too Small!"
If the guess is the answer, you will say "You win!"

BONUS
if the guess is within a range of 10, aside from too big or too small, you will also say "Close!"
EG answer is 15, and the user guesses between 5-25 like 22 -> "Too Big!" "Close!"

if the guess is within a range of 5, instead of "Close!", it will say "Almost there!"

BONUS 2x DIFFICULTY
set the number of guesses allowed to a variable outside of the function
set the number of guesses made to a variable outside of the function starting it at 0
everytime the function runs add 1 to the number of guesses made

add one more if statement under the 2nd readline question
if(numberOfGuessesMade >= numberOfGuessesAllowed){
  console.log("You lose!");
  readline.close();
}

This means you can close the game with both "quit" and losing
*/

//Planning//
//make function with guess and answer//
//if guess > answer "Too Big!"//
//else if guess < answer "Too Small!"//
//else if guess = answer "You Win"//
//make way to exit

//determine a proper parameter variable name
function GuessingGame(Answer, Guess) {
  console.log("Let's play a number guessing game!");
}

//determine a proper question to ask and the proper variable name for the answer
readline.question("Could you please give me a number?.", (Answer) => {
  StartGame(Number(Answer));

  //make an infinite recall for guessing question
function StartGame(Answer){

    //determine a proper question to ask and the proper variable name for the user to guess
    readline.question("What was the number you told me?", (Guess) => {
      StartGame(Number(Guess))
      //call your function here
      
      if (Guess > Answer){
        console.log("Too Big!");
    } 
    
    else if (Guess < Answer){
        console.log("To Small!");
    } 

    else if (Guess !== Answer){
      console.log("You Win!");
  } 

    if(Guess === "quit"){
      readline.close();
    } else {
      StartGame();
    }
  });}
StartGame();
});