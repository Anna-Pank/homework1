// Задача №1

const str = 'js';
const upperCaseStr = str.toUpperCase();

console.log(upperCaseStr);

// Задача №2

function filterStringsByPrefix(arr, prefix) {
    const lowerPrefix = prefix.toLowerCase();

    return arr.filter(str => {
        return str.toLowerCase().startsWith(lowerPrefix);
    });
}


// Задача №3

const number = 32.58884;

const floorNumber = Math.floor(number);
console.log(floorNumber);

const ceilNumber = Math.ceil(number);
console.log(ceilNumber);

const roundNumber = Math.round(number);
console.log(roundNumber);

// Задача №4

const numbers = [52, 53, 49, 77, 21, 32];

const minValue = Math.min(...numbers);

const maxValue = Math.max(...numbers);

console.log(`Минимальное значение: ${minValue}`);
console.log(`Максимальное значение: ${maxValue}`);


// Задача №5

function printRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(randomNumber);
}
console.log(printRandomNumber());

// Задача №6

function generateRandomArray(num) {
    if (num <= 0) {
        console.error("Число должно быть положительным");
        return [];
    }

    const length = Math.floor(num / 2);

    const result = Array.from({ length }, () => Math.floor(Math.random() * (num + 1)));

    return result;
}
console.log(generateRandomArray(10));

// Задача №7

function getRandomInRange(min, max) {

    if (min > max) {
        [min, max] = [max, min];
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInRange(6, 8));

// Задача №8

console.log(new Date().toLocaleString());

// Задача №9

const currentDate = new Date();

const futureDate = new Date(currentDate);
futureDate.setDate(futureDate.getDate() + 73);

console.log('Дата через 73 дня:', futureDate.toLocaleDateString('ru-RU'));


// Задача №10

function formatRussianDate(date) {

  if (!(date instanceof Date)) {
    date = new Date(date);
    if (isNaN(date.getTime())) {
      return 'Некорректная дата';
    }
  }

  const months = [
    'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
  ];
  
  const weekdays = [
    'воскресенье', 'понедельник', 'вторник', 'среда',
    'четверг', 'пятница', 'суббота'
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const weekday = weekdays[date.getDay()];
  
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `Дата: ${day} ${month} ${year} — это ${weekday}.\nВремя: ${hours}:${minutes}:${seconds}`;
}

const now = new Date();
console.log(formatRussianDate(now));