let currentOperation = document.querySelector(".current-operation");
let lastOperation = document.querySelector(".pre-operation");
const operatorButton = document.querySelectorAll(".operation-key");
const numberBtn = document.querySelectorAll(".number-key");



numberBtn.forEach((element) => {
    element.addEventListener('click', () => appendNumber(element.textContent))
});


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