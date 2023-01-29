let user = 'John Doe';
console.log(user);

const student = 'Елизавета';
console.log(student);

user = student; //Консоль выведет Елизавета, т.к. переменная переопределена
console.log(user);

let test = 1;

test++;
console.log(test);

test = test + '1';
console.log(test); //Консоль выведет значение 21

test = test - 1;
console.log(test); //Консоль выведет значение 20

test = Boolean(test);
console.log(test); //true

//Найдите произведение элементов массива

let result = 1;

const num = [2, 3, 5, 8];

for (let i = 0; i < num.length; i++) {
  result = result * num[i];
}

console.log(result);

//Выведите в консоль элементы массива, которые больше 5, но меньше 10

const numbers = [2, 5, 8, 15, 0, 6, 20, 3];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 5 && numbers[i] < 10) console.log(numbers[i]);
}

//Выведите в консоль четные элементы массива

const arr = [2, 5, 8, 15, 0, 6, 20, 3];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) console.log(arr[i]);
}

// Create palindrome function
function palindrome(word) {
  let isPalindrome = true;

  for (let i = 0; i < word.length; i++) {
    const endIndex = word.length - 1 - i;
    if (word[i] !== word[endIndex]) {
      isPalindrome = false;
    }
  }
  return isPalindrome;
}

console.log(palindrome('tenet'));

//Create min(a,b) and max(a,y) functions
function min(a, b) {
  if (a > b) {
    return b;
  }
  return a;
}

min(10, 20);

function max(a, y) {
  return a > y ? a : y;
}

max(55, 8);

//Replace 0 with 'zero' in array
const array = [12, 50, 69, 4, 100, 81, 0, 18, 40, 3];

function arrayZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    const element = String(arr[i]);
    let newElement = '';

    for (let j = 0; j < element.length; j++) {
      if (element[j] === '0') {
        newElement += 'zero';
      } else {
        newElement += element[j];
      }
    }
    arr[i] = newElement;
  }
  return arr;
}

arrayZero(array);

//Convert date
const date = '2020-11-26';

const dateToDate = (input) => {
  const reg = /(?<year>\d{4})\W(?<month>\d*)\W(?<day>\d*)/g;

  return input.replace(reg, '$<day>.$<month>.$<year>');
};

console.log(dateToDate(date));

//Create search function
const data = [
  {
    country: 'Russia',
    city: 'Saint Petersburg',
    hotel: 'Hotel Leopold',
  },
  {
    country: 'Spain',
    city: 'Santa Cruz de Tenerife',
    hotel: 'Apartment Sunshine',
  },
  {
    country: 'Slowakia',
    city: 'Vysokie Tatry',
    hotel: 'Villa Kunerad',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hostel Friendship',
  },
  {
    country: 'Indonesia',
    city: 'Bali',
    hotel: 'Ubud Bali Resort&SPA',
  },
  {
    country: 'Netherlands',
    city: 'Rotterdam',
    hotel: 'King Kong Hostel',
  },
  {
    country: 'Marocco',
    city: 'Ourika',
    hotel: 'Rokoko Hotel',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hotel Rehberge Berlin Mitte',
  },
];

const search = (string) => {
  const template = [];

  for (let i = 0; i < data.length; i++) {
    const hasCountry = data[i].country.includes(string);
    const hasCity = data[i].city.includes(string);
    const hasHotel = data[i].hotel.includes(string);

    if (hasCountry || hasCity || hasHotel) {
      template.push(`${data[i].country}, ${data[i].city}, ${data[i].hotel}`);
    }
  }
  return template;
};

console.log(search('Berlin'));

//Rewrite palindrome function
function isPalindrome(word) {
  return word === word.split('').reverse().join('');
}

console.log(isPalindrome('uber'));
console.log(isPalindrome('шалаш'));
console.log(isPalindrome('шалааш'));

//Rewrite search function
const hotels = [
  {
    name: 'Hotel Leopold',
    city: 'Saint Petersburg',
    country: 'Russia',
  },
  {
    name: 'Apartment Sunshine',
    city: 'Santa Cruz de Tenerife',
    country: 'Spain',
  },
  {
    name: 'Villa Kunerad',
    city: 'Vysokie Tatry',
    country: 'Slowakia',
  },
  {
    name: 'Hostel Friendship',
    city: 'Berlin',
    country: 'Germany',
  },
  {
    name: 'Radisson Blu Hotel',
    city: 'Kyiv',
    country: 'Ukraine',
  },
  {
    name: 'Paradise Hotel',
    city: 'Guadalupe',
    country: 'Mexico',
  },
  {
    name: 'Hotel Grindewald',
    city: 'Interlaken',
    country: 'Switzerland',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
  },
  {
    name: 'Virgin Hotel',
    city: 'Chicago',
    country: 'USA',
  },
  {
    name: 'Grand Beach Resort',
    city: 'Dubai',
    country: 'United Arab Emirates',
  },
  {
    name: 'Shilla Stay',
    city: 'Seoul',
    country: 'South Korea',
  },
  {
    name: 'San Firenze Suites',
    city: 'Florence',
    country: 'Italy',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
  },
  {
    name: 'Black Penny Villas',
    city: 'BTDC, Nuca Dua',
    country: 'Indonesia',
  },
  {
    name: 'Koko Hotel',
    city: 'Tokyo',
    country: 'Japan',
  },
  {
    name: 'Ramada Plaza',
    city: 'Istanbul',
    country: 'Turkey',
  },
  {
    name: 'Waikiki Resort Hotel',
    city: 'Hawaii',
    country: 'USA',
  },
  {
    name: 'Puro Hotel',
    city: 'Krakow',
    country: 'Poland',
  },
  {
    name: 'Asma Suites',
    city: 'Santorini',
    country: 'Greece',
  },
  {
    name: 'Cityden Apartments',
    city: 'Amsterdam',
    country: 'Netherlands',
  },
  {
    name: 'Mandarin Oriental',
    city: 'Miami',
    country: 'USA',
  },
  {
    name: 'Concept Terrace Hotel',
    city: 'Rome',
    country: 'Italy',
  },
  {
    name: 'Ponta Mar Hotel',
    city: 'Fortaleza',
    country: 'Brazil',
  },
  {
    name: 'Four Seasons Hotel',
    city: 'Sydney',
    country: 'Australia',
  },
  {
    name: 'Le Meridien',
    city: 'Nice',
    country: 'France',
  },
  {
    name: 'Apart Neptun',
    city: 'Gdansk',
    country: 'Poland',
  },
  {
    name: 'Lux Isla',
    city: 'Ibiza',
    country: 'Spain',
  },
  {
    name: 'Nox Hostel',
    city: 'London',
    country: 'UK',
  },
  {
    name: 'Leonardo Vienna',
    city: 'Vienna',
    country: 'Austria',
  },
  {
    name: 'Adagio Aparthotel',
    city: 'Edinburgh',
    country: 'UK',
  },
  {
    name: 'Steigenberger Hotel',
    city: 'Hamburg',
    country: 'Germany',
  },
];

const searchString = (string) => {
  const temp = [];

  const filtered = hotels.filter((item) => {
    return (
      item.country.includes(string) ||
      item.city.includes(string) ||
      item.name.includes(string)
    );
  });

  filtered.forEach((item) => {
    return temp.push(`${item.country}, ${item.city}, ${item.name}`);
  });

  return temp;
};

console.log(searchString('USA'));

//Get countries and cities from array
const getCountryAndCities = (arr) => {
  const newObject = {};
  arr.reduce((acc, currHotel) => {
    const newKey = currHotel.country;
    if (!acc[newKey]) {
      acc[newKey] = [];
    }
    acc[newKey].push(currHotel.city);

    return acc;
  }, newObject);

  return newObject;
};

console.log(getCountryAndCities(hotels));
