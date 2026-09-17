let num1 = '';
let num2 = '';
let operator = '';

const display = document.querySelector(".result");
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equal-btn');
const clearButton = document.querySelector('.clear-btn');


numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        populateDisplay(button.textContent);
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (num1 !== '') {
            operator = button.textContent;
        }
    });
});

function populateDisplay(digit) {
    if (operator === '') {
        if (num1 === '' && digit === '0') {
            return;
        };
        num1 += digit;
        display.textContent = num1;
    } else {
        if (num2 === '' && digit === '0') {
            return;
        }
        num2 += digit;
        display.textContent = num2;
    }
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return "You cannot divide by zero";
    }

    return num1 / num2;
}

function operate(operator, num1, num2) {
    if (operator === '+') {
        return add(num1, num2);
    } else if (operator === '-') {
        return subtract(num1, num2);
    } else if (operator === '×') {
        return multiply(num1, num2);
    } else if (operator === '÷') {
        return divide(num1, num2);
    } else {
        return "Error";
    }
}

equalButton.addEventListener('click', () => {
    if (num1 !== '' && operator !== '' && num2 !== '') {
        const result = operate(operator, Number(num1), Number(num2));

        display.textContent = result;

        num1 = result.toString();
        num2 = '';
        operator = '';
    }
});

clearButton.addEventListener('click', () => {
    num1 = '';
    num2 = '';
    operator = '';
    display.textContent = '0';
});