let myChoice = Math.floor(Math.random() * 10);
let enemy = Math.floor(Math.random() * 10);

if (myChoice < 3) {
	myChoice = "rock";
} else if (myChoice <= 6) {
	myChoice = "paper";
} else {
	myChoice = "scissor";
}

if (enemy < 3) {
	enemy = "rock";
} else if (enemy <= 6) {
	enemy = "paper";
} else {
	enemy = "scissor";
}

let duel = function (choice1, choice2) {
	if (choice1 === choice2) {
		return "The result is a tie!";
	}

	if (choice1 === "rock") {
		if (choice2 === "scissor") {
			return "rock wins";
		}
		if (choice2 === "paper") {
			return "paper wins";
		}
	}

	if (choice1 === "paper") {
		if (choice2 === "rock") {
			return "paper wins";
		}
		if (choice2 === "scissor") {
			return "scissors wins";
		}
	}

	if (choice1 === "scissor") {
		if (choice2 === "rock") {
			return "rock wins";
		}
		if (choice2 === "paper") {
			return "scissors wins";
		}
	}
};

console.log("My Choice: " + myChoice);
console.log("Enemy Choice: " + enemy);
console.log(duel(myChoice, enemy));
