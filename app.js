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
let result_total = "";
let checkPoint = "";
// add event listeners 'onlick'

function doNumber(numberArg) {
  if (input.innerHTML.length === 10) {
    return;
  }
  input.innerHTML = input.innerHTML + numberArg;
}

const numberButtons = document.getElementsByClassName("class-number");

for (i = 0; i < numberButtons.length; i++) {
  const numberElem = numberButtons[i];
  const number = numberElem.getAttribute("number-attr");

  numberElem.addEventListener("click", () => {
    doNumber(number);
    checkPoint = number;
    console.log("number = " + checkPoint);
  });
}

dot.addEventListener("click", () => {
  if (input.innerHTML.length === 10) {
    return;
  }
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

function doAction(actionArg) {
  if (input.innerHTML == "" && num1 == "") {
    console.log("fuckYou");
    return;
  }
  if (num1 !== "") {
    console.log("ghjf");
    action = actionArg;
    return;
  }
  if (result_total !== "") {
    num1 = result_total;
    action = actionArg;
    result_total = "";
    input.innerHTML = "";
    return;
  }
  num1 = input.innerHTML;
  action = actionArg;
  input.innerHTML = "";
}

function resultAction(resAction) {
  num1 = parseFloat(num1);
  num2 = parseFloat(input.innerHTML);
  switch (action) {
    case "+":
      result_total = num1 + num2;
      break;
    case "-":
      result_total = num1 - num2;
      break;
    case "*":
      result_total = num1 * num2;
      break;
    case "/":
      result_total = num1 / num2;
      break;
  }
  input.innerHTML = "";
  result_total = String(result_total);
  num1 = result_total;
  num2 = "";
  action = resAction;
}

const actionButtons = document.getElementsByClassName("class-actin");

for (i = 0; i < actionButtons.length; i++) {
  const actionElem = actionButtons[i];
  const action = actionElem.getAttribute("action-attr");

  actionElem.addEventListener("click", (e) => {
    if (num1 !== "" && input.innerHTML !== "" && action !== "") {
      resultAction(action);
      return;
    }
    doAction(action);
    checkPoint = action;
    console.log("action = " + checkPoint);
  });
}

result.addEventListener("click", () => {
  if (input.innerHTML == "") {
    return;
  }
  num1 = parseFloat(num1);
  num2 = parseFloat(input.innerHTML);
  switch (action) {
    case "+":
      result_total = num1 + num2;
      break;
    case "-":
      result_total = num1 - num2;
      break;
    case "*":
      result_total = num1 * num2;
      break;
    case "/":
      result_total = num1 / num2;
      break;
  }
  let exam = String(result_total);
  if (exam.length > 10) {
    result_total = result_total.toExponential(2);
  } else {
    input.innerHTML = result_total;
  }
  result_total = String(result_total);
  input.innerHTML = result_total;
  num1 = "";
  num2 = "";
  action = "";
  const resultButtons = document.getElementsByClassName("result");
  checkPoint = resultButtons.getAttribute("result-attr");;
  console.log("result = " + checkPoint);
});
