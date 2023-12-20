//Задание 1
// Выведите числа от 1 до 10 в консоль

let num = 1;
while (num <= 10) {
    console.log(num);
    num ++;
}

//Задание 2
// Выведите чётные числа от 1 до 20 в консоль

let number = 2;
while (number <= 20) {
  console.log(number);
  number += 2;
}

//или
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
      console.log( i );
    }
  }

//Задание 3
// Выведите числа от 10 до 1 в консоль в обратном порядке
let ten = 10;
while (ten >= 1) {
  console.log(ten);
  ten --;
}

//Задание 4
// Выведите таблицу умножения на 5 от 1 до 10
for (let i = 1; i <= 10; i+=1) {
  console.log(i * 5);
}

//Задание 5
// Вычислить сумму чисел от 1 до 100 и вывести значение в консоль
sumOfNumbers = () => {
  let sum = 0;

  for (let i = 1; i <= 100; i++) {
    sum += i; //sum = sum + i
  }

  return sum;
}

console.log(sumOfNumbers());

//Задание 6
// Выведите все элементы массива в консоль используя цикл for
const array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i += 1) {
  console.log(array[i]);
}

//Задание 7
// Выведите сумму всех элементов массива используя цикл for
const numbers = [1, 2, 3, 4, 5];

sumOfNumbers = () => {
  let sum = 0;

  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }

  return sum;
}

console.log(sumOfNumbers());

//Задание 8
// Напишите цикл for, который изменяет массив животных, делая их прекрасными! Например, если есть следующий массив: let animals = ["Кот", "Рыба", "Лемур"]; цикл должен сделать его таким: ["Кот - прекрасное животное", "Рыба - прекрасное животное", "Лемур - прекрасное животное"]
// Подсказка: вам понадобится переприсвоить значения для каждого индекса, то есть присвоить новые значения уже существующим элементам: animals[0] = animals[0] + " - прекрасное животное";
let animals = ["Кот", "Рыба", "Лемур"];

for (let i = 0; i < animals.length; i += 1) {
  animals[i] = animals[i] + " - прекрасное животное"
}

console.log(animals);

//Задание 9
// Выведите символы в строке в консоль
const str = 'Hello';

for (i = 0; i < str.length; i += 1) {
  console.log(str[i]);
}

//Задание 10
// Выведите все элементы массива в консоль используя цикл for...of. Массив array объявлен в Задании 6

for (number of array) {
  console.log (number)
}

//Задание 11
// Выведите каждое слово из массива строк в консоль
// Подсказка: вам понадобится метод массивов split
const sentences = ['Hello, world!', 'How are you?'];

for (word of sentences) {
  console.log(word.split(' '));  
}

//Задание 12
// Выведите сумму всех элементов массива используя цикл for..of. Массив numbers объявлен в Задании 7

  sumOfNumbers = () => {
    let sum = 0;
    for (number of numbers) {
      sum += number
    }
    return sum
  }
console.log(sumOfNumbers())

//Задание 13
// Выведите длину каждого слова из массива строк в консоль
const list = ['apple', 'banana', 'cherry'];

for (item of list) {
  console.log (item.length);
}

//Задание 14
// Преобразуйте массив каждый элемент массива words в верхний регистр
const words = ['Hello', 'world', '!'];

for (word of words) {
  const wordToUpperCase = word.toUpperCase();
  word = wordToUpperCase;  
  console.log(word)
 }

//или

let wordsToUpperCase = words.map ((word) => word.toUpperCase());
console.log(wordsToUpperCase);

//Задание 15
// Подсчитайте количество гласных букв в строке
// Подсказка: вам понадобится метод includes
const greeting = 'Hello, world!';

function getCount (string) {
  let vowelCount = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let letter of string) {
    if (vowels.includes(letter)) {
      vowelCount +=1;
    }
  }
  return vowelCount;
}
console.log(getCount(greeting));

//Задание 16
// Объедините все строки массива в одну строку с пробелами между ними
// const words = ['Hello', 'world', '!'];
const joinedWords = words.join(' ');
console.log(joinedWords);

//Задание 17
// Выведите числа от 1 до 10 в консоль используя цикл while
let oneTillTen = 1;
while (oneTillTen <=10) {
  console.log(oneTillTen);
  oneTillTen +=1;
}

//Задание 18)
// Выведите числа от 1 до 10 в консоль в обратном порядке используя цикл while

//Задание 19
// Проверьте, все ли элементы массива являются положительными числами используя цикл while
// Подсказка: используйте директиву break
const allNumbers = [1, 2, 3, -4, 5];
let allPositive = true;

//Задание 20
// Выведите значения элементов массива до первого отрицательного числа используя цикл do...while
const random = [2, 4, 6, -3, 8, 10];

//Задание 21
// Выведите числа от 1 до 100, пропуская числа, которые делятся на 3 используя цикл do...while

//Задание 22
// Запросить у пользователя числа, пока сумма введенных чисел не станет больше 100

//Задание 23
// Напишите функцию, которая изменит фоновый цвет всех элементов <h4> на странице на синий цвет

//Задание 24
// Напишите генератор случайных строк до 6 символов
// Подсказка: используйте методы объекта Math и длину массива alphabet
let alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
let randomString = '';
