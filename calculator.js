let num1 = 0;
let num2 = 0;
let result;
let operator;

function operate(num1, num2, operator){
    if(operator == "+") return num1 + num2;
    if(operator == "-") return num1 - num2;
    if(operator == "*") return num1 * num2;
    if(operator == "/") return num1 / num2;
}


console.log(operate(5,6, "/"));


const txtResult = document.querySelector(".txtResult")
txtResult.value = "123456";
