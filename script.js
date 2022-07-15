const displayContainer = document.querySelector("#display-container");
const upperDisplay = document.querySelector("#upper-display");
const lowerDisplay = document.querySelector("#lower-display");
const allBtns = document.querySelectorAll("button");
const numButtons = document.querySelectorAll(".num-btn");
const operatorBtns = document.querySelectorAll(".operator-btn");
const decimalBtn = document.querySelector("#decimal-btn");
const clearBtn = document.querySelector("#clr-btn");
const eqlBtn = document.querySelector("#eql-btn");

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
      if (firstOperand === "") {
        firstOperand += 0;
        console.log(firstOperand);
      }
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
    firstOperand = operate(
      operator,
      Number(firstOperand),
      Number(secondOperand)
    );
    console.log(firstOperand);

    secondOperand = "";
    operator = "";
  }
});

clearBtn.addEventListener("mousedown", clearAll);

decimalBtn.addEventListener("mousedown", (e) => {
  if (operator === "") {
    if (firstOperand.includes(".")) {
      return;
    }
    firstOperand += e.target.textContent;
  } else {
    if (secondOperand.includes(".")) {
      return;
    }
    secondOperand += e.target.textContent;
  }
});

function clearAll() {
  firstOperand = "";
  secondOperand = "";
  operator = "";
  console.clear();
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

  if (operator == "×") {
    return multiply(num1, num2);
  }

  if (operator == "÷") {
    if (num2 == 0) {
      return "ERROR";
    }
    return divide(num1, num2);
  }
}
