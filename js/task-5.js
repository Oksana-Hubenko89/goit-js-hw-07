// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output.
//Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const inputRef = {
  input: document.querySelector('#name-input'),
  span: document.querySelector('#name-output'),
};

function onInputChange(event) {
  console.log('input');
  inputRef.span.textContent = event.currentTarget.value;
}
inputRef.input.addEventListener('input', onInputChange);
