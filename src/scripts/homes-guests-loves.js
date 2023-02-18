import { data } from './data-homes.js';

const homesSection = document.createElement('section');
homesSection.className = 'homes';

const mainDiv = document.createElement('div');
mainDiv.className = 'container';

homesSection.appendChild(mainDiv);

const homesTitleEl = document.createElement('h2');
homesTitleEl.className = 'homes__title';
homesTitleEl.textContent = 'Homes guests loves';

mainDiv.appendChild(homesTitleEl);

const homesHotels = document.createElement('div');
homesHotels.className = 'homes__hotels';
mainDiv.appendChild(homesHotels);

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

const circle = document.createElement('div');
circle.className = 'homes__circle-arrow';

const arrow = document.createElement('div');
arrow.className = 'homes__arrow';

circle.appendChild(arrow);

homesHotels.appendChild(circle);

const destinationsSection = document.querySelector('.destinations');
const mainSection = destinationsSection.parentNode;

mainSection.insertBefore(homesSection, destinationsSection);
