// Циклы

let count = 0;
while (count < 3) {
  console.log("Hello");
  count++;
}

for (let i = 0; i < 3; i++) {
  console.log("Hello for");
}

for (let j = 0; j <= 2; j++) {
  console.log(j);
}

let pass;
let counter = 0;

do {
  if (counter >= 3) {
    alert("Пароль неверный!");
  }
  pass = Number(prompt("Введите пароль: "));
  counter++;
} while (pass !== 234);

// Массивы и методы

const arr = [];
arr.push(1); //добавление элемента в конец массива

console.log(arr);
// let arrNew = [];

const arr1 = [1, 2, "hello"];
console.log(arr[0]);
console.log(arr.length);
console.log(arr[arr.length - 1]); //последний элемент массива

const user = [];

user.push(prompt("Ваше имя"));
user.push(Number(prompt("Ваш возраст")));

console.log(user);

const numbers = [2, 3, 19, 15];

console.log(numbers);
alert(`Запомни цифра ${numbers}`);

console.log(numbers[numbers.length - 1]);

console.log(numbers.pop()); //удаление последнего элемента массива

const word = "example";
const arrWord = word.split("");
const upWord = arrWord.pop();
arrWord.push(upWord.toLocaleUpperCase());
console.log(arrWord.join(""));

const arr3 = [1, 2, 3, 4];
arr.slice(0, 2);

// Разминка
const arr4 = [1, 2, 3];
arr4.push(5);

// Циклы + массивы

const arr5 = [1, 2, 3, 7, 19];

for (let i = 0; i < arr5.length; i++) {
  const element = arr5[i];
  if (element >= 5) {
    console.log(element);
  } else {
    continue;
  }
}

console.log(arr.indexOf("3"));

const arrAnswers = ["елка", "ёлка", "ель"];
const userAnswer = prompt("Зимой и летом одним цветом");

for (let i = 0; i < arrAnswers.length; i++) {
  const element = arrAnswers[i];

  if (element === userAnswer) {
    console.log("Молодец");
    break;
  } else {
    continue;
  }
}
