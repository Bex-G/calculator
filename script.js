const add = function(a, b) {
    return a + b;
}

const subtract =  function(a, b) {
    return a - b;
}

const multiply = function(a, b) {
    return a * b;
}

const divide = function(a, b) {
    return a / b;
}

const operate = function (a, operator, b) {

    if (operator === "+") {
        return add(a, b);
    } else if (operator === "-") {
        return subtract(a, b);
    } else if (operator === "x") {
        return multiply(a, b);
    } else if (operator === "/") {
        return divide(a, b);
    }
};

const display = document.querySelector('#display');
const displayText = document.querySelector('#displayText');
displayText.classList.add('content');


const numberButton = document.querySelectorAll('.numberButton').forEach(numberButton => 
    numberButton.addEventListener('click', function (e) {
    displayText.textContent = e.target.id;
    }
));







