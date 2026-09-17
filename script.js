let num1 = '';
let num2 = '';
let operator = '';

const display = document.querySelector(".result");
const numberButtons = document.querySelectorAll('.number');

function populateDisplay(digit) {
    if (num1 === '' && digit === '0') {
        return;
    }
    
    num1 += digit;
    display.textContent = num1;
}

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        populateDisplay(button.textContent);
    });
});

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
    } else if (operator === '*') {
        return multiply(num1, num2);
    } else if (operator === '/') {
        return divide(num1, num2);
    } else {
        return "Error";
    }
}