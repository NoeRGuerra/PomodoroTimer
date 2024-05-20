let minutes = 10;
let seconds = 0;
let minuteDisplay = document.querySelector("#minutes");
let secondsDisplay = document.querySelector("#seconds");
let startButton = document.querySelector("#start");
let stopButton = document.querySelector("#stop");
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
    minuteDisplay.textContent = minutes.toString().padStart(2, 0);
    secondsDisplay.textContent = seconds.toString().padStart(2, 0);
}

startButton.addEventListener("click", () => {
    timer = setInterval(counter, 50);
    startButton.classList.add("disabled");
    stopButton.classList.remove("disabled");
    resetButton.classList.remove("disabled");
})

stopButton.addEventListener("click", () => {
    clearInterval(timer);
    stopButton.classList.add("disabled");
    startButton.classList.remove("disabled");
});

resetButton.addEventListener("click", () => {
    minutes = 25;
    seconds = 0;
    minuteDisplay.textContent = minutes.toString().padStart(2, 0);
    secondsDisplay.textContent = seconds.toString().padStart(2, 0);
})