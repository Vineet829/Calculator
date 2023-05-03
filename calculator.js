let operator = "";
let previousValue = "";
let currentValue = "";

document.addEventListener('DOMContentLoaded', function() {
let currentScreen = document.querySelector(".currentScreen");
let previousScreen = document.querySelector(".previousScreen");
let digits = document.querySelectorAll(".digits");
let operation = document.querySelectorAll(".operations");
let equal = document.querySelector("#equal");
let clr = document.querySelector("#clear");
let dot = document.querySelector("#dot")


digits.forEach((number) => number.addEventListener("click", function (e){
handleNumber(e.target.textContent);
currentScreen.textContent = currentValue;
}));

operation.forEach((op) => op.addEventListener("click", function (e){
    handleOperator(e.target.textContent);
    previousScreen.textContent = previousValue + " " + operator;
    currentScreen.textContent = currentValue;       
}));



clr.addEventListener("click", function(){
    previousValue = "";
    currentValue = "";
    operator = "";
    previousScreen.textContent = currentValue;
    currentScreen.textContent = currentValue;    

})

equal.addEventListener("click", function(){
if(currentValue != "" && previousValue != ""){
    calculate();
previousScreen.textContent = "";
if(previousValue.length <= 5){    
currentScreen.textContent = previousValue;
}
else{
currentScreen.textContent = previousValue.slice(0,5) + "...";
}
}
})
dot.addEventListener('click', function() {
    addDecimal() })
})
function handleNumber(num) {
if(currentValue.length <=5){
 currentValue += num;
}
}

function handleOperator(op) {
  operator = op;
  previousValue = currentValue;
  currentValue = "";  
   
}

function calculate() {
previousValue = Number(previousValue);
currentValue = Number(currentValue);
let total = 0;
    if(operator === "+"){
    total = previousValue + currentValue;}
else if(operator === "-"){
    total = previousValue - currentValue;
} 
else if(operator === "*"){
    total = previousValue * currentValue;
}

else if(operator === "/"){
    total = previousValue / currentValue;
}
previousValue = total;
previousValue = roundNumber(previousValue);
previousValue = previousValue.toString();
currentValue = previousValue.toString();
}
function roundNumber(num) {
    return Math.round(num * 1000) / 1000;
}

function addDecimal() {
    if(!currentValue.includes('.')) {
        currentValue += '.';
    }
}

