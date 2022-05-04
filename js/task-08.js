let sentDataValues = {};

const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onSendingSubmit);

function onSendingSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  if (email === '' || password === '') {
    return alert('Усі поля повинні бути заповнені!');
  }
  sentDataValues = { email, password };
  console.log(sentDataValues);

  event.currentTarget.reset();
}
