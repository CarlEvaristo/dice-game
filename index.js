const titleTxt = document.querySelector("h1")
const rollBtn = document.getElementById('roll-btn')
const resetBtn = document.getElementById('reset-btn')
const dice1 = document.getElementById("dice1")
const dice2 = document.getElementById("dice2")
const scoreBoard1 = document.getElementById("score1")
const scoreBoard2 = document.getElementById("score2")

let player1Score = 0
let player2Score = 0
let player1Turn = true

 if (Math.floor(Math.random()*2) === 0) {
    player1Turn = true
    titleTxt.textContent = "Player 1 starts"
 } else {
    player1Turn = false
    titleTxt.textContent = "Player 2 starts"
 }

resetBtn.classList.add("buttonHide")

resetBtn.addEventListener("click", function() {
    location.reload()
})

function showResetButton() {
    rollBtn.classList.remove("buttonShow")
    rollBtn.classList.add("buttonHide")
    resetBtn.classList.remove("buttonHide")
    resetBtn.classList.add("buttonShow")
}

rollBtn.addEventListener("click", function() {
    let diceValue = Math.floor(Math.random()*6)+1
    if (player1Turn) {
        dice1.textContent = diceValue
        player1Score += diceValue
        scoreBoard1.textContent = player1Score
        player1Turn = false
        titleTxt.textContent = "Player 2 turn"
    } else {
        dice2.textContent = diceValue
        player2Score += diceValue
        scoreBoard2.textContent = player2Score
        player1Turn = true
        titleTxt.textContent = "Player 1 turn"
    }

    if ((player1Score >= 20) & (player2Score < 20)) {
        titleTxt.textContent = "Player 1 wins!"
        titleTxt.style.color = "green"
        showResetButton()
    } else if ((player1Score < 20) & (player2Score >= 20)) {
        titleTxt.textContent = "Player 2 wins!"
        titleTxt.style.color = "green"
        showResetButton()
    }
})

