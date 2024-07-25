const GOLDEN_RATIO = 1.61803;
const LIGHT_SPEED = 299792458; // in meters per second

function sum(a, b) {
  return a + b;
}

function difference(a, b) {
  return a - b;
}

function product(a, b) {
  return a * b;
}

function quotient(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero.');
  }
  return a / b;
}

module.exports = {
  GOLDEN_RATIO,
  LIGHT_SPEED,
  sum,
  difference,
  product,
  quotient
};
