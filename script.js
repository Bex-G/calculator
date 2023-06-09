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
let finalAnswer = "";
let operator = "";
let b = "";

const trackString = function(targetVal) {
    
    let newString = string += targetVal;
    return newString;
};

const valueBtn = document.querySelectorAll('.value').forEach(valueBtn => 
    valueBtn.addEventListener('click', function (e) {
        
        if (display.textContent === "ERROR") {
            string = "";
        } else {
            string = trackString(e.target.value);
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

        let previousString = string.slice(0, -1);
        
        if (display.textContent === "ERROR" || display.textContent.length > 16) {
            display.textContent = "ERROR";
        } else if (previousString.includes("+") || previousString.includes("-") 
        || previousString.includes("x") || previousString.includes("÷")) {
            operatorIndex = string.lastIndexOf(operator);
            b = string.slice(operatorIndex + 1);
            display.textContent = b;
        } else if (finalAnswer.length > 1 && finalAnswer === answer) {
                clearScreen();
                string = e.target.value;
                display.textContent = e.target.value;
        } else {
            display.textContent = printToDisplay(e.target.value);
        }
    }
));

const operatorBtn = document.querySelectorAll('.operator').forEach(operatorBtn => 
    operatorBtn.addEventListener('click', function (e) {
        
        let previousString = string.slice(0, -1);
        let previousChar = string.charAt(string.length - 2);
        
        if (previousChar === "+" || previousChar === "-" 
        || previousChar === "x" || previousChar === "÷") {
            display.textContent = "ERROR";
        } else if (previousString.includes("+") || previousString.includes("-") 
        || previousString.includes("x") || previousString.includes("÷")) {
            getAnswer()   
            if (isFinite(answer)) {
                a = answer; 
                operator = e.target.value;
                operatorIndex = string.indexOf(operator);
                display.textContent = a;
            } else {
                display.textContent = "ERROR";
        }} else {
            a = string.slice(0, -1);
            operator = e.target.value;
            operatorIndex = string.indexOf(operator);
            display.textContent = a;
        }
    }
));

const getAnswer = function() {
    
    answer = (solve(parseFloat(a), operator, parseFloat(b)));

    if (answer.toString().includes(".")) {
        answer = parseFloat(answer);
        if (answer.toString().length > 15) {
            answer = answer.toFixed(2);
        }
    }
    answer = answer.toString();
    display.textContent = answer;
    b = "";
};

const equalsBtn = document.querySelector('#equals');
    equalsBtn.onclick = () => {

        if (operator !== "" || b !== "") {
            getAnswer();
        } else {
            display.textContent = "ERROR";
        }

        if (isFinite(answer) && answer.length <= 17) {
            display.textContent = answer;
            finalAnswer = answer;
            string = answer;   
        } else {
            display.textContent = "ERROR";
        }
};

const clearScreen = function() {
    display.textContent = "";
    string = "";
    answer = "";
    a = "";
    b = "";
    operator = "";
};

const clearBtn = document.querySelector('#clear');
    clearBtn.onclick = clearScreen;


const backspace = function() {

    let lastChar = string.charAt(string.length - 1);
        
    if (finalAnswer.length > 1 && finalAnswer === answer) {
        clearScreen();
    } else if (display.textContent === "ERROR") {
        clearScreen();
    } else if (lastChar !== "+" && lastChar !== "-" 
    && lastChar !== "x" && lastChar !== "÷") {
        string = string.slice(0, -1);
        display.textContent = display.textContent.slice(0, -1);
    }

    if (string.includes("+") || string.includes("-") 
    || string.includes("x") || string.includes("÷")) {
        operatorIndex = string.lastIndexOf(operator);
        b = string.slice(operatorIndex + 1);
    }
    console.log(string);
};

const backBtn = document.querySelector('#back');
    backBtn.onclick = backspace;