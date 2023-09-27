"use strict";

/*
Необходимо попросить пользователя ввести число.
Если пользователь ввел отличное от числа значение, необходимо вывести в консоль
строку: "Значение задано неверно", иначе необходимо будет вызвать функцию 
(нужно будет ее создать), которая будет принимать введенное пользователем 
число. Функция должна вычесть из переданного ей числа 13% и вывести в консоль 
сообщение "Размер заработной платы за вычетом налогов равен N."
*/

const userSalary = +prompt("Введите число:");

if (Number.isFinite(userSalary) && userSalary !== 0 && userSalary > 0) {
  netSalary(userSalary);
} else {
  console.log("Значение задано неверно");
}

/**
 * Вычисляет размер заработной платы после вычета налогов и выводит сообщение в консоль.
 * @param {number} salary - Зарплата до вычета налогов.
 * @returns {void}
 */
function netSalary(salary) {
  const taxRate = 0.13;
  salary = salary - salary * taxRate;
  console.log(`Размер заработной платы за вычетом налогов равен ${salary}`);
}
