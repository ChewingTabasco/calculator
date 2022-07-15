const display = document.querySelector("#display");
const numButtons = document.querySelectorAll(".num-btn");
const clearBtn = document.querySelector("#clr-btn");
const operatorBtns = document.querySelectorAll(".operator-btn");
const eqlBtn = document.querySelector("#eql-btn");
const allBtns = document.querySelectorAll("button");

let firstNum = "";
let secondNum = "";
let operator = "";

numButtons.forEach((button) => {
  button.addEventListener("mousedown", (e) => {
    if (operator === "") {
      firstNum += e.target.textContent;
      console.log(firstNum);
    } else {
      secondNum += e.target.textContent;
      console.log(secondNum);
    }
  });
});

operatorBtns.forEach((button) => {
  button.addEventListener("mousedown", (e) => {
    operator = e.target.textContent;
    console.log(operator);
  });
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
