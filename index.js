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
    if(runningTotal!==0){
        total();
    }
    operation='add';
    runningTotal+=userInput;
    userInput=0;
    outputResult(runningTotal);
    console.log('runningTotal: '+runningTotal);
}

function subNums(){
    if(runningTotal!==0){
        total();
    }
    operation='sub';
    runningTotal+=userInput;
    userInput=0;
    outputResult(runningTotal);
    console.log('runningTotal: '+runningTotal);
}

function multNums(){
    if(runningTotal!==0){
        total();
    }
    operation='mult';
    runningTotal+=userInput;
    userInput=0;
    outputResult(runningTotal); 
    console.log('runningTotal: '+runningTotal);
}

function divNums(){
    if(runningTotal!==0){
        total();
    }
    operation='div';
    runningTotal+=userInput;
    userInput=0;
    outputResult(runningTotal); 
    console.log('runningTotal: '+runningTotal);
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
    operation='';
    outputResult(runningTotal);
}


