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

titleTxt.style.color = "green"
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
    titleTxt.style.color = "black"
    const diceValue = Math.floor(Math.random()*6)+1
    let diceValueChar = ""
    if (diceValue === 1) {
        diceValueChar = "one"
    } else if (diceValue === 2) {
        diceValueChar = "two"
    } else if (diceValue === 3) {
        diceValueChar = "three"
    } else if (diceValue === 4) {
        diceValueChar = "four"
    } else if (diceValue === 5) {
        diceValueChar = "five"
    } else {
        diceValueChar = "six"
    }


    if (player1Turn) {
        dice1.innerHTML = `<i class="fa-solid fa-dice-${diceValueChar}"></i>` 
        player1Score += diceValue
        scoreBoard1.textContent = player1Score
        player1Turn = false
        titleTxt.textContent = "Player 2 turn"
    } else {
        dice2.innerHTML = `<i class="fa-solid fa-dice-${diceValueChar}"></i>` 
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

