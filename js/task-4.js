const value = document.querySelector('#value');
function increment() {
  value.textContent++;
}

function decrement() {
  value.textContent--;
}

const incrementBtn = document.querySelector(
  '#counter button[data-action="increment"]',
);

const decrementBtn = document.querySelector(
  '#counter button[data-action="decrement"]',
);

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);
