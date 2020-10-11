// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный
// li, после чего вставит все li за одну операцию в список ul.ingredients.Для создания
// DOM - узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listEl = ingredients.map(name => {
  const listingredients = document.createElement('li');
  listingredients.textContent = name;
  return listingredients;
});
//console.log(listEl);
const listRef = document.querySelector('#ingredients');
listRef.append(...listEl);

// const firstlistEl = document.createElement('li');
// firstlistEl.textContent = 'Картошка';
// const secondlistEl = firstlistEl.cloneNode(true);
// secondlistEl.textContent = 'Грибы';
// console.log(firstlistEl, secondlistEl);
