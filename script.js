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
let answer = "";

const trackString = function(targetVal) {
    let newString = string += targetVal;
    return newString;
};

const valueBtn = document.querySelectorAll('.value').forEach(valueBtn => 
    valueBtn.addEventListener('click', function (e) {
        console.log(string);
        console.log(answer);
    }
));

const display = document.querySelector('#display');

const printToDisplay = function(targetVal) {
    let newVal = display.textContent += targetVal;
    return newVal;
};

const numberBtn = document.querySelectorAll('.number').forEach(numberBtn => 
    numberBtn.addEventListener('click', function (e) {
        string = trackString(e.target.value);
        let previousString = string.slice(0, -1);

        if (previousString.includes("+") || previousString.includes("-") 
        || previousString.includes("x") || previousString.includes("÷")) {
            b = parseInt(string.slice(operatorIndex + 1));
            getAnswer();
            display.textContent = b;
        } else {
            display.textContent = printToDisplay(e.target.value);
    }}
));

const operatorBtn = document.querySelectorAll('.operator').forEach(operatorBtn => 
    operatorBtn.addEventListener('click', function (e) {
        string = trackString(e.target.value);

        if (a = answer) {
            display.textContent = answer;
            operator = e.target.value;
            operatorIndex = string.indexOf(operator);
        } else {
            operator = e.target.value;
            operatorIndex = string.indexOf(operator);
            a = parseInt(string.slice(0, operatorIndex));
        }
    }   
));

const getAnswer = function() {
    answer = (solve(a, operator, parseInt(string.slice(operatorIndex + 1))));
};

const equalsBtn = document.querySelector('#equals');
    equalsBtn.onclick = () => {
        getAnswer();
        display.textContent = answer;
};

const clearScreen = function() {
    display.textContent = "";
    string = "";
    answer = ""
};

const clearBtn = document.querySelector('#clear');
    clearBtn.onclick = clearScreen;


// const backspace = function() {
// };

// const backBtn = document.querySelector('#back');
//     backBtn.onclick = backspace;