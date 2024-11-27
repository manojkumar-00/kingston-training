const timeArea = document.getElementById("time-area");
const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const resetBtn = document.getElementById("reset-btn");

let seconds = 0;
let intervalId;

function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
}


startBtn.addEventListener("click", () => {
    if (!intervalId) {
        intervalId = setInterval(() => {
            seconds++;
            timeArea.textContent = formatTime(seconds);
        }, 1000);
    }
});

pauseBtn.addEventListener("click", () => {
    clearInterval(intervalId);
});

resetBtn.addEventListener("click", () => {
    clearInterval(intervalId);
    seconds = 0;
    timeArea.textContent = formatTime(seconds);
});