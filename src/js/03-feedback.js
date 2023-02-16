import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formData = {};
const refs = {
  form: document.querySelector('.feedback-form'),
  inputEmail: document.querySelector('input[name="email"]'),
  inputTextarea: document.querySelector('textarea[name="message"]'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

getItems();

function onFormSubmit(e) {
  e.preventDefault();

  if (refs.inputEmail.value !== '' && refs.inputTextarea.value !== '') {
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
    return;
  }
  alert('All fields must be filled!!!');
}

function onFormInput() {
  formData.email = refs.inputEmail.value;
  formData.message = refs.inputTextarea.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function getItems() {
  const savedItems = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedItems) {
    refs.inputEmail.value = savedItems.email;
    refs.inputTextarea.value = savedItems.message;
  }
}
