const firstName = 'John';
const age = 35;
const hobby = 'Coding';

const logTwice = (input) => {
    console.log(input);
};
 
const hobbyMessage = () => {
  for (let i = 0; i < 100; i++) {
    logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`);
  }
};

hobbyMessage();