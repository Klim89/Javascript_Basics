// Задание 1:
// 1. Установить расширение форматирования кода “Prettier”: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
// Если не загружается, можно скачать здесь: https://open-vsx.org/extension/esbenp/prettier-vscode
// 2. Установить расширение “JavaScript Snippet Pack”: https://marketplace.visualstudio.com/items?itemName=akamud.vscode-javascript-snippet-pack
// Если не загружается, можно скачать здесь: https://disk.yandex.ru/d/ktnuTXmnzVEUCw
// 3. Создайте файлы для вашей первой программы: index.html и script.js.
// 4. Подключите файл `script.js` к `index.html`.
// 5. В файле script.js выведите в консоль текст “Текст из script.js!”.
// 6. В файле `index.html` создайте скрипт (без подключения отдельного js-файла), который выводет в консоль текст “Текст из index.html”.
// 7. Проверьте работоспособность кода.

"use strict";

console.log("Текст из script.js!");
let param = 16;
console.log(param);

// Задание 2:
// 1. Создайте переменную `num` и присвойте ей значение `123`. Выведите значение этой переменной в консоль.
// 2. Создайте переменную `а` и присвойте ей значение `5`, переопределите переменную `а` на значение `7`, выведите переменную `а` в консоль.
// 3. Создайте переменную `b`. Запишите в нее сумму чисел `1`, `2` и `3`. С помощью функции `console.log` выведите в консоль содержимое переменной `b`.
/* 4. Создайте два вида комментариев в вашем коде, добавьте в них произвольный текст.*/

const num = 123;
console.log(num);

let a = 5;
a = 7;
console.log(a);

const b = 1 + 2 + 3;
console.log(b);

// Задание 3:
// 1. Создайте две переменные, одна будет хранить ваш возраст (девушкам всегда 18), а другая переменная будет хранить текущий год (все созданные переменные должны быть логично названы).
// - Создайте переменную суммы и присвойте сумму чисел из двух переменных.
// - Создайте переменную разности и присвойте разность текущего года и вашего возраста.
// - Создайте переменную произведения и присвойте произведение чисел двух переменных.
// - Создайте переменную частного и присвойте деление чисел текущего года к вашему возрасту.
// 2. Выведите в консоль все созданные переменные.
// 3. Сложите все созданные переменные и выведите результат в консоль.

const age = 34;
const currentYear = 2023;

const sumTemp = age + currentYear;
const difTemp = currentYear - age;
const mulTemp = age * currentYear;
const divTemp = currentYear / age;
console.log(sumTemp, difTemp, mulTemp, divTemp);
console.log(sumTemp + difTemp + mulTemp + divTemp);

// Задание 4:
// Не запуская код, определите, что отобразится в консоли:
let a1 = 5 + 5 * 3 + 3;
console.log(a1);
// Не запуская код, определите, что отобразится в консоли:
let b1 = 8 / 2 + 2;
console.log(b1);
// Не запуская код, определите, что отобразится в консоли:
let c = (2 + 3) * (2 + 3);
console.log(c);
// Не запуская код, определите, что отобразится в консоли:
let d = (2 + 3) * 2 + 3;
console.log(d);
// Не запуская код, определите, что отобразится в консоли:
let e = (2 * 8) / 4;
console.log(e);
// Не запуская код, определите, что отобразится в консоли:
let f = 2 * (8 / 4);
console.log(f);

// Задание 5:
// 1. Запишите в переменную `a` число `0.1`, а в переменную `b` - число `0.2`. Найдите сумму значений этих переменных и выведите ее на экран.
// 2. Создайте переменную `c`, запишите в нее какое-нибудь положительное или отрицательное число. Выведите на экран это число с обратным знаком.

const a2 = 0.1;
const b2 = 0.2;
console.log(a2 + b2);
const c2 = 5;
console.log(-c2);
const PI = 3.141592653589;
console.log(PI);
console.log(PI.toFixed(3));
console.log(Math.round(PI * 1000));
console.log(Math.floor(PI * 1000));
console.log(Math.ceil(PI * 1000));
console.log(Math.trunc(PI * 1000));


// Задание 6: 
// 1. Создайте строку с вашем именем и строку с вашей фамилией. Выведите эти данные в консоль.
// 2. Создайте переменную с текстом 'java' и переменную с текстом 'script'. С помощью этих переменных и операции конкатенации строк выведите в консоль строку 'javascript'.
// 3. Создайте переменную с текстом 'hello' и переменную с текстом 'world'. С помощью этих переменных и операции конкатенации строк выведите в консоль строку 'hello world', желательно использовать бэктики (обратные кавычки).

const firstName = 'Dmitriy';
const familyName = 'Klimov';
console.log(firstName + ' ' + familyName);

const temp1 = 'java';
const temp2 = 'script';
console.log(temp1 + temp2);

const temp3 = 'hello';
const temp4 = 'world';
console.log(`${temp3} ${temp4}`);

// Преобразование в число
const temp5 = '123.34verw333'
console.log(Number.parseInt(temp5));
console.log(Number.parseFloat(temp5));
console.log(+temp5);
console.log(Number(temp5));