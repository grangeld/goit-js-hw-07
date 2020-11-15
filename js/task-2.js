const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientList = document.querySelector('#ingredients');
const list = ingredients.map(el => {
  const li = document.createElement('li');
  li.textContent = el;
  return li;
});
ingredientList.append(...list);
