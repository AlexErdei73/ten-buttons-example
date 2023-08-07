var numberOfClicks = 0;
var activeButtons = 0;

var btnContainerElement = document.querySelector(".button-container");

function handleClick(event) {
	console.log("Click!");
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

generateButtons();

var buttons = document.querySelectorAll("button");

buttons.forEach(function (btn) {
	btn.addEventListener("click", handleClick);
});
