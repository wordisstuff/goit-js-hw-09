const body = document.querySelector('body');
const start = document.querySelector('[data-start]');
const stopInterval = document.querySelector('[data-stop]');

let intervalId = null;

start.addEventListener('click', (evnt) => {
    evnt.preventDefault();
    start.disabled = true;
    stopInterval.disabled = false;
    intervalId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor()
    }, 1000)
});

stopInterval.addEventListener('click', (evnt) => {
    evnt.preventDefault();
    start.disabled = false;
    stopInterval.disabled = true;
    clearInterval(intervalId);
})

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}