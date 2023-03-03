export const counterButtons = document.querySelectorAll(
  '.top-section__filter-button',
);

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
};

counterButtons.forEach((button) => {
  button.addEventListener('click', handlerCounter);
});
