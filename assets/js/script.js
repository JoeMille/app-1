// script.js

let timer;
let timerDuration;

function startTimer(minutes) {
    if (timer) {
        clearInterval(timer);
    }

    timerDuration = minutes * 60;
    updateTimerDisplay();

    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    if (timerDuration <= 0) {
        clearInterval(timer);
        alert("Meditation timer is complete!");
        return;
    }

    timerDuration--;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const minutesDisplay = document.getElementById("minutes");
    const secondsDisplay = document.getElementById("seconds");

    const minutes = Math.floor(timerDuration / 60).toString().padStart(2, "0");
    const seconds = (timerDuration % 60).toString().padStart(2, "0");

    minutesDisplay.textContent = minutes;
    secondsDisplay.textContent = seconds;
}

function stopTimer() {
    clearInterval(timer);
    updateTimerDisplay();
}
