const homesHotels = document.getElementById('hotels');

const getData = async () => {
  const data = await fetch(
    'https://if-student-api.onrender.com/api/hotels/popular',
  );
  return await data.json();
};

const getHotels = async () => {
  await getData()
    .then((hotelsData) => {
      return hotelsData
        .map(
          (
            item,
          ) => `<div class="col-lg-3 col-md-6 col-sm-3 homes__hotel-block"><img class="homes__hotels-image" src=${item.imageUrl} alt=${item.name}/>
<p class="homes__hotel-name">${item.name}</p>
<p class="homes__hotel-location">${item.city}, ${item.country}</p></div>`,
        )
        .join('');
    })
    .then((hotelsItem) => {
      homesHotels.insertAdjacentHTML('afterbegin', hotelsItem);
    });
};

getHotels();
