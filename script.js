let minutes = 25;
let seconds = 0;
let minuteDisplay = document.querySelector("#minutes");
let secondsDisplay = document.querySelector("#seconds");
let startButton = document.querySelector("#start");
let pauseButton = document.querySelector("#pause");
let resetButton = document.querySelector("#reset");
let timer;

function counter() {
    if (seconds > 0) {
        seconds--;
    } else if (minutes > 0) {
        minutes--;
        seconds = 59;
    } else {
        clearInterval(timer);
    }
    displayTime();
}

function displayTime() {
    minuteDisplay.textContent = minutes.toString().padStart(2, 0);
    secondsDisplay.textContent = seconds.toString().padStart(2, 0);
}

function toggleButtons() {
    startButton.classList.toggle("disabled");
    pauseButton.classList.toggle("disabled");
    resetButton.classList.toggle("disabled");
}

startButton.addEventListener("click", () => {
    timer = setInterval(counter, 50);
    toggleButtons();
})

pauseButton.addEventListener("click", () => {
    clearInterval(timer);
    toggleButtons();
});

resetButton.addEventListener("click", () => {
    minutes = 25;
    seconds = 0;
    clearInterval(timer);
    displayTime();
    toggleButtons();
});