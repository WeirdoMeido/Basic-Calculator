const currentOperation = document.querySelector(".current-operation");
const lastOperation = document.querySelector(".pre-operation");
const operatorButton = document.querySelectorAll(".operation-key");
const numberBtn = document.querySelectorAll(".number-key");
const acKey = document.getElementById("ac");
const delKey = document.getElementById("del");
const equalKey = document.querySelector(".equal-key");
const decimalKey = document.querySelector(".decimal-key");


numberBtn.forEach((element) => {
    element.addEventListener('click', () => appendNumber(element.textContent))
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

}

function deleteNumber () {
    let numberLength = Number(currentOperation.textContent.length - 1);
   let newNumber = currentOperation.textContent.slice(0, numberLength);
   currentOperation.textContent = newNumber;

}