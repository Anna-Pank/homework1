// Задача №1

const arr = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  if (arr[i] === 10) {
    break;
  }
}

// Задача №2

const mas = [1, 5, 4, 10, 0, 3];
const index = mas.indexOf(4);

console.log(index);

// Задача №3

const ann = [1, 3, 5, 10, 20];
const join = ann.join(' ');

console.log(join);

// Задача №4

const size = 3;
const matrix = []; 

for (let i = 0; i < size; i++) {
  const row = [];
  for (let j = 0; j < size; j++) {
    row.push(1);
  }
  matrix.push(row); 
}

console.log(matrix);

// Задача №5

const att = [1, 1, 1];
arr.push(2, 2, 2);
console.log(att);

// Задача №6

const aww = [9, 8, 7, 'a', 6, 5];

const sortedAww = aww.sort((a, b) => a - b);
const filteredAww = sortedAww.filter(item => typeof item === 'number');

console.log(filteredAww);

// Задача №7

const number = [9, 8, 7, 6, 5];

const userGuess = Number(prompt("Угадайте число:"));

if (number.includes(userGuess)) {
  alert("Угадал!"); 
} else {
  alert("Не угадал!");
}

// Задача №8

const str = 'abcdef';
const reversedStr = str.split('').reverse().join('');
console.log(reversedStr);

// Задача №9

const ass = [[1, 2, 3], [4, 5, 6]];
const flattenedArr = [].concat(...ass);
console.log(flattenedArr);

// Задача №10

const aff = [3, 7, 2, 9, 5, 1, 8, 4, 6, 10];

for (let i = 0; i < aff.length - 1; i++) {
  const current = aff[i];
  const next = aff[i + 1];
  const sum = current + next;

  console.log(sum);
}

// Задача №11

function squareArray(numbers) {
    return numbers.map(num => num * num);
}

const inputArray = [1, 2, 3, 4, 5];
const squaredArray = squareArray(inputArray);

console.log(squaredArray);

// Задача №12

function getWordLengths(words) {
  return words.map(word => word.length);
}

const word = ['томат', 'капуста', 'редис', 'свекла'];
const lengths = getWordLengths(word);
console.log(lengths);

// Задача №13

function negativeNumbers(numbers) {
    return numbers.filter(num => num < 0);
}

const input = [1, -2, 3, -4, 5, -6];
const negatives = negativeNumbers(input);
console.log(negatives);

// Задача №14

const originalArray = Array.from({length: 10}, () => Math.floor(Math.random() * 11));
const evenNumbers = originalArray.filter(num => num % 2 === 0);

console.log("Исходный массив:", originalArray);
console.log("Четные числа:", evenNumbers);

// Задача №15

const numbers = Array.from({length: 6}, () => Math.floor(Math.random() * 10));
const sum = numbers.reduce((acc, num) => acc + num, 0);
const average = sum / numbers.length;

console.log("Сгенерированный массив:", numbers);
console.log("Среднее арифметическое:", average);