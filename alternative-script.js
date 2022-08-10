let calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};

function inputDigit(digit) {
    const { displayValue } = calculator;

    if (calculator.waitingForSecondOperand === true) {
        calculator.displayValue = digit;
        calculator.waitingForSecondOperand = false;
    } else {

    calculator.displayValue = displayValue === '0' ? digit: displayValue + digit;
    }
}

function inputDecimal (dot) {
    if(calculator.waitingForSecondOperand === true) {
        calculator.displayValue = '0.';
        calculator.waitingForSecondOperand = false;
        return;
    }

    if (!calculator.displayValue.includes(dot)) {
        calculator.displayValue += dot;
    }
}

function clearDisplay () {
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
}

function handleOperator (nextOperator) {
    const { firstOperand, displayValue, operator } = calculator;
    const inputValue = Number(displayValue);

    if (operator && calculator.waitingForSecondOperand) {
        calculator.operator = nextOperator;
        return;
    }

    if (firstOperand === null && !isNaN(inputValue)) {
        calculator.firstOperand = inputValue;
    } else if (operator) {
        const result = calculate(firstOperand, inputValue, operator);

        calculator.displayValue = `${parseFloat(result.toFixed(4))}`;
        calculator.firstOperand = result;
    }
    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
}

function deleteNumber () {
    let delNum = calculator.displayValue.slice(0, calculator.displayValue.length-1);
    calculator.displayValue = Number(delNum);
    calculator.firstOperand = Number(delNum);
    updateDisplay();
}

function calculate (firstOperand, secondOperand, operator) {
    if (operator === '+') {
        return firstOperand + secondOperand;
    } else if (operator === '-') {
        return firstOperand - secondOperand;
    } else if (operator === 'x') {
        return firstOperand * secondOperand;
    } else if (operator === '÷') {
        return firstOperand / secondOperand;
    }
    return secondOperand;
}

function updateDisplay() {
    const display = document.querySelector('.current-operation');
    display.textContent = calculator.displayValue;
}
updateDisplay();

const keys = document.querySelector('.container');
keys.addEventListener('click', (event) => {
    const { target } = event;

    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('operation-key')) {
        handleOperator(target.textContent);
        updateDisplay();
        return
    }

    if (target.classList.contains('decimal-key')) {
        inputDecimal(target.textContent);
        updateDisplay();
        return;
    }

    if (target.classList.contains('ac-key')) {
        clearDisplay();
        updateDisplay();
        return;
    }

    if (target.classList.contains('del-key')) {
        deleteNumber();
        return;
    }

    inputDigit(target.textContent);
    updateDisplay();
});