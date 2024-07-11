let count = 0;
let counterInterval

let onStartClicked = function() {
    Cookies.set('state', 'started')
    document.getElementById('start-button').disabled = true;
    document.getElementById('pause-button').disabled = false;
    counterInterval = setInterval(function() {
        count--;
        Cookies.set('count', count)
        updateCounter(count)
    }, 1000)
}

let updateCounter = function(number) {
    hour = Math.floor(number / 3600);
    minute = Math.floor((number - hour * 3600) / 60);
    second = number - hour * 3600 - minute * 60;
    document.getElementById('counter').innerHTML = '0' + hour + ':' + minute + ':' + second;
}

let onPauseClicked = function() {
    document.getElementById('start-button').disabled = false;
    document.getElementById('pause-button').disabled = true;
    Cookies.set('state', 'paused')
    clearInterval(counterInterval);
}

let numberChange = function() {
    count = Number(document.getElementById("numberCounter").value);
    updateCounter(count);
}

let onLoadCounter = function() {
    count = 0;
    updateCounter(count);
}

let onResetClicked = function() {
    count = 0
    document.getElementById('start-button').disabled = false;
    document.getElementById('pause-button').disabled = true;
    onPauseClicked()
    Cookies.set('count', count)
    updateCounter(count)
}