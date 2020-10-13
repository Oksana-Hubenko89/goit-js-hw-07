// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output.
//Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const inputRef = {
  input: document.querySelector('#name-input'),
  span: document.querySelector('#name-output'),
};
inputRef.input.addEventListener('input', onInputChange);
function onInputChange(event) {
  if (event.currentTarget.value.length !== 0) {
    inputRef.span.textContent = event.currentTarget.value;
  } else {
    inputRef.span.textContent = 'незнакомец';
  }
  
}

