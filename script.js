let player = {
	 name: 'Leidy',
	 chips: 145
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el") // when using query selector we have to be more specific and since we are selecting a css selector we have to put the # in front of the id does the same thing as getElementById
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
	let randomNumber = Math.floor( Math.random() * 13 ) + 1
	if (randomNumber > 10) {
		return 10
	} else if (randomNumber === 1) {
		return 11
	} else {
		return  randomNumber
	}//this generates a random number between 1 and 13
}

function startGame() {
	isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard] 
    sum = firstCard + secondCard

	renderGame()

}

function renderGame() {
	cardsEl.textContent = "Cards: " 
	for (let i = 0; i < cards.length; i++) {
		cardsEl.textContent += cards[i] + " "
	}
	sumEl.textContent = "Sum: " + sum
		
		if (sum <= 20) {
	    message = "do you want to draw a new card?"
	} else if (sum === 21){
	    message = "yay! you got blackjack"
	    hasBlackJack = true
	} else {
	    message = "you are out of the game"
		isAlive = false
	}
	messageEl.textContent = message
	
}

function newCard() { 

	if (isAlive === true && hasBlackJack === false) {
		let card = getRandomCard()
		sum += card 
		cards.push(card)
		renderGame()
	} 
	

}
	








