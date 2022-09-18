const container = document.querySelector('.container');
const start = document.querySelector('.start');
// const haveSomeHelp = setTimeout(1000, moveDiv);


function moveDiv (){
    const popPosition = Math.random().toFixed(2)*1000;
    const popPosition2 = Math.random().toFixed(2)*500;
container.style.marginLeft = `${popPosition + 1}px`;
container.style.marginTop = `${popPosition2 +1}px`;

};

function startGame (){
    start.remove();
    setInterval(moveDiv, 800);
}

function youWin (){
    window.alert("YOU WIN!");
    location.reload();
}


// container.addEventListener("mouseenter", moveDiv);
container.addEventListener("click", youWin);
start.addEventListener("click", startGame);