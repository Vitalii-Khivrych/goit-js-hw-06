const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const listRef = document.querySelector('ul#ingredients');
console.log(listRef);

const createStringForElement = [];

ingredients.map(ingredient => {
  const newItemRef = document.createElement('li');

  newItemRef.textContent = ingredient;
  newItemRef.classList.add('item');

  createStringForElement.push(newItemRef);
});

listRef.append(...createStringForElement);
