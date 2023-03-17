const counterButtons = document.querySelectorAll('.top-section__filter-button');

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

  input.value = newValue;

  if (direction === 'plus' && input.value === max) {
    event.target.disabled = true;
  }

  if (direction === 'minus' && input.value === min) {
    event.target.disabled = true;
  }

  if (direction === 'plus' && input.value > min) {
    event.target.parentElement.querySelector(
      '[data-direction="minus"]',
    ).disabled = false;
  }

  if (direction === 'minus' && input.value < max) {
    event.target.parentElement.querySelector(
      '[data-direction="plus"]',
    ).disabled = false;
  }

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
