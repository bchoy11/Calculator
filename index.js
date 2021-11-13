document.getElementById('output').textContent=0;

let userInput='';
let runningTotal=0;
let operation=''; //necessary variable because 'total' function wouldn't know which case to use when equal button is selected

window.onload=function(){
    let currentTheme = '1';
    const selectTheme=document.getElementById('select-theme');

    selectTheme.addEventListener('change',function(){
       console.log('current: '+currentTheme);
       const newTheme = valToTheme(document.querySelector("input[name='theme']:checked").value); 
       
       setTheme(currentTheme, newTheme);
       console.log('new: '+newTheme);
    });

    function setTheme(oldTheme, newTheme){
        const body = document.getElementsByTagName('body')[0];
        body.classList.remove(oldTheme);
        body.classList.add(newTheme);
        currentTheme = newTheme;
    }

    function valToTheme(value){
        if(value==='1'){
            return 'first-theme';
        }
        if(value==='2'){
            return 'second-theme';
        }
        else{
            return 'third-theme';
        }
    }

}

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



