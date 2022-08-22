let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');
let result = document.querySelector('#result');
let pScore=document.querySelector('#pScore');
let aiScore=document.querySelector('#aiScore');
let reset = document.querySelector('#reset');

let uWins = 0;
let aiWins = 0;


function playGameRock(){
    function computerPlay(){
        var arr = ['rock', 'paper', 'scissor'];
        let result = arr[Math.floor(Math.random() * arr.length)];
        return result;
    }

    let aiChoice = computerPlay();

    console.log(aiChoice);

    let userChoice= 'rock';

    if (userChoice=='rock'){
        if(aiChoice=='paper'){
            aiWins+=1;
        } else if (aiChoice=='paper'){
            console.log('A tie');
        } else {
            uWins+=1;
        }
    }
    pScore.innerText=uWins;
    aiScore.innerText=aiWins;

    checkWins();
}

function playGamePaper(){
    function computerPlay(){
        var arr = ['rock', 'paper', 'scissor'];
        let result = arr[Math.floor(Math.random() * arr.length)];
        return result;
    }

    let aiChoice = computerPlay();

    console.log(aiChoice);

    let userChoice= 'paper';

    if (userChoice=='paper'){
        if(aiChoice=='paper'){
            console.log('A tie');
        } else if (aiChoice=='scissor'){
            aiWins+=1;
        } else {
            uWins+=1;
        }
    }

    pScore.innerText=uWins;
    aiScore.innerText=aiWins;

    checkWins();
}

function playGameScissor(){
    function computerPlay(){
        var arr = ['rock', 'paper', 'scissor'];
        let result = arr[Math.floor(Math.random() * arr.length)];
        return result;
    }

    let aiChoice = computerPlay();

    console.log(aiChoice);

    let userChoice= 'scissor';

    if (userChoice=='scissor'){
        if(aiChoice=='paper'){
            uWins+=1;
        } else if (aiChoice=='scissor'){
            console.log('A tie');
        } else {
            aiWins+=1;
        }
    }

    pScore.innerText=uWins;
    aiScore.innerText=aiWins;

    checkWins();
}

rock.addEventListener('click', ()=>playGameRock());
paper.addEventListener('click',()=>playGamePaper());
scissors.addEventListener('click',()=>playGameScissor());

function checkWins(){
    if(aiWins==7 || uWins==7){
    if(aiWins==7){
        result.innerText='CPU Wins';
        rock.disabled= true;
        paper.disabled=true;
        scissors.disabled=true;
    } else {
        result.innerText='You win';
        rock.disabled= true;
        paper.disabled=true;
        scissors.disabled=true;
    }
}
}

reset.addEventListener('click',()=>{
    rock.disabled= false;
    paper.disabled=false;
    scissors.disabled=false;
    pScore.innerText='';
    aiScore.innerText='';
    result.innerText='';
    aiWins=0;
    uWins=0;
})

pScore.addEventListener('oninput',()=>{
    pScore.classList.add('keydown');
})