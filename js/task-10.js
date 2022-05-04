const inputRef = document.querySelector('input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const boxesRef = document.querySelector('#boxes');
let amount = 0;

btnCreate.addEventListener('click', onStartCreateBoxesCkick);
btnDestroy.addEventListener('click', destroyBoxes);

function onStartCreateBoxesCkick() {
  amount = inputRef.value;
  createBoxes(amount);
}

function createBoxes(amount) {
  const arrayDiv = [];
  let itemSize = 30;

  for (let i = 0; i < amount; i += 1) {
    const elementDiv = document.createElement('div');

    itemSize += 10;

    elementDiv.style.width = `${itemSize}px`;
    elementDiv.style.height = `${itemSize}px`;
    elementDiv.style.backgroundColor = getRandomHexColor();

    arrayDiv.push(elementDiv);
  }
  boxesRef.append(...arrayDiv);
  inputRef.value = 1;
}

function destroyBoxes() {
  boxesRef.innerHTML = `<div id='boxes'></div>`;

  // Другий спосіб очищення.
  // const destroyBoxesRef = boxesRef.querySelectorAll('div');
  // console.log(destroyBoxesRef);
  // destroyBoxesRef.forEach(el => el.remove());
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
