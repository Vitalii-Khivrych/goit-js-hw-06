const btnRef = document.querySelector('.change-color');
const spanRef = document.querySelector('.color');
const bodyRef = document.querySelector('body');

btnRef.addEventListener('click', onChangeColorButtonClick);

function onChangeColorButtonClick() {
  bodyRef.style.backgroundColor = getRandomHexColor();
  console.log(bodyRef.style.backgroundColor);
  spanRef.textContent = bodyRef.style.backgroundColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
