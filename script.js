let currentText = ""
let previousText = ""
const numArray = []
const operatorArray = ["+"]

const nums = document.querySelectorAll(".num");
nums.forEach(num => num.addEventListener("click",addNum))

const operators= document.querySelectorAll(".operator");
operators.forEach(operator => operator.addEventListener("click",addOperator))

const topLine = document.querySelector(".top-line");
const bottomLine = document.querySelector(".bottom-line")

const buttonClear = document.querySelector(".clear")
buttonClear.addEventListener("click",clear)

const buttonClearAll = document.querySelector(".clear-all")
buttonClearAll.addEventListener("click",clearAll)

function clear (e){
    currentText = "0"
    bottomLine.textContent=currentText
}

function clearAll (e){
    currentText= "0"
    bottomLine.textContent = currentText
    topLine.textContent = ""
    numArray.length = 0
    operatorArray.length = 0
    operatorArray.push("+")
}

function addNum(e){
    if (bottomLine.textContent=="0"){
        currentText=e.target.getAttribute("value");
    }else{
        currentText+=e.target.getAttribute("value");
    }
    bottomLine.textContent=currentText;
}

function addOperator (e){
    operator = e.target.getAttribute("value");

    if (operator != "="){
        console.log(operatorArray)
        if (operatorArray.includes("=")){
            previousText = bottomLine.textContent + operator;
            number= parseInt(bottomLine.textContent)
            numArray.length = 0
            operatorArray.length = 0
            operatorArray.push("+")
        }else{
            previousText = previousText+currentText + operator;
            number= parseInt(currentText);
        }
        numArray.push(number)
        operatorArray.push(operator)
        topLine.textContent=previousText;
        currentText="0";
        bottomLine.textContent=currentText;
    }else{
        number= parseInt(currentText);
        numArray.push(number)
        operatorArray.push(operator)
        previousText = previousText+currentText;
        topLine.textContent=previousText;
        let result = 0
        for (let i = 0; i<numArray.length;i++){
            switch (operatorArray[i]){
                case "+":
                    result += numArray[i];
                    break;
                case "-":
                    result -= numArray[i];
                    break;
                case "*":
                    result *= numArray[i];
                    break;
                case "/":
                    result /= numArray[i];
                    break;
            }
        }
        bottomLine.textContent = result;
    }
    
    
}