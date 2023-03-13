import throttle from 'lodash.throttle';

const FORM_KEY_STORAGE = 'feedback-form-state';

const refs = {
  formEl: document.querySelector('.feedback-form'),
  emailEl: document.querySelector('.feedback-form [name="email"]'),
  textareaEl: document.querySelector('.feedback-form [name="message"]'),
};
const saveDataInStorage = localStorage.getItem(FORM_KEY_STORAGE);
let formData = saveDataInStorage ? JSON.parse(saveDataInStorage) : {};

const unsentFormData = function () {
  Object.entries(formData).forEach(([key, value]) => {
    refs.formEl.elements[key].value = value;
  });
};

const formSave = e => {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(FORM_KEY_STORAGE, JSON.stringify(formData));
};

const formSubmit = e => {
  e.preventDefault();

  if (!refs.emailEl.value || !refs.textareaEl.value) {
    alert('Please fill in text fields');
    return;
  }

  e.currentTarget.reset();
  localStorage.removeItem(FORM_KEY_STORAGE);
  console.log(formData);
  formData = {};
};

refs.formEl.addEventListener('input', throttle(formSave, 500));
refs.formEl.addEventListener('submit', formSubmit);
unsentFormData();
