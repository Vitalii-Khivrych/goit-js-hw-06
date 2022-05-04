const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onChangeColorValidation);

function onChangeColorValidation({ currentTarget }) {
  if (+inputRef.getAttribute('data-length') === +currentTarget.value.length) {
    if (inputRef.classList.contains('invalid')) {
      inputRef.classList.remove('invalid');
    }
    return inputRef.classList.add('valid');
  }
  return inputRef.classList.add('invalid');
}
