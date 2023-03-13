// Импортируем функцию throttle из библиотеки lodash.throttle
import throttle from 'lodash.throttle';

// Константа для ключа хранилища, используемого для сохранения данных формы
const FORM_KEY_STORAGE = 'feedback-form-state';

// Объект, содержащий ссылки на элементы формы
const refs = {
  formEl: document.querySelector('.feedback-form'),
  emailEl: document.querySelector('.feedback-form [name="email"]'),
  textareaEl: document.querySelector('.feedback-form [name="message"]'),
};

// Получаем данные формы из локального хранилища браузера и парсим их в объект
const saveDataInStorage = localStorage.getItem(FORM_KEY_STORAGE);
let formData = saveDataInStorage ? JSON.parse(saveDataInStorage) : {};

// Функция, которая устанавливает неотправленные данные в элементы формы
const unsentFormData = function () {
  // Проходимся по всем элементам объекта formData и устанавливаем их значения в соответствующие элементы формы
  Object.entries(formData).forEach(([key, value]) => {
    refs.formEl.elements[key].value = value;
  });
};

// Функция, которая сохраняет текущее значение элементов формы в объект formData и сохраняет его в локальном хранилище браузера
const formSave = e => {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(FORM_KEY_STORAGE, JSON.stringify(formData));
};

// Функция, которая обрабатывает отправку формы
const formSubmit = e => {
  e.preventDefault();

  // Если значения полей email и message не заполнены, выводим сообщение и прерываем обработку отправки формы
  if (!refs.emailEl.value || !refs.textareaEl.value) {
    alert('Please fill in text fields');
    return;
  }

  // Очищаем форму, удаляем данные формы из локального хранилища и сбрасываем значение объекта formData
  e.currentTarget.reset();
  localStorage.removeItem(FORM_KEY_STORAGE);
  console.log(formData);
  formData = {};
};

// Добавляем слушатели событий на элементы формы, чтобы сохранять данные и обрабатывать отправку формы
refs.formEl.addEventListener('input', throttle(formSave, 500)); // throttle используется для уменьшения количества обращений к локальному хранилищу браузера
refs.formEl.addEventListener('submit', formSubmit);

// Устанавливаем неотправленные данные в элементы формы при загрузке страницы
unsentFormData();
