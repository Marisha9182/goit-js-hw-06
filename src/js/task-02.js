const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsContainerEl = document.querySelector('#ingredients')
const ingredientsEl = [];

ingredients.forEach(ingredient => {
  const nameEl = document.createElement('li');
  nameEl.textContent = ingredient;
  nameEl.classList.add('item');

  ingredientsEl.push(nameEl);
})

ingredientsContainerEl.append(...ingredientsEl);
console.log(ingredientsContainerEl);