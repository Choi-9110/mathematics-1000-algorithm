const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function prompt(question) {
  return new Promise(resolve => rl.question(question, resolve));
}

async function main() {
  console.log("입력받는 두개의 정수의 뺄셈 을 진행한다. ");

  const A = parseInt(await prompt('A의 값 입력: '), 10);
  const B = parseInt(await prompt('B의 값 입력: '), 10);

  const sum = A - B;

  console.log(`A - B = ${sum}`);

  rl.close();
}

main();

