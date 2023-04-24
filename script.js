// scripts.js
console.log('Hello world!');
const form = document.querySelector('[data-form]');
const result = document.querySelector('[data-result]');
const alert = document.querySelector('[data-alert]');

const wholeNumberDivider = (event) => {
  try {
    event.preventDefault();
    const entries = new FormData(event.target);
    /**
     * @property {number} dividend
     * @property {number} divider
     */

    const { dividend, divider } = Object.fromEntries(entries);

    //if values are not numbers
    if (isNaN(dividend) || isNaN(divider)) {
      throw new Error('Input must be a number');
    }
    //if values are negative
    if (dividend < 0 || divider < 0) {
      throw new Error('Input must be a positive number');
    }
    //if there are missing input values
    if (!dividend || !divider) {
      throw new Error('Input must not be empty');
    }
    //if the result of the calculation is a decimal number
    if (!Number.isInteger(result)) {
      throw new Error('Result must be a whole number');
    }

    result.innerText = dividend / divider;
  } catch (err) {
    result.innerHTML = err.message;
  }
};

form.addEventListener('submit', wholeNumberDivider);
