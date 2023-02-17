const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');
//console.log(ingredientsEl);



const elements = ingredients.map(option => {
const liItemEl = document.createElement('li');
liItemEl.classList.add('item');
liItemEl.textContent = option;

return liItemEl;
})

console.log(elements);

ingredientsEl.append(...elements);

