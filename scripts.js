const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const newIphone = "14 Sept 2022";

function countdown() {
    const newIphonedate = new Date(newIphone);
    const currentdate = new Date();

    const totalseconds = (newIphonedate - currentdate) / 1000;

    const days = Math.floor(totalseconds / 3600 / 24);
    const hours = Math.floor(totalseconds / 3600 % 24);
    const minutes = Math.floor(totalseconds / 60) % 60;
    const seconds = Math.floor(totalseconds % 60);

    console.log(days, hours, minutes);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;


}

//initial call
countdown();

setInterval(countdown, 1000);