const clearBtn = document.getElementById("clearBtn");
const backBtn = document.getElementById("backBtn");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const symbols = ["+", "-", "x", "÷"];
const equalsBtn = document.getElementById("equalsBtn");
const display = document.getElementById("display");

let a;
let b;
let symbol;

function clear() {
  display.textContent = "";
  a = undefined;
  b = undefined;
  symbol = undefined;
}

function handleNegativeEquations() {
  symbolIndex = display.textContent.lastIndexOf(symbol);
  a = Number(display.textContent.slice(0, symbolIndex));
  b = Number(display.textContent.slice(symbolIndex + 1));
  displayResult();
}

function handleRunningEquations() {
  symbolIndex = display.textContent.indexOf(symbol);
  a = Number(display.textContent.slice(0, symbolIndex));
  b = Number(display.textContent.slice(symbolIndex + 1));
  displayResult();
}

function displayResult() {
  //checks for NaN
  if (a === a && b === b) {
    switch (symbol) {
      case "+":
        display.textContent = parseFloat((a + b).toFixed(5));
        break;
      case "-":
        display.textContent = parseFloat((a - b).toFixed(5));
        break;
      case "x":
        display.textContent = parseFloat((a * b).toFixed(5));
        break;
      case "÷":
        if (b === 0) {
          display.textContent = "ERROR";
        } else {
          display.textContent = parseFloat((a / b).toFixed(5));
        }
        break;
    }
    a = display.textContent;
    b = undefined;
    symbol = undefined;
  } else {
    clear();
    display.textContent = "ERROR";
  }
}

clearBtn.addEventListener("click", () => {
  clear();
});

backBtn.addEventListener("click", () => {
  if (display.textContent === "ERROR") {
    clear();
  } else {
    display.textContent = display.textContent.slice(0, -1);
  }
});

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (display.textContent === "ERROR") {
      clear();
    } else {
      display.textContent = display.textContent + e.target.textContent;
    }
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    if (
      display.textContent.length < 1 &&
      e.target.textContent !== "-" // disallows equations starting with "+," "x," or "/"
    ) {
      display.textContent = "ERROR";
      return;
    }

    if (
      // checks for preexisting operators
      symbols.find((item) => display.textContent.slice(1).includes(item))
    ) {
      if (display.textContent.slice(0, 1) === "-") {
        handleNegativeEquations();
        if (display.textContent !== "ERROR") {
          display.textContent = display.textContent + e.target.textContent;
          symbol = e.target.textContent;
        }
      } else {
        handleRunningEquations();
        if (display.textContent !== "ERROR") {
          display.textContent = display.textContent + e.target.textContent;
          symbol = e.target.textContent;
        }
      }
    } else {
      // assigns a new symbol (operator) variable if one doesn't already exist
      if (display.textContent === "ERROR") {
        clear();
      } else {
        display.textContent = display.textContent + e.target.textContent;
      }
      symbol = e.target.textContent;
    }
  });
});

equalsBtn.addEventListener("click", () => {
  if (display.textContent.slice(0, 1) === "-") {
    handleNegativeEquations();
  } else {
    symbolIndex = display.textContent.indexOf(symbol);
    a = Number(display.textContent.slice(0, symbolIndex));
    b = Number(display.textContent.slice(symbolIndex + 1));
    displayResult();
  }
});
