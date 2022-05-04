let counterValue = 0;

const ref = {
  decrement: document.querySelector('button[data-action="decrement"]'),
  increment: document.querySelector('button[data-action="increment"]'),
  getValue: document.querySelector('#value'),
};

ref.decrement.addEventListener('click', onDecrementButtonClick);
ref.increment.addEventListener('click', onIncrementButtonClick);

function onDecrementButtonClick() {
  counterValue -= 1;
  changeCounterValue();
  console.log(counterValue);
}
function onIncrementButtonClick() {
  counterValue += 1;
  changeCounterValue();
  console.log(counterValue);
}
function changeCounterValue() {
  ref.getValue.textContent = counterValue;
}
