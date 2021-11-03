const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Whats your name? ', (answer1) => {
  rl.question('Whats an activity you like doing? ', (answer2) => {
    rl.question('What do you listen to while doing that? ', (answer3) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer4) => {
        rl.question('Whats your favourite thing to eat for that meal? ', (answer4) => {
          rl.question('Which sport is your absolute favourite? ', (answer5) => {
            rl.question('What is your superpower? ', (answer6) => {
              console.log(`Thank you for your valuable feedback: ${answer1}. \n ${answer1} likes to ${answer2} and likes to listen ${answer3} while ${answer2}. \n ${answer4} is ${answer1}'s favourite meal. \n ${answer1} loves to play ${answer5}. \n ${answer6} is the super power of ${answer1}'`);
              rl.close();
            });
          });
        });
      });
    });
  });
});
