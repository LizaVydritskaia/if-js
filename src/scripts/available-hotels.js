const searchButton = document.querySelector('.top-section__button');
const sectionAvailableHotels = document.querySelector('.available-hotels');
const availableHotels = document.getElementById('available-hotels');

const url = 'https://if-student-api.onrender.com/api/hotels';

const getSearchData = async () => {
  const destinationInputValue = document.getElementById('destination').value;

  const searchData = await fetch(
    url +
      '?' +
      new URLSearchParams({ search: destinationInputValue }).toString(),
  );

  return searchData.json();
};

const renderAvailableHotels = async () => {
  sectionAvailableHotels.style.display = 'block';

  await getSearchData()
    .then((hotels) => {
      return hotels
        .map(
          (
            item,
          ) => `<div class="col-lg-3 col-md-6 col-sm-3 available-hotels__hotel-block"><img class="homes__hotels-image" src=${item.imageUrl} alt=${item.name}/>
<p class="homes__hotel-name">${item.name}</p>
<p class="homes__hotel-location">${item.city}, ${item.country}</p></div>`,
        )
        .join('');
    })
    .then((hotelBlock) => {
      availableHotels.insertAdjacentHTML('afterbegin', hotelBlock);
    });
};

searchButton.addEventListener('click', renderAvailableHotels);
