var startBtn = document.getElementById('start');
var resetBtn = document.getElementById('reset');
var pauseBtn = document.getElementById('pause');

var h = document.getElementById('hour');
var m = document.getElementById('minute');
var s = document.getElementById('sec');

var interval;

startBtn.disabled = false;

startBtn.addEventListener('click', function () {
    var hoursInt = parseInt(h.value);
    var minutesInt = parseInt(m.value);
    var secondsInt = parseInt(s.value);

    if (hoursInt < 0 || minutesInt < 0 || secondsInt < 0) {
        alert("Please enter a positive integer");
    }
    else if (isNaN(hoursInt) || isNaN(minutesInt) || isNaN(secondsInt)) {
        alert("Please enter a number");
    }
    else if (minutesInt > 60 || secondsInt > 60) {
        alert("Please enter a number less than or equal to 60");
    }
    else {
        var totalSeconds = hoursInt * 60 * 60 + minutesInt * 60 + secondsInt;

        startTimer(totalSeconds);
        startBtn.innerText = 'Start';
        startBtn.disabled = true;
    }

})

reset.addEventListener('click', function() {
    h.value = '00';
    m.value = '00';
    s.value = '00';
    stopTimer();
    startBtn.innerText = 'Start';
    startBtn.disabled = false;

});

pauseBtn.addEventListener('click', function () {
    stopTimer();
    startBtn.innerText = 'Resume';
    startBtn.disabled = false;

})

function startTimer(totalSeconds) {
    interval = setInterval(function () {
        totalSeconds--;
        updateInputs(totalSeconds);
        if (totalSeconds <= 0) {
            interval = clearInterval(interval);
            document.getElementById('sound').play();
            alert("Timer is done!")
            startBtn.disabled = false;
        }
    }, 1000)
}

function updateInputs(totalSeconds) {
    let hours; 
    let minutes; 
    let seconds;

    hours = Math.floor(totalSeconds/ 60 / 60);

    minutes = Math.floor(totalSeconds / 60) % 60;
    
    seconds = totalSeconds % 60;

    h.value = hours;
    m.value = minutes;
    s.value = seconds;

    h.value = (h.value < 10) ? ('0' + h.value) : h.value;
    m.value = (m.value < 10) ? ('0' + m.value) : m.value;
    s.value = (s.value < 10) ? ('0' + s.value) : s.value;

}

function stopTimer() {
    interval = clearInterval(interval);
}

function leadingZeros(input) {
    if(!isNaN(input.value) && input.value.length === 1) {
      input.value = '0' + input.value;
    }
  }






