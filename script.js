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

const valueBtn = document.querySelectorAll('.value').forEach(valueBtn => 
    valueBtn.addEventListener('click', function (e) {
        display.textContent = printValues(e.target.value);
    }
));

const printValues = function(targetVal) {
    newVal = display.textContent += targetVal;
    return newVal;
};

const clearScreen = function() {
    display.textContent = '';
};

const clearBtn = document.querySelector('#clear');
  clearBtn.onclick = clearScreen;


// const backspace = function() {
// };

// const backBtn = document.querySelector('#back');
//   backBtn.onclick = backspace();

// const solve = function() {
// };

// const equalsBtn = document.querySelector('#equals');
//   equalsBtn.onclick = solve();










