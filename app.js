// define buttons/elements
const input = document.getElementById("input");
const result = document.getElementById("resultBtn");
const dot = document.getElementById("dotBtn");
const clear = document.getElementById("clearBtn");
const del = document.getElementById("delBtn");

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
    if (checkPoint == "=") {
      input.innerHTML = "";
      result_total = "";
    }
    doNumber(number);
    checkPoint = number;
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
  checkPoint = "";
});

function doAction(actionArg) {
  if (input.innerHTML == "" && num1 == "") {
    return;
  }
  if (num1 !== "") {
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
  checkPoint = "=";
});
