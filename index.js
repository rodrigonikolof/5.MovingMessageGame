const container = document.querySelector('.container');

const timer = document.querySelector('.timer');
const start = document.querySelectorAll('.difficultyButton');
const difficultySelectDiv = document.querySelector('.difficulty')
const hideGame = document.querySelector('.hide-game')
let time = 0;


function moveDiv (){
    const popPosition = Math.random().toFixed(2)*1000;
    const popPosition2 = Math.random().toFixed(2)*500;
container.style.marginLeft = `${popPosition + 1}px`;
container.style.marginTop = `${popPosition2 +1}px`;
};


function startGame (){
        setInterval(moveDiv, 800);
    setInterval(timeElapsed, 1000);
}


function youWin (){
    window.alert(`YOU WIN! It took you ${time} seconds.`);
    location.reload();
}


function timeElapsed (){
    time++;
    timer.innerText = time;
}

for (let i = 0; i < start.length; i++){
start[i].addEventListener('click', selectDifficulty);
}

function selectDifficulty (){
    hideGame.style.visibility = 'visible';
    startGame();
    difficultySelectDiv.remove();
}




// container.addEventListener("mouseenter", moveDiv);
// start.addEventListener("click", startGame);
container.addEventListener("click", youWin);
