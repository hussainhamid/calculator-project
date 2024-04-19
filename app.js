let clear = document.querySelector(".clear");
let decimal = document.querySelector(".decimal");
let equal = document.querySelector(".equal");
let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
let previousScreen = document.querySelector(".previous");
let currentScreen = document.querySelector(".current");

let operator = '';
let previousValue = '';
let currentValue = '';


function populateDisplayNum(num) {
    if (currentValue.length <= 10) {
        currentValue += num;
    };
};

function populateDisplayOp(op) {
    operator = op;
    previousValue = currentValue;
    currentValue = '';
}

function populateDisplayDec() {
    if (!currentValue.includes(".")) {
        currentValue += "."
    }
}

function roundNum(num) {
    return Math.round(num * 1000) / 1000;
}

function operate() {
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if (operator === "+") {
        previousValue += currentValue;
    }
    else if (operator === "-") {
        previousValue -= currentValue;
    } 
    else if (operator === "*") {
        previousValue *= currentValue;
    }
    else {
        previousValue /= currentValue;
    }

    previousValue = roundNum(previousValue);

}

numbers.forEach((number) => number.addEventListener('click', function(e) {
    populateDisplayNum(e.target.textContent)
    currentScreen.textContent = currentValue;
}));

operators.forEach((op) => op.addEventListener('click', function(e) {
    populateDisplayOp(e.target.textContent)
    previousScreen.textContent = previousValue + " " + operator;
    currentScreen.textContent = currentValue;
}));

equal.addEventListener('click', function() {
    operate()

    previousScreen.textContent = '';
    currentScreen.textContent = previousValue;
});

clear.addEventListener('click', function() {
    previousValue = '';
    currentValue = '';
    operator = '';
    previousScreen.textContent = '';
    currentScreen.textContent = '';  
});

decimal.addEventListener('click', function() {
    populateDisplayDec();
});