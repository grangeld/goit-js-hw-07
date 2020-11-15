function createBoxes(amount) {
  const result = []; //Результат выполнения.
  const startWidth = 30; //стартовое значения
  const startHeigh = 30; //стартовое значения
  const boxes = document.querySelector('#boxes');
  const div = document.createElement('div');

  for (let i = 0; i < amount; i++) {
    result[i] = div.cloneNode(true);
    result[i].style.width = `${startWidth + i * 10}px`;
    result[i].style.height = `${startHeigh + i * 10}px`;
    result[i].style.backgroundColor = random_color();
  }

  boxes.append(...result);
}
//рандом цветов
function random_color() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  return 'rgb(' + x + ',' + y + ',' + z + ')';
}
//очистка кубиков
function destroyBoxes() {
  const boxes = document.querySelector('#boxes');
  boxes.innerHTML = '';
}

const renderBtn = document.querySelector(
  '#controls button[data-action="render"]',
);
const destroyBtn = document.querySelector(
  '#controls button[data-action="destroy"]',
);

renderBtn.addEventListener('click', () => {
  const input = document.querySelector('#controls input');
  createBoxes(input.value);
});

destroyBtn.addEventListener('click', destroyBoxes);
