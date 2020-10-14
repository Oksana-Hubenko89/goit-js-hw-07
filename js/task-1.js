// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента(тега h2) и количество элементов в
//категории(всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

'use strict';

//const totalCategories = document.querySelectorAll('.item');
//console.log(`В списке ${totalCategories.length} категории.`);

// const categoriesArray = [...totalCategories]
//   .map(
//     categories => `Категория: ${categories.children[0].textContent}
// Количество элементов: ${categories.children[1].children.length}`,
//   )
//   .join('\n');
// console.log(categoriesArray);

//const categories = document.querySelector('#categories').children;
//console.log(`В списке ${categories.length} категории.`);

// const firstCategories = document.querySelector('.item').children[0];

// const firstCategoriesNumberEl = document.querySelector('.item').children[1]
//   .children.length;
// console.log(`Категория: ${firstCategories.textContent}`);
// console.log(`Количество элементов: ${firstCategoriesNumberEl}`);

// const secondCategories = document.querySelector('#categories').children[1]
//   .firstElementChild.textContent;
// const secondCategoriesNumberEl = document.querySelector('#categories')
//   .children[1].lastElementChild.children.length;
// console.log(`Категория: ${secondCategories}`);
// console.log(`Количество элементов: ${secondCategoriesNumberEl}`);

// const thirdCategories = document.querySelector('#categories').children[2]
//   .firstElementChild.textContent;
// const thirdCategoriesNumberEl = document.querySelector('#categories')
//   .children[2].lastElementChild.children.length;
// console.log(`Категория: ${thirdCategories}`);
// console.log(`Количество элементов: ${thirdCategoriesNumberEl}`);
const categories = document.querySelectorAll('li.item');

console.log(`В списке ${categories.length} категории.`);
categories.forEach(element=>
  console.log(`Категория: ${element.children[0].textContent} 
  Количество элементов: ${element.children[1].children.length}`),
);