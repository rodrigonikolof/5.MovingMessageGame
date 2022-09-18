const container = document.querySelector('.container');
const start = document.querySelector('.start');
const timer = document.querySelector('.timer');
let time = 0;


function moveDiv (){
    const popPosition = Math.random().toFixed(2)*1000;
    const popPosition2 = Math.random().toFixed(2)*500;
container.style.marginLeft = `${popPosition + 1}px`;
container.style.marginTop = `${popPosition2 +1}px`;
};

function startGame (){
    start.remove();
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

// container.addEventListener("mouseenter", moveDiv);
container.addEventListener("click", youWin);
start.addEventListener("click", startGame);