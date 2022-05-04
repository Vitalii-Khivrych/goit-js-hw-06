const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

textRef.style.fontSize = `${inputRef.value}px`;

inputRef.addEventListener('input', onChangeFont);

function onChangeFont(event) {
  console.log(`${event.currentTarget.value}px`);
  textRef.style.fontSize = `${event.currentTarget.value}px`;
}
