import {
  addDataToLocalStorage,
  removeFromLocalStorage,
  getDataToLocalStorage,
} from './localStorage-API';

const refs = {
  form: document.querySelector('.feedback-form'),
};
const LS_KEY = 'UserKey';

refs.form.addEventListener('input', onInput);

function onInput(e) {
  const email = e.currentTarget.elements.email.value;
  const message = e.currentTarget.elements.message.value;
  const userData = {
    email,
    message,
  };
  addDataToLocalStorage(LS_KEY, userData);
}

function render() {
  const data = getDataToLocalStorage(LS_KEY);
  refs.form.elements.email.value = data?.email || '';
  refs.form.elements.message.value = data?.message || '';
}

render();

refs.form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  if (
    refs.form.elements.email.value &&
    refs.form.elements.message.value === null
  )
    alert('fill all fields');
  removeFromLocalStorage(LS_KEY);
  e.target.reset();
}
