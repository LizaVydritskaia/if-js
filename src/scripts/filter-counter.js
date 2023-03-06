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
  const input = event.target.parentElement.querySelector(
    '.top-section__input-value',
  );
  console.log(direction, field, input);

  const currentValue = Number(input.value);
  let newValue;

  if (direction === 'plus') {
    newValue = currentValue + 1;
  }

  if (direction === 'minus') {
    newValue = currentValue - 1;
  }

  if (field === 'adults' && direction === 'plus' && input.value === '30') {
    event.target.classList.add('_disabled');
    return;
  }

  if (field === 'adults' && direction === 'minus' && input.value <= '30') {
    event.target.parentElement
      .querySelector('[data-direction="plus"]')
      .classList.remove('_disabled');
  }

  if (field === 'adults' && direction === 'minus' && input.value === '1') {
    event.target.classList.add('_disabled');
    return;
  }

  if (field === 'adults' && direction === 'plus' && input.value >= '1') {
    event.target.parentElement
      .querySelector('[data-direction="minus"]')
      .classList.remove('_disabled');
  }

  if (field === 'children' && direction === 'plus' && input.value === '10') {
    event.target.classList.add('_disabled');
    return;
  }

  if (field === 'children' && direction === 'minus' && input.value <= '10') {
    event.target.parentElement
      .querySelector('[data-direction="plus"]')
      .classList.remove('_disabled');
  }

  if (field === 'children' && direction === 'minus' && input.value === '0') {
    event.target.classList.add('_disabled');
    return;
  }

  if (field === 'children' && direction === 'plus' && input.value > '0') {
    event.target.parentElement
      .querySelector('[data-direction="minus"]')
      .classList.remove('_disabled');
  }

  if (field === 'room' && direction === 'plus' && input.value === '30') {
    event.target.classList.add('_disabled');
    return;
  }

  if (field === 'room' && direction === 'minus' && input.value <= '30') {
    event.target.parentElement
      .querySelector('[data-direction="plus"]')
      .classList.remove('_disabled');
  }

  if (field === 'room' && direction === 'minus' && input.value === '1') {
    event.target.classList.add('_disabled');
    return;
  }

  if (field === 'room' && direction === 'plus' && input.value >= '1') {
    event.target.parentElement
      .querySelector('[data-direction="minus"]')
      .classList.remove('_disabled');
  }

  input.value = newValue;

  if (field === 'adults' && direction === 'plus') {
    inputAdults.value = input.value;
  }

  if (field === 'adults' && direction === 'minus') {
    inputAdults.value = input.value;
  }

  if (field === 'children' && direction === 'plus') {
    inputChildren.value = input.value;
  }

  if (field === 'children' && direction === 'minus') {
    inputChildren.value = input.value;
  }

  if (field === 'room' && direction === 'plus') {
    inputRoom.value = input.value;
  }

  if (field === 'room' && direction === 'minus') {
    inputRoom.value = input.value;
  }
};

counterButtons.forEach((button) => {
  button.addEventListener('click', handlerCounter);
});

filterInput.forEach((input) => {
  input.addEventListener('change', handlerCounter);
});
