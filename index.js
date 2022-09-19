const container = document.querySelector('.container');
const timer = document.querySelector('.timer');
const start = document.querySelectorAll('.difficultyButton');
const difficultySelectDiv = document.querySelector('.difficulty')
const hideGame = document.querySelector('.hide-game')
let time = 0;


// MOVES TARGET
function moveDiv (){
    const popPosition = Math.random().toFixed(2)*1000;
    const popPosition2 = Math.random().toFixed(2)*500;
container.style.marginLeft = `${popPosition + 1}px`;
container.style.marginTop = `${popPosition2 +1}px`;
};


const easy = document.querySelector('#easy');
const normal = document.querySelector('#normal');
const hard = document.querySelector('#hard');
const impossible = document.querySelector('#impossible');
easy.addEventListener('click', startGameEasy);
normal.addEventListener ('click', startGameNormal);
hard.addEventListener ('click', startGameHard);
impossible.addEventListener('click', startGameImpossible);

//STARTS GAME - obviously
function startGameEasy (){
        setInterval(moveDiv, 800);
        setInterval(timeElapsed, 1000);
        removeMenu();
}

function startGameNormal (){
        setInterval(moveDiv, 600);
        setInterval(timeElapsed, 1000);
        removeMenu();
}

function startGameHard (){
        setInterval(moveDiv, 500);
        setInterval(timeElapsed, 1000);
        removeMenu();
}

function startGameImpossible (){
        container.addEventListener("mouseenter", moveDiv);
        setInterval(timeElapsed, 1000);
        removeMenu();
    }



//MESSAGE WHEN TARGET IS HIT
function youWin (){
    window.alert(`YOU WIN! It took you ${time} seconds.`);
    location.reload();
}

//TIMER
function timeElapsed (){
    time++;
    timer.innerText = time;
}







function removeMenu (){
    hideGame.style.visibility = 'visible';
    difficultySelectDiv.remove();
}


container.addEventListener("click", youWin);
