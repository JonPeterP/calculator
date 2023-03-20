
equation = {
    num1: "",
    num2: "",
    operator: "",
    result: 0,
    justEquated: false

}


function operate(num1, num2, operator){
    let result;
    if(operator == "+") result = num1 + num2;
    if(operator == "-") result = num1 - num2;
    if(operator == "X") result = num1 * num2;
    if(operator == "/") result = num1 / num2;

    equation.result = result;
    console.log(num1, num2, operator, result);
    txtResult.value = equation.result;

}


function operatorClick(){
    equation.justEquated = false;
    equation.num2 = txtResult.value;
    equation.num1 = "";
    equation.operator = this.textContent;
    txtResult.value = "0";
    console.log(equation);

    updateHistory();
};

function numberClick(){
    if(equation.justEquated){
        equation.num2 = "";
        equation.num1 = "";
        equation.justEquated = false;

    }
    equation.num1 += this.textContent;
    txtResult.value = equation.num1;

    updateHistory();

}


const txtResult = document.querySelector(".txtResult");

const btnOperators = document.querySelectorAll("button.operator");
btnOperators.forEach(btn => btn.addEventListener("click", operatorClick));

const btnNumbers = document.querySelectorAll("button.number");
btnNumbers.forEach(btn => btn.addEventListener('click', numberClick))
 
const btnEquals = document.querySelector(".btnEquals");
btnEquals.addEventListener("click", function equals(){
    if(equation.justEquated){
        equation.num2 = txtResult.value;

        operate(parseFloat(equation.num2), parseFloat(equation.num1), equation.operator);
        txtResult.scrollLeft = txtResult.scrollWidth;
        equation.justEquated = true;
        updateHistory();
        return;
    }else if(equation.num1 == "0" && equation.operator == "/"){
        txtHistory.textContent = "no";
        txtResult.value = "0";
        return
    }
    equation.num1 = txtResult.value;
    if(equation.num2 == "" || equation.num1 == ""){
        console.log(equation);
        return;
    }
   
    operate(parseFloat(equation.num2), parseFloat(equation.num1), equation.operator);
    console.log(equation);
    txtResult.scrollLeft = txtResult.scrollWidth;
    equation.justEquated = true;
    updateHistory();

});

const btnDel = document.querySelector(".btnDelete");
btnDel.addEventListener(("click"), function del(){
    txtResult.value = txtResult.value.slice(0, -1);
    equation.num1 = txtResult.value;
});

const btnAC = document.querySelector(".btnAC");
btnAC.addEventListener("click", function clear(){
    equation.num1 = "";
    equation.num2 = "";
    equation.operator = "";
    equation.result = 0;
    equation.justEquated = false;
    txtResult.value = "0";
    
    console.log(equation);
    updateHistory();

});

function updateHistory(){
    txtHistory.textContent = equation.num2 + " " + equation.operator + " " + equation.num1;
    console.log(txtHistory);
}

const txtHistory = document.querySelector(".txtHistory");
txtHistory.addEventListener("click", updateHistory);

txtResult.value = "0";
