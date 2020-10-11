// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
let counterValue = 0;
const refs = {
  counterValueSpan: document.querySelector('#value'),
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
};

const increment = () => {
  counterValue += 1;

  refs.counterValueSpan.textContent = counterValue;
};
const decrement = () => {
  counterValue -= 1;

  refs.counterValueSpan.textContent = counterValue;
};
refs.decrementBtn.addEventListener('click', decrement);
refs.incrementBtn.addEventListener('click', increment);
