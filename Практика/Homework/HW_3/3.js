"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

/**
 * Функция находит максимальное значение среди трех чисел и выводит сообщение.
 * @param {number} num1 - Первое число.
 * @param {number} num2 - Второе число.
 * @param {number} num3 - Третье число.
 * @returns {void}
 */

const userNumber1 = +prompt(`Введите первое число:`);
const userNumber2 = +prompt(`Введите второе число:`);
const userNumber3 = +prompt(`Введите третье число:`);

if (!isNaN(userNumber1) && !isNaN(userNumber2) && !isNaN(userNumber3)) {
  findMaxNumber(userNumber1, userNumber2, userNumber3);
} else {
  console.log("Одно или несколько чисел введены некорректно");
}

/**
 * Функция находит максимальное значение среди трех чисел и выводит сообщение.
 * @param {number} num1 - Первое число.
 * @param {number} num2 - Второе число.
 * @param {number} num3 - Третье число.
 * @returns {void}
 */

function findMaxNumber(num1, num2, num3) {
  const maxNumber = Math.max(num1, num2, num3);
  console.log(
    `Максимальное значение среди чисел ${num1}, ${num2}, ${num3} равно ${maxNumber}.`
  );
}
