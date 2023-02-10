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

//Create sum function
(() => {
  function sum(a) {
    return function (b) {
      return a + b;
    };
  }

  console.log(sum(5)(2));
})();

//Change paragraph color by click
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

let currentColor = 0;

function getColor(arr, id) {
  currentColor++;

  if (currentColor === arr.length) {
    currentColor = 0;
  }
  id.style.color = arr[currentColor];
}

text1.addEventListener('click', (event) => {
  event.target.style.color = getColor(colors, text1);
});

text2.addEventListener('click', (event) => {
  event.target.style.color = getColor(colors, text2);
});

text3.addEventListener('click', (event) => {
  event.target.style.color = getColor(colors, text3);
});
