document.getElementById('output').textContent=0;

let userInput='';
let runningTotal=0;
let operation=''; //necessary variable because 'total' function wouldn't know which case to use when equal button is selected

function currentNum(digit){
    userInput=userInput+digit;
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
    runningTotal+=Number(userInput);
    userInput='';
    outputResult(runningTotal);
}

function subNums(){
    if(runningTotal!==0){
        total();
    }
    operation='sub';
    runningTotal+=Number(userInput);
    userInput='';
    outputResult(runningTotal);
}

function multNums(){
    if(runningTotal!==0){
        total();
    }
    operation='mult';
    runningTotal+=Number(userInput);
    userInput='';
    outputResult(runningTotal); 
}

function divNums(){
    if(runningTotal!==0){
        total();
    }
    operation='div';
    runningTotal+=Number(userInput);
    userInput='';
    outputResult(runningTotal); 
}

function total(){
    switch(operation!==''){
        case operation==='add':
            runningTotal+=Number(userInput);
            break;
        case operation==='sub':
            runningTotal-=Number(userInput);
            break;
        case operation==='mult':
            runningTotal*=Number(userInput);
            break;
        case operation==='div':
            runningTotal/=Number(userInput);
            break;
    }
    userInput=0;
    outputResult(runningTotal);
}

function reset(){
    runningTotal=0;
    userInput='';
    operation='';
    outputResult(runningTotal);
}



