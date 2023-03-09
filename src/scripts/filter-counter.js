export const counterButtons = document.querySelectorAll(
  '.top-section__filter-button',
);

const inputAdults = document.getElementById('adults');
const inputChildren = document.getElementById('children');
const inputRoom = document.getElementById('room');
const filterInput = document.querySelectorAll('.top-section__input-value');

const handlerCounter = (event) => {
  const direction = event.target.dataset.direction;
  const field = event.target.dataset.field;
  const min = event.target.dataset.min;
  const max = event.target.dataset.max;
  const input = event.target.parentElement.querySelector(
    '.top-section__input-value',
  );

  const currentValue = Number(input.value);
  let newValue;

  if (direction === 'plus') {
    newValue = currentValue + 1;
  }

  if (direction === 'minus') {
    newValue = currentValue - 1;
  }

  if (direction === 'plus' && input.value === max) {
    event.target.classList.add('_disabled');
    return;
  }

  if (direction === 'minus' && input.value === min) {
    event.target.classList.add('_disabled');
    return;
  }

  if (direction === 'plus' && input.value >= min) {
    event.target.parentElement
      .querySelector('[data-direction="minus"]')
      .classList.remove('_disabled');
  }

  if (direction === 'minus' && input.value <= max) {
    event.target.parentElement
      .querySelector('[data-direction="plus"]')
      .classList.remove('_disabled');
  }

  input.value = newValue;

  if (field === 'adults') {
    inputAdults.value = input.value;
  }

  if (field === 'children') {
    inputChildren.value = input.value;
  }

  if (field === 'room') {
    inputRoom.value = input.value;
  }
};

counterButtons.forEach((button) => {
  button.addEventListener('click', handlerCounter);
});

filterInput.forEach((input) => {
  input.addEventListener('change', handlerCounter);
});
