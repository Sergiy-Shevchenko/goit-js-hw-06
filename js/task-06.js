const input = document.
querySelector('input[data-length="6"]');
console.log(input.dataset.length);
console.dir(input);


input.addEventListener('blur', onInputBlur);
    
function onInputBlur(event) {
    if (event.currentTarget.value.length == 
    input.dataset.length) {input.classList.add('valid');
    input.classList.remove('invalid');

} else {input.classList.add('invalid');
input.classList.remove('valid');
}  
}