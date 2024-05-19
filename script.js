let minutes = 10;
let seconds = 0;
let minuteDisplay = document.querySelector("#minutes")
let secondsDisplay = document.querySelector("#seconds")
let startButton = document.querySelector("#start");

function counter() {
    if (seconds > 0) {
        seconds--;
    } else if (minutes > 0) {
        minutes--;
        seconds = 59;
    } else {
        clearInterval(timer);
    }
    minuteDisplay.textContent = minutes.toString().padStart(2,0);
    secondsDisplay.textContent = seconds.toString().padStart(2,0);
}


startButton.addEventListener("click", () => {
    setInterval(counter, 50);
})