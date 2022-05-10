const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onChangeColorValidation);

function onChangeColorValidation({ currentTarget: { value } }) {
  if (+inputRef.getAttribute('data-length') === +value.length) {
    // if (+inputRef.dataset.length == value.length)
    inputRef.classList.remove('invalid');
    return inputRef.classList.add('valid');
  }
  inputRef.classList.remove('valid');
  return inputRef.classList.add('invalid');
}

// function onChangseColorValidation({ currentTarget: { value } }) {
//   if (+inputRef.getAttribute('data-length') === +value.length) {
//     if (inputRef.classList.contains('invalid')) {
//       inputRef.classList.remove('invalid');
//     }
//     return inputRef.classList.add('valid');
//   }
//   inputRef.classList.remove('valid');
//   return inputRef.classList.add('invalid');
// }
