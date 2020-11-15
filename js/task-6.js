function changInput() {
  addClass(input.value.length >= length ? true : false);
}
function addClass(passed) {
  if (passed) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
}
const input = document.querySelector('#validation-input');
const length = input.getAttribute('data-length');
input.addEventListener('blur', changInput);
