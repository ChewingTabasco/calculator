const display = document.querySelector("#display");
const numButtons = document.querySelectorAll(".num-btn");
const clearBtn = document.querySelector("#clr-btn");
const operatorBtns = document.querySelectorAll(".operator-btn");

let displayValue = [];

let numberArray = [];
let operands = [];

let operator;

numButtons.forEach((button) => {
  button.addEventListener("mousedown", (e) => {
    numberArray.push(e.target.textContent);
  });
});

operatorBtns.forEach((button) => {
  button.addEventListener("mousedown", (e) => {
    if (!numberArray[0] == "") {
      operands.push(numberArray.join(""));
    }
    if (hasTwoOperands()) {
      let result = operate(
        operator,
        parseFloat(operands[0]),
        parseFloat(operands[1])
      );
      console.log(result);

      operands = [];
      operands.push(result);
    }
    operator = e.target.textContent;

    numberArray = [];
  });
});

function hasTwoOperands() {
  if (operands.length === 2) {
    return true;
  }
  return false;
}

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

  if (operator == "×") {
    return multiply(num1, num2);
  }

  if (operator == "÷") {
    return divide(num1, num2);
  }
}
