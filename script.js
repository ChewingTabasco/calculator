const display = document.querySelector("#display");
const numButtons = document.querySelectorAll(".num-btn");
const clearBtn = document.querySelector("#clr-btn");
const operatorBtns = document.querySelectorAll(".operator-btn");
const eqlBtn = document.querySelector("#eql-btn");
const allBtns = document.querySelectorAll("button");

let firstOperand = "";
let secondOperand = "";
let operator = "";

numButtons.forEach((button) => {
  button.addEventListener("mousedown", (e) => {
    if (operator === "") {
      firstOperand += e.target.textContent;
      console.log(firstOperand);
    } else {
      secondOperand += e.target.textContent;
      console.log(secondOperand);
    }
  });
});

operatorBtns.forEach((button) => {
  button.addEventListener("mousedown", (e) => {
    if (operator === "") {
      operator = e.target.textContent;
      console.log(operator);
    } else {
      firstOperand = operate(
        operator,
        Number(firstOperand),
        Number(secondOperand)
      );
      secondOperand = "";
      console.log(firstOperand);
      operator = e.target.textContent;
      console.log(operator);
    }
  });
});

eqlBtn.addEventListener("mousedown", () => {
  if (firstOperand != "" && secondOperand != "" && operator != "") {
    console.log(operate(operator, Number(firstOperand), Number(secondOperand)));

    firstOperand = "";
    secondOperand = "";
    operator = "";
  }
});

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
