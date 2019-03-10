'use strict';

// Enter the date in the desired time zone
let deadline = '2019-03-11 07:30:00 GMT+0300';


function getTimeRemaining(endtime) {
    // Get the difference between the above date and the present moment
    let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/1000/60/60));

        // Add 0 if the number is less than 10
        if(minutes < 10) {
            minutes = '0' + minutes
        }
        if (seconds < 10) {
            seconds = '0' + seconds
        }
        if (hours < 10) {
            hours = '0' + hours
        }
    
    return {
        'total' : t,
        'seconds' : seconds,
        'minutes' : minutes,
        'hours' : hours
    }
};

function setClocks(id, endtime) {
    // Update time values every second
    let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);
    
    // If the date has passed, nothing will happen
    function updateClock() {
        let t = getTimeRemaining(endtime);
        if (t.total > 0) {
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;
        }
        

        if (t.total <= 0) {
            clearInterval(timeInterval);
        }
    }
};
// Substitute the timer id and the variable with the date
setClocks('timer', deadline);