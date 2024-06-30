Description of Each Line of Code app.js

Initialization and Event Listeners

	1.	document.addEventListener('DOMContentLoaded', () => {: Waits for the DOM content to be fully loaded before running the script.
	2.	const buttons = document.querySelectorAll('.calc-button');: Selects all calculator buttons.
	3.	const display = document.getElementById('result');: Selects the display element.
	4.	let currentInput = '0';: Initializes the variable to store the current input value.
	5.	let previousInput = '';: Initializes the variable to store the previous input value.
	6.	let operator = '';: Initializes the variable to store the operator.

Button Click Handling

	7.	buttons.forEach(button => {: Iterates over each button.
	8.	button.addEventListener('click', () => {: Adds a click event listener to each button.
	9.	const buttonValue = button.textContent.trim();: Gets the text content of the clicked button.

Input Handling

	10.	if (buttonValue >= '0' && buttonValue <= '9') {: Checks if the button value is a number.
	11.	handleNumber(buttonValue);: Calls the handleNumber function.
	12.	} else if (buttonValue === 'C') {: Checks if the button value is ‘C’.
	13.	clear();: Calls the clear function.
	14.	} else if (buttonValue === '←') {: Checks if the button value is ‘←’.
	15.	deleteLast();: Calls the deleteLast function.
	16.	} else if (buttonValue === '=') {: Checks if the button value is ‘=’.
	17.	calculate();: Calls the calculate function.
	18.	} else {: Handles input of operators.
	19.	handleOperator(buttonValue);: Calls the handleOperator function.

Display Update

	20.	updateDisplay();: Calls the updateDisplay function to refresh the display.

Functions

	21.	function handleNumber(num) {: Defines the handleNumber function.
	22.	currentInput = currentInput === '0' ? num : currentInput + num;: Appends the entered number to the current input.
	23.	function handleOperator(op) {: Defines the handleOperator function.
	24.	if (operator && currentInput !== '0') {: Checks if an operator is already set and the current input is not ‘0’.
	25.	calculate();: Calls the calculate function.
	26.	previousInput = currentInput;: Stores the current input as the previous input.
	27.	currentInput = '0';: Resets the current input to ‘0’.
	28.	operator = op;: Sets the operator.
	29.	function calculate() {: Defines the calculate function.
	30.	let result;: Declares the variable to store the result.
	31.	const prev = parseFloat(previousInput);: Converts the previous input to a number.
	32.	const curr = parseFloat(currentInput);: Converts the current input to a number.
	33.	if (isNaN(prev) || isNaN(curr)) return;: Checks if either previous or current input is not a number and returns if true.
	34.	switch (operator) {: Checks the operator.
	35.	case '+':: Case for addition.
	36.	result = prev + curr;: Performs addition.
	37.	break;: Breaks the switch case.
	38.	case '−':: Case for subtraction.
	39.	result = prev - curr;: Performs subtraction.
	40.	break;: Breaks the switch case.
	41.	case '×':: Case for multiplication.
	42.	result = prev * curr;: Performs multiplication.
	43.	break;: Breaks the switch case.
	44.	case '÷':: Case for division.
	45.	result = prev / curr;: Performs division.
	46.	break;: Breaks the switch case.
	47.	default: return;: Default case.
	48.	currentInput = result.toString();: Converts the result to a string and assigns it to the current input.
	49.	operator = '';: Resets the operator.
	50.	previousInput = '';: Resets the previous input.
	51.	function clear() {: Defines the clear function.
	52.	currentInput = '0';: Resets the current input to ‘0’.
	53.	previousInput = '';: Resets the previous input.
	54.	operator = '';: Resets the operator.
	55.	function deleteLast() {: Defines the deleteLast function.
	56.	currentInput = currentInput.slice(0, -1) || '0';: Deletes the last character from the current input or sets it to ‘0’ if empty.
	57.	function updateDisplay() {: Defines the updateDisplay function.
	58.	display.textContent = currentInput;: Updates the display with the current input.
	59.	});: Closes the DOMContentLoaded event listener.
	60.	});: Closes the button event listener.