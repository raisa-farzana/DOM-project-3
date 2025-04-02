let timeLeft;

const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('start-Btn');
const stopBtn = document.getElementById('stop-Btn');

const startTimer = (duration) => {
    let timer = duration;

    const timerInterval = setInterval(() => {
        const minutes = parseInt(timer / 60, 10);
        const seconds = parseInt(timer % 60, 10);

        timerDisplay.textContent = minutes + ':' + seconds;

        if (--timer < 0) {
            clearInterval(timerInterval);
            timerDisplay.textContent = 'Breath Out';

            setTimeout(() => {
                timerDisplay.textContent = 'Breath In';
                startTimer(timeLeft);
            }, 3000)
        }

    }, 1000);
}


startBtn.addEventListener('click',() => {
    timeLeft = 90;
    startTimer(timeLeft);
    
});

stopBtn.addEventListener('click', () => {
    
    
});