const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt the user for input
rl.question('Enter the value of A: ', (aInput) => {
  
    rl.question('Enter the value of B: ', (bInput) => {
    // Parse the input strings to integers
    const A = parseInt(aInput);
    const B = parseInt(bInput);

    // Calculate the sum
    const sum = A + B;

    // Print the result
    console.log(`A + B = ${sum}`);

    // Close the readline interface
    rl.close();
  });
});