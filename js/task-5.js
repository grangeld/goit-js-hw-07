// // Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name - output.Если инпут пустой,
//     в спане должна отображаться строка 'незнакомец'.
function changInput() {
  h1Name.textContent = input.value ? input.value : 'незнакомец';
}

const input = document.querySelector('#name-input');
const h1Name = document.querySelector('#name-output');

input.addEventListener('keyup', changInput);
