const firstName = 'John';
const age = 35;
const hobby = 'Coding';

const logTwice = (input) => {
  console.log(input);
  console.log(input);
};

const hobbyMessage = () => {
  logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`);
};

hobbyMessage();