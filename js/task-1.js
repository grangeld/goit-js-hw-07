const listCategories = document.querySelectorAll('#categories .item');

listCategories.forEach(element => {
  console.log(
    `Категория: ${
      element.querySelector('h2').textContent
    }\nКоличество элементов: ${element.querySelectorAll('li').length}`,
  );
});
