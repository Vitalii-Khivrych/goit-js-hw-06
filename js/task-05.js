const ref = {
  input: document.querySelector('#name-input'),
  userName: document.querySelector('#name-output'),
};

const onСhangeTrackingInput = ({ currentTarget }) =>
  currentTarget.value === ''
    ? (ref.userName.textContent = 'Anonymous')
    : (ref.userName.textContent = currentTarget.value);

ref.input.addEventListener('input', onСhangeTrackingInput);

// ref.input.addEventListener('input', onСhangeTrackingInput);

// function onСhangeTrackingInput({ currentTarget }) {
//   if (currentTarget.value === '') {
//     return (ref.userName.textContent = 'Anonymous');
//   }

//   ref.userName.textContent = currentTarget.value;
// }
