let display = document.getElementById('display');
let currentInput = '0';

function updateDisplay(value) {
  display.textContent = value;
}

function prints(value) {
  if (currentInput === '0' && value !== '.') {
    currentInput = value;
  } else {
    currentInput += value;
  }
  updateDisplay(currentInput);
}

function erase() {
  currentInput = '0';
  updateDisplay(currentInput);
}

function deletes() {
  currentInput = currentInput.length > 1 ? currentInput.slice(0, -1) : '0';
  updateDisplay(currentInput);
}

function results() {
  try {
    currentInput = eval(currentInput.replace(/[^-()\d/*+.]/g, '')).toString();
    // or i can just simply use
    // currentInput = eval(currentInput);
  } catch {
    currentInput = 'Error';
  }
  updateDisplay(currentInput);
}

document.addEventListener('keydown', (event) =>
     {
  const key = event.key;

  if ((key >= '0' && key <= '9') || key === '.' || key === '(' || key === ')') {
    prints(key);
  } else if (key === '/' || key === '*' || key === '-' || key === '+') {
    prints(key);
  } else if (key === 'Enter' || key === '=') {
    event.preventDefault(); 
    results();
  } else if (key === 'Backspace') {
    deletes();
  } else if (key === 'Escape') {
    erase();
  }
});