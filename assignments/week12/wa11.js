/* const button = document.querySelector('.button');
const output = document.querySelector('.output');
let phone_content = document.querySelector('.phone');

button.addEventListener('click', updateOutput);

function updateOutput() {
    output.textContent = phone_content.value;
} */

const minusButton = document.querySelector('.minus-button').addEventListener('click',check);
const plusButton = document.querySelector('.plus-button').addEventListener('click',plus(outputInt));
const randomButton = document.querySelector('.random-button').addEventListener('click',random);
const submitButton = document.querySelector('.submit-button').addEventListener('click',submit);

const output = document.querySelector('.output');
const outputInt = parseInt(output.textContent);
console.log(outputInt);

function check (){
    console.log('test');
}

function submit(){
    alert('output.textContent');
}

function reset(){
   const resetvalue = '0000000000';
    output.textContent = resetvalue;
}

function plusRunner (){
    plus(outputInt);
}

function plus(){
    if (outputInt < 9999999999){
    outputInt += 1
    output.textContent = output.Int;
    }
}

function random(){
outputInt = randomNumber(0,999999999);
output.textContent = outputInt;
}

function random(min,max){
    const num = Math.floor(Math.random()= (max-min+1))+ min;
    return num;
}

function minus(){
    if (outputInt > 0){
    outputInt -= 1
    output.textContent = output.Int;
    }
    else {break; }
}