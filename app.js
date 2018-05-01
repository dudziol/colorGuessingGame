var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

init();

resetButton.addEventListener("click", function(){
	reset();
})

function init(){
	setUpModeButtons();
	setUpSquares();
	reset();
}

function setUpSquares(){
	for(var i=0; i <squares.length; i++){
	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if (clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor)
			resetButton.textContent = "Play Again?";
		}
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again!";
			}
		})
	}
}
	
function setUpModeButtons(){
	for (var i = 0; i<modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0]. classList.remove("selected");
		modeButtons[1]. classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		reset();
		})
	}
}

function reset(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor(numSquares);
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	resetButton.textContent = "New colors";
	for(var i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
	document.querySelector("h1").style.backgroundColor = "steelblue";
}

function changeColors(color){
	for (var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
	document.querySelector("h1").style.backgroundColor = color;
}

function pickColor(num){
	var random = Math.floor(Math.random() *num +1);
	return colors[random-1];
}

function generateRandomColors(num){
	var arr = [];
	for (var i=0; i<num; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	 var red = Math.floor(Math.random() * 256);
	 var green = Math.floor(Math.random() * 256);
	 var blue = Math.floor(Math.random() * 256);
	 return "rgb(" + red + ", " + green + ", "+ blue +")";
}