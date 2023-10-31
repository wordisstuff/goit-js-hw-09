import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const btn = document.querySelector('[data-start]');
let days = document.querySelector('[data-days]');
let hours = document.querySelector('[data-hours]');
let minutes = document.querySelector('[data-minutes]');
let seconds = document.querySelector('[data-seconds]');


btn.disabled = true;
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] < new Date()) {
            Notiflix.Report.warning('Увага', 'Виберіть дату в майбутньому', 'оК');
        } else {
            btn.disabled = false;
            btn.addEventListener("click", (evnt) => {
                const intId = setInterval(() => {
                    let counter = selectedDates[0] - new Date();
                    counter - 1000;
                    if (counter < 1000) {
                        setTimeout(() => {
                            clearInterval(intId);
                            return Notiflix.Report.warning('Вибачте', 'Час вийшов', ':(');
                        }, 999);
                    };
                    counter = convertMs(counter);

                    days.textContent = addLeadingZero(counter.days);
                    hours.textContent = addLeadingZero(counter.hours);
                    minutes.textContent = addLeadingZero(counter.minutes);
                    seconds.textContent = addLeadingZero(counter.seconds);
                }, 1000);
            })
        };
    },
};


const myInput = document.querySelector("#datetime-picker")
flatpickr(myInput, options)
function addLeadingZero(value) {
    return value.toString().padStart(2, 0)
}
function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}