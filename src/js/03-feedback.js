let throttle = require('lodash.throttle');
const LOCALSTORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

form.addEventListener(
  'input',
  throttle(data => {
    let formField = {
      email: form.email.value,
      message: form.message.value,
    };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formField));
  })
);

const savedInput = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

if (savedInput !== null) {
  form.email.value = savedInput.email;
  form.message.value = savedInput.message;
}

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
  form.reset();
  localStorage.clear(LOCALSTORAGE_KEY);
});