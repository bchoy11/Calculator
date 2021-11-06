document.getElementById('output').textContent=0;

let userInput=0;
let runningTotal=0;
let operation='';

function currentNum(digit){
    userInput=userInput*10+digit;
    outputResult(userInput);
}

function outputResult(result){
    document.getElementById('output').textContent=result;
}

function addNums(){
    operation='add';
    runningTotal+=userInput;
    userInput=0;
    outputResult(runningTotal);
}

function subNums(){
    operation='sub';
    runningTotal+=userInput;
    userInput=0;
    outputResult(runningTotal);
}

function multNums(){
    operation='mult';
    runningTotal+=userInput;
    userInput=0;
    outputResult(runningTotal); 
}

function divNums(){
    operation='div';
    runningTotal+=userInput;
    userInput=0;
    outputResult(runningTotal); 
}

function total(){
    switch(operation!==''){
        case operation==='add':
            runningTotal+=userInput;
            break;
        case operation==='sub':
            runningTotal-=userInput;
            break;
        case operation==='mult':
            runningTotal*=userInput;
            break;
        case operation==='div':
            runningTotal/=userInput;
            break;
    }
    userInput=0;
    outputResult(runningTotal);
}

function reset(){
    runningTotal=0;
    userInput=0;
    outputResult(runningTotal);
}


