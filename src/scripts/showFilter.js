const adultsChildrenRoomInput = document.querySelector('.top-section__room');
const searchButton = document.querySelector('.top-section__button');
const filter = document.querySelector('.top-section__filter');

const showFilter = () => {
  filter.style.display = 'block';
};

const hideFilter = () => {
  filter.style.display = 'none';
};

adultsChildrenRoomInput.addEventListener('click', showFilter);

searchButton.addEventListener('click', hideFilter);
