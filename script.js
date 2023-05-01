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
        
        if (finalAnswer.toString().length > 1 && display.textContent === answer) {
            clearScreen();
            string = e.target.value;
            display.textContent = printToDisplay(e.target.value);
        } else if (previousString.includes("+") || previousString.includes("-") 
        || previousString.includes("x") || previousString.includes("÷")) {
            b = string.slice(operatorIndex + 1)
            display.textContent = b;
        } else {
            display.textContent = printToDisplay(e.target.value);
        }
    }
));

const operatorBtn = document.querySelectorAll('.operator').forEach(operatorBtn => 
    operatorBtn.addEventListener('click', function (e) {
        
        let previousString = string.slice(0, -1);
        
        if (previousString.includes("+") || previousString.includes("-") 
        || previousString.includes("x") || previousString.includes("÷")) {
            getAnswer()
            a = answer; 
            operator = e.target.value;
            operatorIndex = string.indexOf(operator);
            display.textContent = a;
        } else {
            a = string.slice(0, -1);
            operator = e.target.value;
            operatorIndex = string.indexOf(operator);
            display.textContent = a;
        }
    }
));

const getAnswer = function() {
    answer = (solve(parseInt(a), operator, parseInt(b))); 
    
    if (answer.toString().length > 17 && answer.toString().includes(".")) {
        answer = parseFloat(answer.toFixed(5));
    }
};

const equalsBtn = document.querySelector('#equals');
    equalsBtn.onclick = () => {
        getAnswer();
        display.textContent = answer;
        finalAnswer = answer;
        string = answer;
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