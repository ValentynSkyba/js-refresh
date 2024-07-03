import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  input: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
  datetimePicker: document.querySelector('#datetime-picker'),
};
console.log(refs.startBtn);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    if (selectedDates[0] < options.defaultDate) {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
      });
    } else {
      refs.startBtn.disabled = false;
    }
    console.log(selectedDates[0]);
    userSelectedDate = selectedDates[0];
  },
};

flatpickr('#datetime-picker', options);

let userSelectedDate = null;
let time = null;
refs.startBtn.disabled = true;

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

refs.startBtn.addEventListener('click', onButtonClick);

function onButtonClick() {
  refs.datetimePicker.disabled = true;
  refs.startBtn.disabled = true;

  time = setInterval(() => {
    const dataTime = userSelectedDate - Date.now();

    if (dataTime <= 0) {
      clearInterval(time);
      refs.datetimePicker.disabled = false;
      return;
    }
    updateTimerFace(dataTime);
  }, 1000);
}

function updateTimerFace(time) {
  const updateTime = convertMs(time);
  refs.days.textContent = addZero(updateTime.days);
  refs.hours.textContent = addZero(updateTime.hours);
  refs.minutes.textContent = addZero(updateTime.minutes);
  refs.seconds.textContent = addZero(updateTime.seconds);
}

function addZero(value) {
  return String(value).padStart(2, '0');
}

iziToast.settings({
  timeout: 10000,
  resetOnHover: true,
  backgroundColor: '#EF4040',
  progressBarColor: '#B51B1B',

  messageColor: '#fff',
  messageSize: '16px',
  messageLineHeight: '1.5',

  iconUrl: icon,

  title: 'Error',
  titleColor: '#fff',
  titleSize: '16px',
  titleLineHeight: '1.5',
});
