const display = document.querySelector("#display");
const numButtons = document.querySelectorAll(".num-btn");
const clearBtn = document.querySelector("#clr-btn");

let displayValue = [];

numButtons.forEach((button) => {
  button.addEventListener("mousedown", (e) => {
    displayValue.push(e.target.textContent);
  });
});

// numButtons.forEach((button) => {
//   button.addEventListener("mousedown", (e) => {
//     updateDisplay(e.target.textContent);
//     updateDisplayValue(e.target.textContent);
//   });
// });

// function updateDisplayValue(str) {
//   if (displayValue === "") {
//     displayValue = str;
//   } else {
//     displayValue += str;
//   }
// }

// function updateDisplay(content) {
//   display.textContent += content;
// }

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
