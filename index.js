//At the start there is no button or click
var numberOfClicks = 0;
var activeButtons = 0;

var btnContainerElement = document.querySelector(".button-container");

function renderHeader() {
	var numberOfClicksElement = document.getElementById("click-number");
	var activeButtonsElement = document.getElementById("active-btns");
	numberOfClicksElement.textContent = numberOfClicks;
	activeButtonsElement.textContent = activeButtons;
}

function handleClick(event) {
	var btn = event.target; // event.target is the element, which fires the event
	btn.disabled = true; // we disable the button
	alert(`${btn.textContent} click!`); // and alert
	// then update the variables and the header
	numberOfClicks++;
	activeButtons--;
	renderHeader();
}

function generateButtons() {
	var numberOfButtons = 10;
	for (var i = 0; i < numberOfButtons; i++) {
		var btn = document.createElement("button");
		btn.type = "button";
		btn.id = "btn-" + i;
		btn.textContent = btn.id;
		btnContainerElement.appendChild(btn);
	}
}

generateButtons(); //We call the function to generate buttons

var buttons = document.querySelectorAll("button");
//We update the variable and render header because we have buttons
activeButtons = buttons.length;
renderHeader();

//We add the same listener to each button
//This could be done with a for loop too
//Try to change the code
buttons.forEach(function (btn) {
	btn.addEventListener("click", handleClick);
});
