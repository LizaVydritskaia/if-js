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

//Create deepEqual function
const obj1 = {
  a: 'a',
  b: {
    a: 'a',
    b: 'b',
    c: {
      a: 1,
    },
  },
};
const obj2 = {
  b: {
    c: {
      a: 1,
    },
    b: 'b',
    a: 'a',
  },
  a: 'a',
};
const obj3 = {
  a: {
    c: {
      a: 'a',
    },
    b: 'b',
    a: 'a',
  },
  b: 'b',
};

const deepEqual = (object1, object2) => {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let i = 0; i < keys1.length; i++) {
    if (keys2.includes(keys1[i]) === false) {
      return false;
    }
  }

  for (let i = 0; i < keys1.length; i++) {
    const values1 = object1[keys1[i]];
    const values2 = object2[keys1[i]];

    if (typeof values1 === 'object' || typeof values2 === 'object') {
      if (deepEqual(values1, values2) === false) {
        return false;
      } else {
        continue;
      }
    }

    if (values1 !== values2) {
      return false;
    }
  }
  return true;
};

console.log(deepEqual(obj1, obj2));
console.log(deepEqual(obj1, obj3));
