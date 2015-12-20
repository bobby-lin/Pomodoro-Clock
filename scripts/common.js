/**
 * Created on: 17/12/15
 *     Author: Bobby Lin
 */

function setToFiftyMins() {
    clearInterval(timer);
    $("#defaultTime").html("50:00");
}

function setToTwentyFiveMins() {
    clearInterval(timer);
    $("#defaultTime").html("25:00");
}

function setToShortBreak() {
    clearInterval(timer);
    $("#defaultTime").html("05:00");
}

function setToLongBreak() {
    clearInterval(timer);
    $("#defaultTime").html("10:00");
}

var timer;

function reset() {
    clearInterval(timer);
    $("#defaultTime").html("25:00");
    console.log("reset to default");
}

function startCountdown() {
    var e = document.getElementById("defaultTime");
    timer = setInterval(decrement, 1);
    
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

        e.innerHTML = getMinString(min) + ":" + getSecString(sec);
        console.log("Min is " + getMinString(min) + ", Sec is " + getSecString(sec));
    }
}

function getMinString(min) {
    var minStr = "";
    if(min < 10) {
        minStr = "0" + min;
    } 
    else {
        minStr = min;
    }
    return minStr;
}

function getSecString(sec) {
    var secStr = "";
    if(sec < 10) {
        secStr = "0" + sec;
    } 
    else {
        secStr = sec;
    }
    return secStr;
}
