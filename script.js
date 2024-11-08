const dinozavrik = document.getElementById("dinozavrik");
const cactus = document.getElementById("cactus");
const jumpButton = document.getElementById("jump");
let jumping = false;
let position = 0;
let cactusPosition = 500;
let gameInterval;

function fall() {
    let downInterval = setInterval(() => {
        if (position <= 0) {
            clearInterval(downInterval);
            jumping = false;
        } else {
            position -= 5;
            dinozavrik.style.bottom = `${position}px`;
        }
    }, 20);
}

jumpButton.onclick = () => {
    function jump() {
        if (jumping) return;
        jumping = true;

        let upInterval = setInterval(() => {
            if (position >= 100) {
                clearInterval(upInterval);
                fall();
            } else {
                position += 5;
                dinozavrik.style.bottom = `${position}px`;
            }
        }, 20);
    }
    jump()
}

function moveCactus() {
    cactusPosition -= 5;
    cactus.style.left = `${cactusPosition}px`;

    if (cactusPosition <= -20) {
        cactusPosition = 500;
    } else if (cactusPosition > 0 && cactusPosition < 40 && position < 40) {
        endGame();
    }
}

function resetGame() {
    position = 0;
    cactusPosition = 500;
    jumping = false;
    dinozavrik.style.bottom = `${position}px`;
    cactus.style.left = `${cactusPosition}px`;
    start();
}

function endGame() {
    clearInterval(gameInterval);
    setTimeout(resetGame, 1000);
    alert('GAME OVER')
}

function start() {
    gameInterval = setInterval(moveCactus, 20);
}

start();
