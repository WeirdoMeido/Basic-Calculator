const currentOperation = document.querySelector(".current-operation");
const lastOperation = document.querySelector(".pre-operation");
const operatorButton = document.querySelectorAll(".operation-key");
const numberBtn = document.querySelectorAll(".number-key");
const acKey = document.getElementById("ac");
const delKey = document.getElementById("del");
const equalKey = document.querySelector(".equal-key");
const decimalKey = document.querySelector(".decimal-key");

let firstMember = '';
let secondMember = '';
let currentOperator = '';


numberBtn.forEach((element) => {
    element.addEventListener("click", () => appendNumber(element.textContent))
});

operatorButton.forEach((element) => {
    element.addEventListener("click", () => setOperator(element.textContent))
});

acKey.addEventListener("click", clearContent);

delKey.addEventListener("click", deleteNumber);



////FUNCTIONS////

function add (a, b) {
    return a + b;
}

function substract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

function appendNumber (number) {
    if (currentOperation.textContent === '0') {
        resetScreen();
    }

    currentOperation.textContent += number
}

function resetScreen () {
    currentOperation.textContent = '';
}

function clearContent () {
    currentOperation.textContent = '0';
    lastOperation.textContent = '';

}

function deleteNumber () {
    let numberLength = Number(currentOperation.textContent.length - 1);
   let newNumber = currentOperation.textContent.slice(0, numberLength);
   currentOperation.textContent = newNumber;

}

function setOperator (operator) {
    if (operator === '+') {
        currentOperator = '+';
        lastOperation.textContent = `${currentOperation.textContent} ${currentOperator}`;
        currentOperation.textContent = '0';
    }
    else if (operator === '-') {
        currentOperator = '-';
        lastOperation.textContent = `${currentOperation.textContent} ${currentOperator}`;
        currentOperation.textContent = '0';
    }
    else if (operator === 'x') {
        currentOperator = '*';
        lastOperation.textContent = `${currentOperation.textContent} ${currentOperator}`;
        currentOperation.textContent = '0';
    }
    else if (operator === '÷') {
        currentOperator = '/';
        lastOperation.textContent = `${currentOperation.textContent} ${currentOperator}`;
        currentOperation.textContent = '0';
    }
}

function evaluate (firstMember, currentOperation, secondMember) {
    if (currentOperation === '+') {
        add(firstMember + secondMember);
    }
    else if (currentOperation === '-') {
        substract(firstMember - secondMember);
    }
    else if (currentOperation === '*') {
        multiply(firstMember * secondMember);
    }
    else if (currentOperation === '/') {
        divide(firstMember - secondMember)
    }
}