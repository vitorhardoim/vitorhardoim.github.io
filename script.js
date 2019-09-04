let curOprTxt = ""
let preOprTxt = ""
let preNum = ""
let curNum = ""
let curOp = ""
let insertNewNumber = false

function numberWithPoints(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function digit(num){
    if(insertNewNumber == true){
        cleanCur()
        insertNewNumber = false;
    }
    if(curOprTxt.length < 15){
        if(!(String(curOprTxt.length) <= 1 && num == 0)){
            let currentOperand = document.getElementById('cur')
            curOprTxt += num
            curNum = Number(curOprTxt)
            currentOperand.innerHTML = numberWithPoints(curOprTxt)   
        } 
    }
}

function cleanCur(){
    let currentOperand = document.getElementById('cur')
    currentOperand.innerHTML = 0
    curOprTxt = ""
}

function clean(){
    cleanCur()
    let previousOperand = document.getElementById('pre')
    previousOperand.innerHTML = ""
}

function op(operation){
    let previousOperand = document.getElementById('pre')
    if(operation == "÷"){
        curOp = operation
        preNum = curOprTxt
        preOprTxt = curOprTxt + " " + curOp
        insertNewNumber = true
    }
    previousOperand.innerHTML = preOprTxt
}

function equal(fromButton){
    if(fromButton == true){
        let previousOperand = document.getElementById('pre')
        previousOperand.innerHTML = ""
    }
    let currentOperand = document.getElementById('cur')
    curOprTxt = Number(preNum) / Number(curNum)
    preNum = Number(curOprTxt)
    currentOperand.innerHTML = curOprTxt
}