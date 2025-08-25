const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const answer = document.getElementById("answer");

function erase(){
    answer.value = "";
    num1.value = "";
    num2.value = "";
}

function plus (){
    answer.value = Number(num1.value) + Number(num2.value);
}

function minus (){
    answer.value = Number(num1.value) - Number(num2.value);
}

function multiply (){
    answer.value = Number(num1.value) * Number(num2.value);
}

function divide (){
    answer.value = Number(num1.value) / Number(num2.value);
}