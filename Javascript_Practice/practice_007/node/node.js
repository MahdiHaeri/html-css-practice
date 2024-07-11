const readline = require('node:readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

function main() {
    const choose = ['rock', 'scisser', 'paper']
    const computerChosse = choose[Math.floor(Math.random() * choose.length)];

    readline.question('Choose rock, scisser or paper: ', (userChoose) => {
        console.log(`Computer choose: ${computerChosse}`);
        if (userChoose === computerChosse) {
            console.log('Draw');
        } else if (userChoose === 'rock' && computerChosse === 'scisser' ||
            userChoose === 'scisser' && computerChosse === 'paper' ||
            userChoose === 'paper' && computerChosse === 'rock') {
            console.log('You win');
        } else {
            console.log('You lose');
        }
    });
}

main();