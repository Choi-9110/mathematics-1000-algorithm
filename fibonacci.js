const dp = [0, 1, 1];

for (let i = 3; i < 41; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let T;
let inputs = [];

rl.question('Enter the number of test cases (T): ', (answer) => {
    T = parseInt(answer);

    rl.on('line', (input) => {
        inputs.push(parseInt(input));

        if (inputs.length === T) {
            processInputs();
            rl.close();
        }
    });
});

function processInputs() {
    for (let i = 0; i < T; i++) {
        const N = inputs[i];
        if (N === 0) console.log('1 0');
        else if (N === 1) console.log('0 1');
        else console.log(`${dp[N - 1]} ${dp[N]}`);
    }
}