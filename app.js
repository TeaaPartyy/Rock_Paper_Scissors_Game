
// setting the scores
let userScore = 0;
let computerScore = 0;

//catching the dumb from the html
const userScore_span = document.getElementById("userScore");
const computerScore_span = document.getElementById("computerScore");
const scoreBoard_div = document.querySelector("scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rockChoice");
const paper_div = document.getElementById("paperChoice");
const scissors_div = document.getElementById("scissorsChoice");


function main() {

	rock_div.addEventListener('click', function() {
		game("rock");
	})
	paper_div.addEventListener('click', function() {
		game("paper");
	})
	scissors_div.addEventListener('click', function() {
		game("scissors");
	})

}




//main function to compare users' choice and the random choice done for the computer
function game(userChoice) {

/*for simplicity, we just add both choices stick to each other, since userchoice is always the first
half of the choice we can automatically deduce who wins and who loses
*/
	const computerChoice = getCompChoice();
	switch (userChoice + computerChoice) {
		case "rockscissors":
			win(userChoice, computerChoice);
			break;
		case "scissorspaper":
			win(userChoice, computerChoice);
			break;
		case "paperrock":
			win(userChoice, computerChoice);
			break;
		case "rockrock":
			draw(userChoice, computerChoice);
			break;
		case "paperpaper":
			draw(userChoice, computerChoice);
			break;
		case "scissorsscissors":
			draw(userChoice, computerChoice);
			break;
		case "scissorsrock":
			loss(userChoice, computerChoice);
			break;
		case "paperscissors":
			loss(userChoice, computerChoice);
			break;
		case "rockpaper":
			loss(userChoice, computerChoice);
			break;		
	}

}

//randomnly select one of the three values and setting it as computer choice.
function getCompChoice() {
	const choices = ['rock','paper', 'scissors'];
	const nb_cmp = Math.floor(Math.random() * 3);
	return choices[nb_cmp];

}

//updateing and dsiplaying the result in the html

function win(userChoice, computerChoice){
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `${userChoice} beats ${computerChoice}. You win !!`;
	document.getElementById(userChoice)

}

function loss(userChoice, computerChoice){
	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `${computerChoice} beats ${userChoice}. Unfortunately, you lost.`;	
}

function draw(userChoice, computerChoice){
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `Both choices were ${computerChoice}. It's a draw.`;
}

main();

