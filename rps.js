const resultDiv = document.querySelector('#result')
const buttons = document.querySelector('button')
buttons.forEach(addEventListener('click', handleClick))

function getComputerChoice(){
    const gameStates = ["rock", "paper", "scissors"]
    const choice = Math.floor(Math.random() * 3)
   
    return gameStates[choice]
}



function playRound(playerChoice, computerChoice){
    console.log({playerChoice}, {computerChoice})
    
    if(playerChoice === computerChoice) return "tie"
    function checkWinner(){
        if(playerChoice === "rock"){
            if(computerChoice === "scissors") return "player"
            if(computerChoice === "paper") return "computer"
        } else if (playerChoice === "paper"){
            if(computerChoice === "rock") return "player"
            if(computerChoice === "scissors") return "computer"
        } else if (playerChoice === "scissors"){
            if(computerChoice === "paper") return "player"
            if(computerChoice === "rock") return "computer"
        }
    }
    const winner = checkWinner()
    const result = winner
    return result
}
function handleClick(e){
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();

    const roundWinner = playRound(playerChoice, computerChoice);
    function renderWinner(playerChoice, computerChoice, roundWinner){
        //add winner text
        let text = `Player choice: ${playerChoice}
        Computer Choice: ${computerChoice}
        -------------------------------------------------------------
        ${roundWinner.toUpperCase()} WINS!!!
        `;
        resultDiv.innerText = text

        
    }
    return  renderWinner(playerChoice, computerChoice, roundWinner)
}




function playGame(){
    let playerScore = 0
    let computerScore = 0
    let tieScore = 0

    
    for(let index = 0; index < rounds; index ++){
        const playerChoice = getPlayerChoice()
        const computerChoice = getComputerChoice()
        let round = playRound(playerChoice, computerChoice)
        console.log(round)
        if(round == "player"){playerScore += 1}
        if(round == "computer"){computerScore += 1}
        if(round == "tie"){tieScore += 1}
        console.log({playerScore},{computerScore}, {tieScore})
        
        renderRound(round, playerScore, computerScore, tieScore)

    }

    function calcWinner(){
        if(tieScore === rounds || playerScore === computerScore){
            return "tie"
        }
        if(playerScore > computerScore){
            return "player" 
        }
        if(playerScore < computerScore){
            return "computer"
        }
         
        return "error"
    }

let winner = calcWinner() + " wins!"
return winner

}