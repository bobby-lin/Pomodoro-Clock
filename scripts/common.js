/**
 * Created on: 17/12/15
 *     Author: Bobby Lin
 */

function setToFiftyMins() {
    refreshTimer();
    $("#defaultTime").html("50:00");
}

function setToTwentyFiveMins() {
    refreshTimer();
    $("#defaultTime").html("25:00");
}

function setToShortBreak() {
    refreshTimer();
    $("#defaultTime").html("05:00");
}

function setToLongBreak() {
    refreshTimer();
    $("#defaultTime").html("10:00");
}

var timer = -1;

function refreshTimer() {
    clearInterval(timer);
    timer = -1;
}

function startTimer() {
    if(timer === -1) {
        startCountdown();
    }
    console.log("started " + timer);
}

function pauseTimer() {
    refreshTimer();
    console.log("paused");
}

function reset() {
    refreshTimer();
    $("#defaultTime").html("25:00");
    console.log("reset to default");
}

function startCountdown() {
    var e = document.getElementById("defaultTime");
    timer = setInterval(decrement, 1000);
    
    function decrement() {
        var arr =  e.innerHTML.split(":");
        var min = parseInt(arr[0]);
        var sec = parseInt(arr[1]);
        
        if(min > 0) {
            if(sec === 0) {
                min--;
                sec = 59;
            }
            else {
                sec--;
            }
        }
        else {
            if(sec === 0) {
                console.log("time is up");
                clearInterval(timer);
                return;
            }
            else {
                sec--;
            }
        }
        e.innerHTML = getTimeString(min) + ":" + getTimeString(sec);
    }
}

function getTimeString(n) {
    var timeStr = "";
    if(n < 10) {
        timeStr = "0" + n;
    } 
    else {
        timeStr = n;
    }
    return timeStr;
}
