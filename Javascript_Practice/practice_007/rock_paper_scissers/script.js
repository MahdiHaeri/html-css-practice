let userChoose = '';
let computerChoose = '';

function updateUserChoose(choose) {
    userChoose = choose;
    document.getElementById('user-choose').innerText = 'User: ' +  userChoose;
}

function updateComputerChoose() {
    let randomChoose = Math.random()
    if (randomChoose < 0.34) {
        computerChoose = 'rock';
    } else if(randomChoose <= 0.67) {
        computerChoose = 'paper';
    } else {
        computerChoose = 'scissers';
    }
    document.getElementById('computer-choose').innerText = 'Computer: ' +  computerChoose;
    updateResult();
}

function applyWinStyle() {
    document.getElementById('result').innerHTML = 'You win!';
    document.getElementById('result').style.color = 'green';
    document.getElementById('result-container').style.borderColor = 'green';
    document.getElementById('main-container').style.backgroundColor = 'lightgreen';
}

function applyLoseStyle() {
    document.getElementById('result').innerHTML = 'You lose!';
    document.getElementById('result').style.color = 'red';
    document.getElementById('result-container').style.borderColor = 'red';
    document.getElementById('main-container').style.backgroundColor =  'lightcoral';
}

function applyTieStyle() {
    document.getElementById('result').innerHTML = 'Tie!';
    document.getElementById('result').style.color = 'black';
    document.getElementById('result-container').style.borderColor = 'black';
    document.getElementById('main-container').style.backgroundColor = 'lightgray';
}

function updateResult() {
    let result = '';
    if (userChoose === computerChoose) {
        result = 'Tie!';
    } else if (userChoose === 'rock') {
        result = (computerChoose === 'scissers') ? 'You win!' : 'You lose!';
    } else if (userChoose === 'paper') {
        result = (computerChoose === 'rock') ? 'You win!' : 'You lose!';
    } else if (userChoose === 'scissers') {
        result = (computerChoose === 'paper') ? 'You win!' : 'You lose!';
    }

    if (result === 'You win!') {
        applyWinStyle();
    } else if (result === 'You lose!') {
        applyLoseStyle();
    } else {
        applyTieStyle();
    }
}

function onRockButtonClicked() {
    updateUserChoose('rock');
    updateComputerChoose();
}

function onScissersButtonClicked() {
    updateUserChoose('scissers');
    updateComputerChoose();
}

function onPaperButtonClicked() {
    updateUserChoose('paper');
    updateComputerChoose();
}