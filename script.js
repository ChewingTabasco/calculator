const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("mousedown", (e) => {
    updateDisplay(e.target.textContent);
  });
});

function updateDisplay(content) {
  display.textContent += content;
}

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(operator, num1, num2) {
  if (operator == "+") {
    return add(num1, num2);
  }

  if (operator == "-") {
    return subtract(num1, num2);
  }

  if (operator == "*") {
    return multiply(num1, num2);
  }

  if (operator == "/") {
    return divide(num1, num2);
  }
}
