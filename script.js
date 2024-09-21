let displayValue = ''; // Global variable to store current input

// Function to update the display
function updateDisplay() {
  document.getElementById('display').innerText = displayValue || '0';
}

// Function to append characters (numbers and operations)
function appendCharacter(character) {
  displayValue += character;
  updateDisplay();
}

// Function to clear the display (AC button)
function clearDisplay() {
  displayValue = '';
  updateDisplay();
}

// Function to calculate the square
function square() {
  displayValue = String(Math.pow(parseFloat(displayValue), 2));
  updateDisplay();
}

// Function to calculate the result
function calculate() {
  try {
    displayValue = String(eval(displayValue.replace('×', '*').replace('÷', '/')));
    updateDisplay();
  } catch (error) {
    displayValue = 'Error'; // Display error if expression is invalid
    updateDisplay();
  }
}
