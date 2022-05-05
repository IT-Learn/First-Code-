 let input = document.getElementById("input");
 let button = document.getElementById("button");
 let result =document.getElementById("result");


 button.addEventListener("click",() => {
     let step1 = input.value;
     let step2 = step1.split("").reverse().join("");
     result.innerHTML = `RESULT IS: ${step2}`;
     input.value = "";
 })
let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
let button2 = document.getElementById("button2");
let result2 = document.getElementById("result2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let button5 = document.getElementById("button5");

button2.addEventListener("click",() => {
    let num1 = parseInt(number1.value);
    let num2 = parseInt(number2.value);
    result2.innerText =  `RESULT IS: ${num1 + num2}`;
    number1.value = "";
    number2.value = "";
})
button3.addEventListener("click",() => {
    let num1 = number1.value;
    let num2 = number2.value;
    result2.innerText = `RESULT IS: ${num1-num2}`;
    number1.value = "";
    number2.value = "";
})
button4.addEventListener("click",() => {
    let num1 = number1.value;
    let num2 = number2.value;
    result2.innerText = `RESULT IS: ${num1*num2}`;
    number1.value = "";
    number2.value = "";
 })
 button5.addEventListener("click",() => {
     let num1 = number1.value;
     let num2 = number2.value;
     result2.innerText = `RESULT IS: ${num1/num2}`;
     number1.value = "";
     number2.value = "";
 })

 function remove(event) {
    let remove =  event.target;
    remove.remove();
}










