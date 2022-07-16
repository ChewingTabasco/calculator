const display = document.querySelector("#display");
const allBtns = document.querySelectorAll("button");
const numButtons = document.querySelectorAll(".num-btn");
const operatorBtns = document.querySelectorAll(".operator-btn");
const decimalBtn = document.querySelector("#decimal-btn");
const clearBtn = document.querySelector("#clr-btn");
const eqlBtn = document.querySelector("#eql-btn");
const negBtn = document.querySelector("#neg-btn");

let firstOperand = "";
let secondOperand = "";
let operator = "";

numButtons.forEach((button) => {
  button.addEventListener("mousedown", (e) => {
    if (operator === "") {
      firstOperand += e.target.textContent;
    } else {
      secondOperand += e.target.textContent;
    }
    updateDisplay();
  });
});

operatorBtns.forEach((button) => {
  button.addEventListener("mousedown", (e) => {
    if (operator === "") {
      if (firstOperand === "") {
        firstOperand += 0;
      }
      operator = e.target.textContent;
    } else {
      let result = operate(
        operator,
        Number(firstOperand),
        Number(secondOperand)
      );

      if (Math.round(result) < result) {
        firstOperand = String((result.toFixed(6) * 100) / 100);
      } else {
        firstOperand = String(result);
      }
      secondOperand = "";
      operator = e.target.textContent;
    }
    updateDisplay();
  });
});

eqlBtn.addEventListener("mousedown", () => {
  if (firstOperand != "" && secondOperand != "" && operator != "") {
    let result = operate(operator, Number(firstOperand), Number(secondOperand));

    if (Math.round(result) < result) {
      firstOperand = String((result.toFixed(6) * 100) / 100);
    } else {
      firstOperand = String(result);
    }

    secondOperand = "";
    operator = "";
  }

  if (firstOperand === "") {
    return;
  }
  updateDisplay();
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
  updateDisplay();
});

negBtn.addEventListener("click", (e) => {
  if (operator === "") {
    if (firstOperand.includes("-")) {
      firstOperand = firstOperand.replace("-", "");
      updateDisplay();
    } else {
      firstOperand = "-" + firstOperand;
      updateDisplay();
    }
  } else {
    if (secondOperand.includes("-")) {
      secondOperand = secondOperand.replace("-", "");
      updateDisplay();
    } else {
      secondOperand = "-" + secondOperand;
      updateDisplay();
    }
  }
});

function clearAll() {
  firstOperand = "";
  secondOperand = "";
  operator = "";
  display.textContent = "0";
}

function updateDisplay() {
  display.textContent = firstOperand + operator + secondOperand;
}

// function roundResult(total) {
//   if (Math.round(total) < total) {
//     let totalStr = String(total);
//     let totalSplitArr = totalStr.split(".");
//     console.log(totalSplitArr);

//     let decimals = totalSplitArr[1].split("");
//     console.log(decimals);

//     if (decimals.length > 6) {
//       return String(total.toFixed(6));
//     } else {
//       return String(total);
//     }
//   } else {
//     return String(total);
//   }
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
    if (num2 == 0) {
      return "ERROR";
    }
    return divide(num1, num2);
  }
}
