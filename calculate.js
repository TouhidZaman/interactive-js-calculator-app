const resultField = document.getElementById('result-field');
const expressionField = document.getElementById('expression-field');
let expression  = '';

//For inserting user input into expression
const insertMe = (event) => {
    let target = event.target;
    //To fix Icon click clc-button id not found Issue
    expression += target.innerText ? target.innerText :
     target.id ? target.id : target.parentNode.id;
     
    expressionField.innerText = expression;
}

//To clear claculator display
const clearDisplay = () => {
    resultField.innerText = '0';
    expressionField.innerText = '0';
    expression = '';
}

//To delete a single value from expression
const deleteItem = () => {
    expression = expression.slice(0, -1);
    if(expression.length > 0) {
        expressionField.innerText = expression;
    }
    else expressionField.innerText = '0';
}

//To get the final result from expression
const calculate = () => {
    let result = eval(expression);
    resultField.innerText = result;
}