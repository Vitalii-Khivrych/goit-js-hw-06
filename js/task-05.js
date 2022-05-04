const inputNameRef = document.querySelector('#name-input');
const outputNameRef = document.querySelector('#name-output');

const onСhangeTrackingInput = ({ currentTarget: { value } }) =>
  value === '' ? (outputNameRef.textContent = 'Anonymous') : (outputNameRef.textContent = value);

inputNameRef.addEventListener('input', onСhangeTrackingInput);

// ref.input.addEventListener('input', onСhangeTrackingInput);

// function onСhangeTrackingInput({ currentTarget }) {
//   if (currentTarget.value === '') {
//     return (ref.userName.textContent = 'Anonymous');
//   }

//   ref.userName.textContent = currentTarget.value;
// }
