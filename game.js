const bird = document.getElementById('bird');
const pipeContainer = document.getElementById('pipe-container');
const score = document.getElementById('score');
const startButton = document.getElementById('start-button');

let birdY = 0;
let gravity = 0.5;
let pipeSpeed = 2;
let scoreValue = 0;
let isGameOver = false;

function jump() {
    if (!isGameOver) {
        birdY -= 50;
    }
}

function movePipes() {
    const pipe = document.createElement('div');
    pipe.id = 'pipe';
    pipe.style.left = `${1000}px`;
    pipe.style.top = `${Math.random() * 300}px`;
    pipeContainer.appendChild(pipe);

    setInterval(() => {
        pipe.style.left = `${pipe.style.left.slice(0, -2) - pipeSpeed}px`;

        if (pipe.style.left.slice(0, -2) < -100) {
            pipe.remove();
            scoreValue++;
            score.textContent = scoreValue;
        }

        if (
            birdY < pipe.offsetTop + pipe.offsetHeight &&
            birdY + bird.offsetHeight > pipe.offsetTop &&
            bird.offsetLeft < pipe.offsetLeft + pipe.offsetWidth &&
            bird.offsetLeft + bird.offsetWidth > pipe.offsetLeft
        ) {
            isGameOver = true;
            startButton.textContent = 'Restart';
        }
    }, 10);
}

startButton.addEventListener('click', () => {
    if (startButton.textContent === 'Start') {
        startButton.textContent = 'Pause';
        isGame