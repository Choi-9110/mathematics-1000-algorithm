const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function prompt(question) {
  return new Promise(resolve => rl.question(question, resolve));
}

async function main() {
  console.log("두 자연수 A와 B가 주어진다. 이때, A+B, A-B, A*B, A/B(몫), A%B(나머지)를 출력");

  const A = parseInt(await prompt('A의 값 입력: '), 10);
  const B = parseInt(await prompt('B의 값 입력: '), 10);

  const sum = A / B;

   
   // 소수점 자르기  .toFixed(2) 
   // 소수점 2자리까지 노출 이후 나머지는 자른다. 

   // 전체 자릿수에서 자른다 
   // toPrecision(2)    123.456 ==>  1.2e+2
   console.log(`A + B = ${sum.toFixed(9)}`);
   console.log(`A - B = ${sum.toFixed(9)}`);
   console.log(`A * B = ${sum.toFixed(9)}`);
   console.log(`A / B = ${sum.toFixed(9)}`);
   console.log(`A % B = ${sum.toFixed(9)}`);

  rl.close();
}

main();

