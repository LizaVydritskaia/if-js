const childrenAgeSelects = document.querySelector(
  '.top-section__filter-children',
);

import { counterButtons } from './filter-counter.js';

const getChildrenSelect = (event) => {
  const direction = event.target.dataset.direction;
  const field = event.target.dataset.field;
  const input = event.target.parentElement.querySelector(
    '.top-section__input-value',
  );
  console.log(direction, field, input);

  const select = document.createElement('select');
  select.className = 'top-section__filter-select';
  select.setAttribute('id', 'child-age');
  select.setAttribute('name', 'child-age');

  if (field === 'children' && direction === 'plus' && input.value === '1') {
    childrenAgeSelects.style.display = 'block';
  }

  if (field === 'children' && direction === 'minus' && input.value === '0') {
    childrenAgeSelects.style.display = 'none';
  }

  if (field === 'children' && direction === 'plus' && input.value > '0') {
    for (let i = 0; i < 10; i++) {
      let option = '';

      for (let j = 0; j <= 17; j++) {
        option += `<option value="${j}">${j} years old</option>`;
      }

      select.innerHTML = option;
    }

    childrenAgeSelects.append(select);
  }

  if (field === 'children' && direction === 'minus') {
    const allSelects = document.querySelectorAll('.top-section__filter-select');
    const lastSelect = allSelects[allSelects.length - 1];

    childrenAgeSelects.removeChild(lastSelect);
  }
};

counterButtons.forEach((button) => {
  button.addEventListener('click', getChildrenSelect);
});
