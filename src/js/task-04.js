const counterValue = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
    this.value -=1;
    },
}

const decrBtnEl = document.querySelector('.button_decrement');
const incrBtnEl = document.querySelector('.button_increment');
const valueEl = document.querySelector('#value');


decrBtnEl.addEventListener('click', () => {
    //console.log('- 1 v carmu');
    counterValue.decrement();
    valueEl.textContent = counterValue.value;
});

incrBtnEl.addEventListener('click', () => {
counterValue.increment();
valueEl.textContent = counterValue.value;    
})