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
    }
));

const display = document.querySelector('#display');

const printToDisplay = function(targetVal) {
    let newVal = display.textContent += targetVal;
    return newVal;
};

const numberBtn = document.querySelectorAll('.number').forEach(numberBtn => 
    numberBtn.addEventListener('click', function (e) {
        let previousString = string.slice(0, -1);

        if (previousString.includes("+") || previousString.includes("-") 
        || previousString.includes("x") || previousString.includes("÷")) {
            findOperatorIndex(operator);
            display.textContent = findB(operatorIndex);
            getAnswer();
            string = answer;
            a = answer;
        } else {
            display.textContent = printToDisplay(e.target.value);
    }}
));

const operatorBtn = document.querySelectorAll('.operator').forEach(operatorBtn => 
    operatorBtn.addEventListener('click', function (e) {
        
        if (a = answer) {
            display.textContent = answer;
        }
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
            display.textContent = parseFloat(b.toFixed(3));
        } else {
            display.textContent = b;
        }
};

const equalsBtn = document.querySelector('#equals');
    equalsBtn.onclick = () => {
        display.textContent = answer;
        string = answer;
};

const clearScreen = function() {
    display.textContent = "";
    string = "";
    answer = ""
};

const clearBtn = document.querySelector('#clear');
    clearBtn.onclick = clearScreen();


// const backspace = function() {
// };

// const backBtn = document.querySelector('#back');
//     backBtn.onclick = backspace();