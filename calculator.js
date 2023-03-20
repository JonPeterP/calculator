let num1 = 0;
let num2 = 0;
let result;
let operator;
let txtNumberResult = "";


function operate(num1, num2, operator){
    let result;
    if(operator == "+") result = num1 + num2;
    if(operator == "-") result = num1 - num2;
    if(operator == "X") result = num1 * num2;
    if(operator == "/") result = num1 / num2;

    console.log(num1, num2, operator, result);
    txtResult.value = result;

}



function operatorClick(){
    txtNumberResult = "";
    num1 = txtResult.value;
    operator = this.textContent;
    txtResult.value = "0";
};

function numberClick(){
    txtNumberResult += this.textContent;
    txtResult.value = txtNumberResult;
}


const txtResult = document.querySelector(".txtResult");

const btnOperators = document.querySelectorAll("button.operator");
btnOperators.forEach(btn => btn.addEventListener("click", operatorClick));

const btnNumbers = document.querySelectorAll("button.number");
btnNumbers.forEach(btn => btn.addEventListener('click', numberClick))

const btnEquals = document.querySelector(".btnEquals");
btnEquals.addEventListener("click", function equals(){
    num2 = txtResult.value;
    operate(parseInt(num1), parseInt(num2), operator)

});

txtResult.value = "0";
