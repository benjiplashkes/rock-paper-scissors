function getComputerChoice(){
    const gameStates = ["rock", "paper", "scissors"]
    const choice = Math.floor(Math.random() * 3)
   
    return gameStates[choice]
}

function getPlayerChoice(){
    function getInput(err = ""){
    let input = prompt(
        `${err}
        Enter your choice:
        rock, paper or scissors`
    )
    result = input.toLowerCase()
    return result
    }
    let choice = getInput()
    if(choice === "rock" || choice === "paper" || choice ==="scissors"){
        
        return choice
    }else {
        getInput("Error!\n")
    }
    
    
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
    // const string = `
    //     Player Chose ${playerChoice}
    //     Computer Chose ${computerChoice}
    //     ************************
    //     The winner is ${winner}!
    //     ************************
    //     `
    // const result = string
    const result = winner
    return result
}



function playGame(rounds = 5){
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

    }

    function calcScore(){
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

let winner = calcScore() + " wins!"
return winner

}

console.log(playGame())
