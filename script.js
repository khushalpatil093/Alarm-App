let timerInterval;
let Hours = document.getElementById('hours');
let Minutes = document.getElementById('minutes');
let Seconds = document.getElementById('seconds');

function TimerDisplay(hours, minutes, seconds) {
    const formatHours = hours.toString().padStart(2, '0');
    const formatMinutes = minutes.toString().padStart(2, '0');
    const formatSeconds = seconds.toString().padStart(2, '0');
    const display = `${formatHours}:${formatMinutes}:${formatSeconds}`;
    document.getElementById('timer').textContent = display;
}

function startTimer() {
    const hours = parseInt(Hours.value, 10);
    const minutes = parseInt(Minutes.value, 10);
    const seconds = parseInt(Seconds.value, 10);
    let totalSeconds = hours * 3600 + minutes * 60 + seconds;

    if(totalSeconds <= 0) {
        alert("Please enter a valid timer");
        return;
    }

    TimerDisplay(hours, minutes, seconds);

    timerInterval = setInterval(function() {
        totalSeconds--;

        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        TimerDisplay(hours, minutes, seconds);

        if(totalSeconds === 0) {
            stopTimer();
            alert("Timer has elapsed!");
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

document.getElementById('startBtn').addEventListener('click', startTimer);
document.getElementById('stopBtn').addEventListener('click', stopTimer);