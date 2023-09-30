// 1. Создайте массив с элементами 1, 2, 3.
// Выведите на экран каждый из этих элементов.
// 2. Создайте массив с произвольными элементами.
// Выведите на экран количество элементов в этом массиве.
// 3. Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо первого элемента
// число 1, вместо второго - 2, вместо третьего - 3.

const array = [1, 2, 3];
console.log(array[0], array[1], array[2]);

const array1 = [2, "hello", "117"];
console.log(array.length);

const array2 = ["a", "b", "c"];

array2[0] = 1;
array2[1] = 2;
array2[2] = 3;

console.log(array2);

// 1. Создайте массив с элементами 1, 2 и 3. С помощью оператора ++ увеличьте
// каждый элемент массива на единицу.
// 2. Узнайте длину следующего массива и объясните почему такое значение:
// ```
// const arr = [];
// arr[3] = 'a';
// arr[8] = 'b';
// ```
// 3. Пусть дан такой массив: `[1, 2, 3]`. Добавьте ему в конец элементы 4 и 5.
// 4. Создайте произвольный массив из 5 элементов, удалите из него два элемента.
// Проверьте, какое станет значение свойства length после этого.

const array4 = [1, 2, 3];
for (let i = 0; i < array.length; i++) {
  array4[i]++;
}
console.log(array4);

const arr = [];

arr[3] = "a";
arr[8] = "b";

console.log(arr);
console.log(arr[2]);

const array5 = [1, 2, 3];
// array5.push(4, 5);
array = [...array, 4, 5];
console.log(array5);

const array6 = [3, 7, "hey", 4, 8];
const array7 = array6.slice(0, 3);
console.log(array7);
array6.splice(1, 2); // удаление значений
array6.splice(1, 0, 5); // вставляет значения
array6.splice(1, 0, 5, 3);
console.log(array6);

const el = array6.pop();
console.log(array6);
console.log(el);

delete array6[3];

const some = array6.at(3); // копирует элемент
console.log(some);

let element = 5;
console.log(element++);
console.log(++element);

// 1. С помощью цикла for выведите в консоль числа от 11 до 33.
// 2. С помощью цикла for выведите в консоль нечетные числа в промежутке от 1
// до 100 включительно.
// 3. С помощью цикла for выведите в консоль числа от 100 до 0.
// 4. Создать переменную с заданным числом. Умножайте число на 3 столько раз,
// пока результат умножения не станет больше 1000. Какое число получится?
// Посчитайте количество итераций, необходимых для этого.

for (let i = 11; i <= 33; console.log(i++));

for (let i = 1; i <= 100; i += 2) {
  console.log(i);
}

for (let i = 100; (i = 0); i--) {
  console.log(i);
}

let num = 5;
let count = 0;
while (num <= 1000) {
  num *= 3;
  count++;
}

console.log(count);
console.log(num);

// 1. Создать массив `[2, 5, 9, 15, 1, 4]`.
// Выведите в консоль те элементы массива, которые больше 3-х, но меньше 10.
// 2. Найдите сумму четных чисел от 2 до 100.
// 3. Создать массив `[2, 5, 9, 3, 1, 4]`.
// Найдите сумму элементов этого массива.
// 4. С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-'.
// 5. Создать массив `[2, 5, 9, 0, 3, 1, 4]`.
// Запустите цикл, который будет по очереди выводить элементы этого массива в
// консоль до тех пор, пока не встретится элемент со значением 0. После этого
// цикл должен завершить свою работу.

const array8 = [2, 5, 9, 15, 1, 4];
const newArray = array.filter((el) => el > 3 && el < 10);
console.log(newArray);

let sum = 0;
for (let i = 0; i <= 100; i += 2) {
  sum += i;
}
console.log(sum);

const array9 = [2, 5, 9, 3, 1, 4];
let sum1 = 0;
for (let i = 0; i < array.length; i++) {
  sum += array9[i];
}
console.log(sum);

const sum2 = array9.reduce((acc, el) => acc + el, 0);
console.log(sum2);

let str = "";
for (let i = 1; i < 10; i++) {
  str += -i;
}

console.log(str + "-");

const array10 = [2, 5, 9, 0, 3, 1, 4];
for (let i = 0; i < array10.length; i++) {
  if (array[i] === 0) {
    break;
  }
  console.log(array[i]);
}

// 1. Создать массив из 10 случайных чисел от 0 до 100 включительно.
// Наобходимо вывести в консоль все числа, которые делятся и на 2, и на 3

// 2. Дан массив: `[1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3]`. Подсчитайте количество
// цифр 3 в этом массиве.

const array11 = [];
for (let i = 0; i < 10; i++) {
  array.push(Math.floor(Math.random() * 100));
}
const newArray1 = array11.filter((el) => el % 6 === 0);
console.log(array);
console.log(newArray1);

const array12 = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let count1 = 0;
for (let i = 0; i < array12.length; i++) {
  if (array12[i] === 3) {
    count1++;
  }
}
console.log(count1);
const count2 = array12.reduce((acc, el) => (el === 3 ? acc + 1 : acc), 0);
console.log(count2);

// 4. Дан массив: `[1, 2, 3, 4, 5]`.
// С помощью метода splice преобразуйте массив в следующий: [1, 4, 5]
const array13 = [1, 2, 3, 4, 5];
array13.splice(1, 2);
console.log(array13);
