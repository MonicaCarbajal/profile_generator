const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  console.log(`Nice to meet you! This was your answer: ${answer}`);

  rl.question("What's an activity you like doing? ", (activityAnswer) => {
    console.log(`Thanks for sharing! Your asnswer is: ${activityAnswer}`);

    rl.question('What do you listen to while doing that? ', (musicAnswer) => {
      console.log(`Thanks for letting us know! Your answer was: ${musicAnswer}`);

      rl.question('How often do you cookWhich meal is your favourite (eg: dinner, brunch, etc.) ', (mealAnswer) => {
        console.log(`Thanks for your feedback! This was your answer: ${mealAnswer}`);

        rl.question("What's your favourite thing to eat for that meal? ", (thingToDoAnswer) => {
          console.log(`Way to go! Your favourite thing to do is: ${thingToDoAnswer}`);

          rl.question('Which sport is your absolute favourite? ', (sportAnswer) => {
            console.log(`I like that! Your answer was: ${sportAnswer}`);
  
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (superpowerAnswer) => {
              console.log(`I loved to hear that! Your answer was: ${superpowerAnswer}`);

              rl.close();
            });
          });
        });
      });
    });
  });
});