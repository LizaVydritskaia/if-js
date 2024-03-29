const homesHotels = document.getElementById('hotels');
const url = 'https://if-student-api.onrender.com/api/hotels/popular';
import { storageHotelsKey } from './sessionStorageKeys.js';

const getData = () => {
  if (!sessionStorage.getItem(storageHotelsKey)) {
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        sessionStorage.setItem(storageHotelsKey, data);
        createHotels(JSON.parse(data));
      });
  } else {
    createHotels(JSON.parse(sessionStorage.getItem(storageHotelsKey)));
  }
};

const hotelsBubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j].name > array[j + 1].name) {
        const previousValue = array[j];

        array[j] = array[j + 1];

        array[j + 1] = previousValue;
      }
    }
  }

  return array;
};

const createHotels = (data) => {
  const sortedHotels = hotelsBubbleSort(data);
  const hotels = sortedHotels
    .map(
      (hotel) =>
        `<div class="col-lg-3 col-md-6 col-sm-3 homes__hotel-block"><img class="homes__hotels-image" src=${hotel.imageUrl} alt=${hotel.name}/>
<p class="homes__hotel-name">${hotel.name}</p>
<p class="homes__hotel-location">${hotel.city}, ${hotel.country}</p></div>`,
    )
    .join('');

  homesHotels.insertAdjacentHTML('afterbegin', hotels);
};

getData();
