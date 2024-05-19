let parentDiv = document.getElementById('parent-container');
let number1 = '', number2 = '';
let operator;

// addition
let addition = function(num1, num2) {
    return num1 + num2;
}

// subtraction
let subtraction = function(num1, num2) {
    return num1 - num2;
}

// multiply
let multiply = function(num1, num2) {
    return num1 * num2;
}

// division
let division = function(num1, num2) {
    if (num1 == 0 || num2 == 0){
        return 'Not 0 allowed for division.';
    }else{
        return num1 / num2;
    }
}