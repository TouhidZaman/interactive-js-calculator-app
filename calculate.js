const resultField = document.getElementById('result-field');
const expressionField = document.getElementById('expression-field');
let expression  = '';

function insertMe(event) {
    let number = event.target.innerText;
    console.log(event.target.innerText);
    expression += number ? number : event.target.id;
    expressionField.innerText = expression;
    // console.log(expression);
}
function clearDisplay() {
    resultField.innerText = '0';
    expressionField.innerText = '0';
    expression = '';
}
function deleteItem() {
    expression = expression.slice(0, -1);
    if(expression.length > 0) {
        expressionField.innerText = expression;
    }
    else expressionField.innerText = '0';
}
function calculate() {
    let result = eval(expression);
    resultField.innerText = result;
}