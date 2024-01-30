// Play against the computer - get his choise first 
const gameStates = [
    "Rock", "Paper","Scissors"
]

//create getComputerChoice function that returns - "Rock", "Paper", or "Scissors"
function computerChoice(){
    const choice = Math.floor(Math.random()* 3)
    return gameStates[choice]
}
/* create a  function that plays a single round of the game - 
it should take two parameters - 
playerSelection and computerSelection 
and return a string that declares a winner or tie

Make Functions playerSelection Case insensetive
the function should return the results - not console.log them
*/

function playRound(playerSelection, computerSelection){
    //Create a var to store the winner or tie state
    let result = ""
    //check for winner or tie
    function checkTie(playerSelection, computerSelection){
        //check if the parameters are the same 
        if(playerSelection === computerSelection){
            return true
        }
        // if they are return true otherwise return false
        return false
    }
    //if result is not tie
    if(!checkTie(playerSelection, computerSelection)){
        //check winner
        //if player is rock and computer is paper - computer wins
        //if player is paper and computer is rock - player wins
        //if player is scissors and computer is rock - computer wins
        //if player is rock and computer is scissors - player wins
        //if player is scissors and computer is paper - player wins
        //if player is paper and computer is scissors - computer wins
        }
    }else{
        // if is tie return a tie string
        result = "Tie! try again"
    }
    
    // return the result 
    return result
}



/*
Write a NEW function called playGame(). 
Use the previous function inside of this one to play a five round game 
that keeps score and reports a winner or loser at the end.

At this point you should be using console.log() to display the results of each round and the winner at the end.
Use prompt() to get input from the user. 
Feel free to re-work your previous functions if you need to. 
Specifically, you might want to change the return value to something more useful.

Feel free to create more “helper” functions if you think it would be useful. */
