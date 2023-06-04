let currentText = ""
let previousText = ""
let operator = ""

const nums = document.querySelectorAll(".num");
nums.forEach(num => num.addEventListener("click",addNum))

const operators= document.querySelectorAll(".operator");
operators.forEach(operator => operator.addEventListener("click",addOperator))

const topLine = document.querySelector(".top-line");
const bottomLine = document.querySelector(".bottom-line")

function addNum(e){
    currentText+=e.target.getAttribute("value");
    bottomLine.textContent=currentText;
}

function addOperator (e){
    operator = e.target.getAttribute("value");
    previousText = previousText+currentText + operator;
    currentText="";
    topLine.textContent=previousText;
    bottomLine.textContent=currentText;
}