// // Напиши скрипт, который реагирует на изменение значения input#font-size-control
// (событие input) и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

function changSize() {
  text.style.fontSize = `${input.value}px`;
}

const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
changSize(); //////Этот код не обязателен. но он добавляет сразу стартовое значение тексту

input.addEventListener('input', changSize);
