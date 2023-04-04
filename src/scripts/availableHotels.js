const searchButton = document.querySelector('.top-section__button');
const sectionAvailableHotels = document.querySelector('.available-hotels');
const availableHotels = document.getElementById('available-hotels');
const arrow =
  '<div class="homes__circle-arrow"><div class="homes__arrow"></div></div>';

const destinationInput = document.getElementById('destination');
const adultsInput = document.getElementById('adults');
const childrenSelect = document.getElementsByClassName(
  'top-section__filter-select',
);
const roomInput = document.getElementById('room');

const getChildrenAge = () => {
  const childrenSelectArray = Array.from(childrenSelect);

  const valuesArray = [];

  childrenSelectArray.forEach((item) => {
    valuesArray.push(item.value);
  });
  return valuesArray.join(',');
};

const fetchRequest = ({
  searchValue,
  adultsValue,
  childrenValue,
  roomsValue,
}) => {
  const url = new URL('https://if-student-api.onrender.com/api/hotels');

  url.searchParams.set('search', searchValue.trim());
  url.searchParams.set('adults', adultsValue);
  url.searchParams.set('children', childrenValue);
  url.searchParams.set('rooms', roomsValue);

  return fetch(url);
};

const createHotelBlock = (result) => {
  sectionAvailableHotels.style.display = 'block';
  availableHotels.innerHTML = '';

  if (result.length === 0) {
    availableHotels.innerHTML = 'Sorry, your search did not match any results';
    return;
  }

  result.forEach((hotel) => {
    availableHotels.innerHTML += `<div class="col-lg-3 col-md-6 col-sm-3 available-hotels__hotel-block"><img class="homes__hotels-image" src=${hotel.imageUrl} alt=${hotel.name}/>
<p class="homes__hotel-name">${hotel.name}</p>
<p class="homes__hotel-location">${hotel.city}, ${hotel.country}</p></div>`;
  });

  availableHotels.insertAdjacentHTML('beforeend', arrow);
};

const renderAvailableHotels = async () => {
  try {
    const response = await fetchRequest({
      searchValue: destinationInput.value,
      adultsValue: adultsInput.value,
      childrenValue: getChildrenAge(),
      roomsValue: roomInput.value,
    });

    const result = await response.json();

    createHotelBlock(result);
  } catch (error) {
    console.log('Fetch Error', error);
  }
};

searchButton.addEventListener('click', (event) => {
  event.preventDefault();
  renderAvailableHotels();
});
