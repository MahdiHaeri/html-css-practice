let count = 0;
let counterInterval

let onStartClicked = function() {
    Cookies.set('state', 'started')
    document.getElementById('start-button').disabled = true;
    document.getElementById('pause-button').disabled = false;
    counterInterval = setInterval(function() {
        count++;
        Cookies.set('count', count)
        document.getElementById('counter').innerHTML = count;

    }, 1000)
}

let onPauseClicked = function() {
    document.getElementById('start-button').disabled = false;
    document.getElementById('pause-button').disabled = true;
    Cookies.set('state', 'paused')
    clearInterval(counterInterval);
}

let onLoadCounter = function() {
    count = Number(Cookies.get('count'))
    document.getElementById('counter').innerHTML = count;
    let previousState = Cookies.get('state')
    if (previousState === 'started') {
        onStartClicked()
    } else {
        onPauseClicked()
    }
}

let onResetClicked = function() {
    count = 0
    document.getElementById('counter').innerHTML = count;
    Cookies.set('count', count)
}