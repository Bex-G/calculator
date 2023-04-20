const add = function(a, b) {
    return a + b;
};

const subtract =  function(a, b) {
    return a - b;
};

const multiply = function(a, b) {
    return a * b;
};

const divide = function(a, b) {
    return a / b
};

const solve = function (a, operator, b) {

    if (operator === "+") {
        return add(a, b);
    } else if (operator === "-") {
        return subtract(a, b);
    } else if (operator === "x") {
        return multiply(a, b);
    } else if (operator === "÷") {
        return divide(a, b);
    }
};

let string = "";
let a = 0;
let answer = "";

const trackString = function(targetVal) {
    let newString = string += targetVal;
    return newString;
};

const valueBtn = document.querySelectorAll('.value').forEach(valueBtn => 
    valueBtn.addEventListener('click', function (e) {
        string = trackString(e.target.value);
        console.log(string);
        if (string === a) {
            console.log(string);
        }
    }
));

const display = document.querySelector('#display');

const printToDisplay = function(targetVal) {
    let newVal = display.textContent += targetVal;
    return newVal;
};

const numberBtn = document.querySelectorAll('.number').forEach(numberBtn => 
    numberBtn.addEventListener('click', function (e) {
        
        if (string.slice(0, -1).includes("+") || string.slice(0, -1).includes("-") 
        || string.slice(0, -1).includes("x") || string.slice(0, -1).includes("÷")) {
            operator = findOperator(string.slice(0, -1));
            getAnswer();
        } else if (string.includes("+") || string.includes("-") 
        || string.includes("x") || string.includes("÷")) {
            findOperatorIndex(operator);
            display.textContent = string.slice(operatorIndex + 1);
        } else {
         display.textContent = printToDisplay(e.target.value);
    }}
));

const findOperator = function(string) {
    if (string.includes("+")) {
        return "+";
    } else if (string.includes("-")) {
        return "-";
    } else if (string.includes("x")) {
        return "x";
    } else if (string.includes("÷")) {
        return "÷";
    }
};

const operatorBtn = document.querySelectorAll('.operator').forEach(operatorBtn => 
    operatorBtn.addEventListener('click', function (e) {
            operator = e.target.value;
    }
));

const findOperatorIndex = function(operator) {
    return operatorIndex = string.indexOf(operator);
};

const findA = function(operatorIndex) {
    return a = parseInt(string.slice(0, operatorIndex));
};

const findB = function(operatorIndex) {
    return b = parseInt(string.slice(operatorIndex + 1));
};

const getAnswer = function() {
    findOperatorIndex(operator);
    findA(operatorIndex);
    findB(operatorIndex);
    answer = (solve(a, operator, b));
        
        if (operator = "÷" && b == 0) {
            display.textContent = "ERROR";
        } else if (answer.toString().includes(".")) {
            display.textContent = parseFloat(answer.toFixed(3));
        } else {
            display.textContent = answer;
        }
    string = answer;
    a = answer;
};

const equalsBtn = document.querySelector('#equals');
    equalsBtn.onclick = () => {
        getAnswer();
};

const clearScreen = function() {
    display.textContent = '';
    string = '';
};

const clearBtn = document.querySelector('#clear');
    clearBtn.onclick = clearScreen;



// const backspace = function() {
// };

// const backBtn = document.querySelector('#back');
//   backBtn.onclick = backspace();