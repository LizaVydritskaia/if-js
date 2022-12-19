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
