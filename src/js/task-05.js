const inputEl = document.querySelector('#name-input');
const outnputEl = document.querySelector('#name-output');

//-----------2-variant---------
const onInput = (event) => {
outnputEl.textContent = 
event.currentTarget.value.trim() !== '' ?  
event.currentTarget.value : 'Anonymous'  
}

inputEl.addEventListener('input', onInput)