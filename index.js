// index.js

// Function expression called "divide"
function divide() {
  return 2000 / 100;
}

// Arrow function called "square"
const square = (num) => {
  return num * num;
};

// Arrow function called "add"
const add = (a, b) => {
  return a + b;
};

module.exports = {
  divide,
  square,
  add,
};
