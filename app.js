// define buttons/elements
const input = document.getElementById("input");
const result = document.getElementById("resultBtn");
const plus = document.getElementById("plusBtn");
const dot = document.getElementById("dotBtn");
const clear = document.getElementById("clearBtn");
const minus = document.getElementById("minusBtn");
const multiply = document.getElementById("multiplyBtn");
const divide = document.getElementById("divideBtn");
const del = document.getElementById("delBtn");

const button1 = document.getElementById("btn1");
const button2 = document.getElementById("btn2");
const button3 = document.getElementById("btn3");
const button4 = document.getElementById("btn4");
const button5 = document.getElementById("btn5");
const button6 = document.getElementById("btn6");
const button7 = document.getElementById("btn7");
const button8 = document.getElementById("btn8");
const button9 = document.getElementById("btn9");
const button0 = document.getElementById("btn0");

let num1 = "";
let num2 = "";
let action = "";
let result_total = Number;

// add event listeners 'onlick'

button1.addEventListener("click", () => {
  input.innerHTML = input.innerHTML + "1";
});
button2.addEventListener("click", () => {
  input.innerHTML = input.innerHTML + "2";
});
button3.addEventListener("click", () => {
  input.innerHTML = input.innerHTML + "3";
});
button4.addEventListener("click", () => {
  input.innerHTML = input.innerHTML + "4";
});
button5.addEventListener("click", () => {
  input.innerHTML = input.innerHTML + "5";
});
button6.addEventListener("click", () => {
  input.innerHTML = input.innerHTML + "6";
});
button7.addEventListener("click", () => {
  input.innerHTML = input.innerHTML + "7";
});
button8.addEventListener("click", () => {
  input.innerHTML = input.innerHTML + "8";
});
button9.addEventListener("click", () => {
  input.innerHTML = input.innerHTML + "9";
});
button0.addEventListener("click", () => {
  input.innerHTML = input.innerHTML + "0";
});
dot.addEventListener("click", () => {
  if (input.innerHTML === "") {
    input.innerHTML = "0.";
    return;
  }
  let ver = input.innerHTML.indexOf(".");
  if (ver !== -1) {
    return;
  }
  input.innerHTML = input.innerHTML + ".";
});
del.addEventListener("click", () => {
  input.innerHTML = input.innerHTML.slice(0, -1);
});
clear.addEventListener("click", () => {
  input.innerHTML = "";
  num1 = "";
  num2 = "";
  action = "";
  result_total = "";
});
plus.addEventListener("click", () => {
  if (input.innerHTML == "") {
    return;
  }
  if (num1 !== "") {
    action = "+";
    return;
  }
  num1 = input.innerHTML;
  action = "+";
  input.innerHTML = "";
});
minus.addEventListener("click", () => {
  if (input.innerHTML == "") {
    return;
  }
  if (num1 !== "") {
    action = "-";
    return;
  }
  num1 = input.innerHTML;
  action = "-";
  input.innerHTML = "";
});
multiply.addEventListener("click", () => {
  num1 = input.innerHTML;
  action = "*";
  input.innerHTML = "";
});
divide.addEventListener("click", () => {
  num1 = input.innerHTML;
  action = "/";
  input.innerHTML = "";
});
result.addEventListener("click", () => {
  if (input.innerHTML == "") {
    return;
  }
  num2 = input.innerHTML;
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  if (action === "+") {
    result_total = num1 + num2;
  } else if (action === "-") {
    result_total = num1 - num2;
  } else if (action === "*") {
    result_total = num1 * num2;
  } else if (action === "/") {
    result_total = num1 / num2;
  }
  input.innerHTML = result_total;
});
