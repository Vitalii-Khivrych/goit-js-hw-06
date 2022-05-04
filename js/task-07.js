const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

inputRef.addEventListener('input', onChangeFont);

function onChangeFont(event) {
  // console.log(`${event.currentTarget.value}px`);
  textRef.style.fontSize = `${event.currentTarget.value}px`;
}
