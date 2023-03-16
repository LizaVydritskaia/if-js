const formEl = document.getElementById('js-form');
const inputFileEl = document.getElementById('js-file');
const formDivEl = document.getElementById('js-form__div');
const imageEl = document.getElementById('js-form__image');
const divText = document.querySelector('.form__text');

const sendFile = () => {
  fetch('https://if-student-api.onrender.com/api/file', {
    method: 'POST',
    body: new FormData(formEl),
  })
    .then((response) => response.json())
    .then((result) => console.log('Success:', result))
    .catch((error) => console.error('Failed:', error));
};

formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  sendFile();
});

formDivEl.addEventListener('click', () => {
  inputFileEl.click();
});

inputFileEl.addEventListener('change', (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.addEventListener('load', (event) => {
    imageEl.setAttribute('src', event.target.result);
    imageEl.setAttribute('alt', file.name);
    imageEl.style.display = 'block';
    divText.style.display = 'none';
  });

  reader.readAsDataURL(file);
});
