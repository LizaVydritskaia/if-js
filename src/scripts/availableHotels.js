const searchButton = document.querySelector('.top-section__button');
const sectionAvailableHotels = document.querySelector('.available-hotels');
const availableHotels = document.getElementById('available-hotels');
const arrow =
  '<div class="homes__circle-arrow"><div class="homes__arrow"></div></div>';

const getSearchData = async () => {
  const destinationInput = document.getElementById('destination');

  const url = new URL('https://if-student-api.onrender.com/api/hotels');
  url.searchParams.append('search', destinationInput.value.trim());

  try {
    const searchData = await fetch(url);
    const result = await searchData.json();
    await renderAvailableHotels(result);
  } catch (error) {
    console.log('Fetch Error', error);
  }
};

const renderAvailableHotels = (result) => {
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

searchButton.addEventListener('click', (event) => {
  event.preventDefault();
  getSearchData();
});