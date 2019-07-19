let numSquares = 6;
let colors;
let correctColor;

let squares = document.querySelectorAll(".square");
let span = document.querySelector("h1 span");
let message = document.querySelector("#message");
let h1 = document.querySelector("h1");
let reset = document.querySelector("#reset");
let difficulty = document.querySelectorAll(".difficulty");

init();

reset.addEventListener("click", resetBoard)

function init() {
	setupDifficulty();
	setupSquares();
	resetBoard();
}

function setupDifficulty() {
	for (let i = 0; i < difficulty.length; i++) {
		difficulty[i].addEventListener("click", function() {
			difficulty[0].classList.remove("selected");
			difficulty[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "EASY" ? (numSquares = 3) : (numSquares = 6);
			resetBoard();
		});
	}
}

function setupSquares() {
	for (let i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click", function() {
			if (this.style.backgroundColor === correctColor) {
				colorChange(correctColor);
				message.textContent = "Correct!!!";
				h1.style.backgroundColor = correctColor;
				reset.textContent = "PLAY AGAIN?";
			} else {
				this.style.backgroundColor = "#232323";
				message.textContent = "Try Again";
			}
		});
	}
}

let colorChange = color => {
	for (let i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
};

function generateRandomColors(num) {
	let arr = [];
	for (let i = 1; i <= num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
		Math.random() * 256
	)}, ${Math.floor(Math.random() * 256)})`;
}

function pickColor() {
	return colors[Math.floor(Math.random() * colors.length)];
}

function assignColorsToSquares() {
	for (let i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
}

function setTargetColor() {
	span.textContent = correctColor;
}

function resetBoard() {
	colors = generateRandomColors(numSquares);
	correctColor = pickColor();
	assignColorsToSquares();
	setTargetColor();
	h1.style.backgroundColor = "#00a0b0";
	reset.textContent = "NEW COLORS";
	message.textContent = " ";
}
