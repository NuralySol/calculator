document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.calc-button, .equal'); // Selects all calculator buttons
    const display = document.getElementById('result'); // Selects the display element
    const exitButton = document.getElementById('exit-button'); // Selects the exit button
    let currentInput = '0'; // Stores the current input value
    let previousInput = ''; // Stores the previous input value
    let operator = ''; // Stores the operator

    // Adds a click event listener to the exit button
    exitButton.addEventListener('click', () => {
        window.location.href = 'https://www.youtube.com/watch?v=csn2CIWPVbM';
    })

    // Adds a click event listener to each calculator button
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonValue = button.textContent.trim(); // Gets the text content of the clicked button
            if (currentInput === '666') {
                window.location.href = 'https://www.youtube.com/watch?v=AKGPvul8FXc'; // Redirects to the specified URL if 666 is entered
                return;
            }
            if (currentInput === '69') {
                window.location.href = 'https://www.youtube.com/watch?v=l60MnDJklnM'; // Redirects to the specified URL if 666 is entered
                return;
            }
            if (currentInput === '420') {
                window.location.href = 'https://www.cany.org/'; // Redirects to the specified URL if 666 is entered
                return;
            }
            if (currentInput === '26082015') {
                window.location.href = 'https://www.youtube.com/watch?v=vGJTaP6anOU'; // Redirects to the specified URL if 666 is entered
                return;
            }
            if (currentInput === '312') {
                window.location.href = 'https://www.youtube.com/watch?v=bRPVQaTfXU4'; // Redirects to the specified URL if 666 is entered
                return;
            }
            if (buttonValue >= '0' && buttonValue <= '9') {
                handleNumber(buttonValue); // Handles input of numbers
            } else if (buttonValue === 'C') {
                clear(); // Clears the calculator
            } else if (buttonValue === '←') {
                deleteLast(); // Deletes the last entered digit
            } else if (buttonValue === '=') {
                calculate(); // Performs the calculation
            } else {
                handleOperator(buttonValue); // Handles input of operators
            }

            updateDisplay(); // Updates the display with the current input
        });
    });

    // Appends the entered number to the current input
    function handleNumber(num) {
        currentInput = currentInput === '0' ? num : currentInput + num;
    }

    // Stores the current operator and prepares for the next input
    function handleOperator(op) {
        if (operator && currentInput !== '0') {
            calculate(); // If an operator is already set and current input is not '0', performs the calculation
        }
        previousInput = currentInput; // Stores the current input as the previous input
        currentInput = '0'; // Resets the current input to '0'
        operator = op; // Sets the operator
    }

    // Executes the calculation based on the stored operator and inputs
    function calculate() {
        let result;
        const prev = parseFloat(previousInput); // Converts the previous input to a number
        const curr = parseFloat(currentInput); // Converts the current input to a number

        if (isNaN(prev) || isNaN(curr)) return; // If either previous or current input is not a number, returns

        switch (operator) {
            case '+':
                result = prev + curr; // Performs addition
                break;
            case '−':
                result = prev - curr; // Performs subtraction
                break;
            case '×':
                result = prev * curr; // Performs multiplication
                break;
            case '÷':
                result = prev / curr; // Performs division
                break;
            default:
                return;
        }

        currentInput = result.toString(); // Converts the result to a string and assigns it to the current input
        operator = ''; // Resets the operator
        previousInput = ''; // Resets the previous input
    }

    // Resets all inputs and operator
    function clear() {
        currentInput = '0'; // Resets the current input to '0'
        previousInput = ''; // Resets the previous input
        operator = ''; // Resets the operator
    }

    // Deletes the last character of the current input
    function deleteLast() {
        currentInput = currentInput.slice(0, -1) || '0'; // Deletes the last character from the current input or sets it to '0' if empty
    }

    // Updates the calculator display with the current input
    function updateDisplay() {
        display.textContent = currentInput; // Updates the display with the current input
    }
});