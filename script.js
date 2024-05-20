let computerChoice
let humanChoice
let playerWon = 0
let computerWon = 0
let draw = 0


function fnHumanChoice() {
    for (let i = 0; i < 3; i++) {
        document.querySelectorAll(".human-btn")[i].addEventListener("click", () => {
            humanChoice = i + 1
            if (humanChoice === 1) {
                document.querySelector("h2.human-selection").innerHTML = "Paper"
            }
            else if (humanChoice === 2) {
                document.querySelector("h2.human-selection").innerHTML = "Scissor"
            }
            else if (humanChoice === 3) {
                document.querySelector("h2.human-selection").innerHTML = "Rock"
            }

            fnComputerChoice()
            logChoices()
        })
    }
}


function fnComputerChoice() {
    computerChoice = Math.round(Math.random() * 2) + 1

    if (computerChoice === 1) {
        document.querySelector("h2.computer-selection").innerHTML = "Paper"
    }
    else if (computerChoice === 2) {
        document.querySelector("h2.computer-selection").innerHTML = "Scissor"
    }
    else if (computerChoice === 3) {
        document.querySelector("h2.computer-selection").innerHTML = "Rock"
    }
}


function logChoices() {
    if (humanChoice === computerChoice) {
        document.querySelector("h1").textContent = "Draw"
        draw += 1
    } else if (humanChoice === 1 && computerChoice === 2) {
        document.querySelector("h1").textContent = "Computer Won!"
        computerWon += 1
    } else if (humanChoice === 1 && computerChoice === 3) {
        document.querySelector("h1").textContent = "Player Won!"
        playerWon += 1
    } else if (humanChoice === 2 && computerChoice === 1) {
        document.querySelector("h1").textContent = "Player Won!"
        playerWon += 1
    } else if (humanChoice === 2 && computerChoice === 3) {
        document.querySelector("h1").textContent = "Computer Won!"
        computerWon += 1
    } else if (humanChoice === 3 && computerChoice === 1) {
        document.querySelector("h1").textContent = "Computer Won!"
        computerWon += 1
    } else if (humanChoice === 3 && computerChoice === 2) {
        document.querySelector("h1").textContent = "Player Won!"
        playerWon += 1
    }
    document.querySelector("h2.humanWon-count").textContent = "Player Won: " + playerWon
    document.querySelector("h2.computerWon-count").textContent = "Computer Won: " + computerWon
    document.querySelector("h2.draw-count").textContent = "Draw: " + draw
}


function resetCount() {
    document.querySelector("button.reset-btn").addEventListener("click", () => {
        playerWon = 0
        computerWon = 0
        draw = 0
        document.querySelector("h1").textContent = "Rock Paper Scissors"
        document.querySelector("h2.humanWon-count").textContent = "Player Won: " + playerWon
        document.querySelector("h2.computerWon-count").textContent = "Computer Won: " + computerWon
        document.querySelector("h2.draw-count").textContent = "Draw: " + draw
    })
}

fnHumanChoice()
resetCount()
