const adultsChildrenRoomInput = document.querySelector('.top-section__room');
const filter = document.querySelector('.top-section__filter');

const showFilter = () => {
  filter.style.display = 'block';
};

adultsChildrenRoomInput.addEventListener('click', showFilter);
