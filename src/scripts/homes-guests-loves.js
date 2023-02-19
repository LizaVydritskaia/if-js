import { data } from './data-homes.js';

const homesHotels = document.querySelector('.homes__hotels');

function createHotels(div, array) {
  for (const item of array) {
    const hotelDiv = document.createElement('div');
    hotelDiv.className = 'homes__hotel-block';

    hotelDiv.innerHTML = `<img class="homes__hotels-image" src=${item.imageUrl} alt=${item.name}/>
<p class="homes__hotel-name">${item.name}</p>
<p class="homes__hotel-location">${item.city}, ${item.country}</p>`;

    div.append(hotelDiv);

    const hotelClasses = ['col-lg-3', 'col-md-6', 'col-sm-3'];
    hotelDiv.classList.add(...hotelClasses);
  }
}

createHotels(homesHotels, data);
