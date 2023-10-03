// Задание 1
// 1. Создайте объект с ключами от 1 до 7, в качестве
// значений содержащий имена дней недели. Выведите на
// экран “Вторник”
// 2. Создайте объект user с ключами 'name', 'surname', ‘age’.
// Выведите на экран фамилию, имя и возраст через дефис.
// 3. Добавьте в объект user свойство отчество, которое
// пользователь должен ввести с клавиатуры
// 4. Удалите свойство surname

const dayOfWeek = {
  1: "понедельник",
  2: "вторник",
  3: "среда",
  4: "четверг",
  5: "пятница",
  6: "суббота",
  7: "воскресенье",
};

console.log(dayOfWeek[2]);

const user = {
  name: "Dmitriy",
  surname: "Klimov",
  age: 34,
};
console.log(`${user.surname} - ${user.name} - ${user.age}`);
console.log(Object.value(user));

user.patronymic = prompt("Введите отчество: ");
console.log(user);
delete user.patronymic;
console.log(user);

// 1. Даны два массива: первый с названиями дней недели, а второй - с
// их порядковыми номерами:
// const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// const arr2 = [1, 2, 3, 4, 5, 6, 7];
// С помощью цикла создайте объект, ключами которого будут
// названия дней, а значениями - их номера.
// 2. const obj = {x: 1, y: 2, z: 3};
// Переберите этот объект циклом и возведите каждый элемент
// этого объекта в квадрат.

const arr1 = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
const arr2 = [1, 2, 3, 4, 5, 6, 7];

const daysOfWeek = {};
for (let i = 0; i < arr1.length; i++) {
  const dayName = arr1[i];
  const dayNumber = arr2[i];
  daysOfWeek[dayName] = dayNumber;
}
console.log(daysOfWeek);

const obj = { x: 1, y: 2, z: 3 };

const obj2 = Object.values(obj).map((element) => element ** 2);
console.log(obj2);

for (let key in obj) {
  obj[key] = obj[key] ** 2;
}
console.log(obj);

// const obj = {
//     key1: {
//     key1: 1,
//     key2: 2,
//     key3: 3,
//     },
//     key2: {
//     key1: 4,
//     key2: 5,
//     key3: 6,
//     },
//     key3: {
//     key1: 7,
//     key2: 8,
//     key3: 9,
//     },
//     }
// Найдите сумму элементов приведенного объекта.

const obj3 = {
  key1: {
    key1: 1,
    key2: 2,
    key3: 3,
  },
  key2: {
    key1: 4,
    key2: 5,
    key3: 6,
  },
  key3: {
    key1: 7,
    key2: 8,
    key3: 9,
  },
};

let sum = 0;

for (let key in obj3) {
  for (let innerKey in obj3[key]) {
    sum += obj3[key][innerKey];
  }
}
console.log(sum);

const sumElement = (val) =>
  val instanceof Object
    ? Object.values(val).reduce((acc, n) => acc + sumElement(n), 0)
    : val;
console.log(sumElement(obj));

// Задание 4:
// 1. Создайте объект riddle.
// 2. Добавьте свойства question со значениями(текст загадки) и
// answer (ответ на загадку).
// 3. Создайте метод askQuestion который спрашивает у пользователя вопрос
// question и сравнивает ответ с answer.
// В случае верного ответа, необходимо поздравить пользователя.
// В случае, если пользователь ответил неверно, необходимо подсказать,
// подсказок может быть несколько.
// Если пользователь ответил неверно после всех подсказок, то в консоль
// выводится текст: “вы проиграли”.

const riddle = {
  question: "зимой и летом одним цветом",
  answer: "ёлка",
  listHint: ["колючая", "зеленая", "не листья а иголки", "пахнет пихтой"],
  askQuestion() {
    for (let i = 0; i < this.listHint.length; i++) {
      const answer = prompt(this.question);
      if (answer === this.answer) {
        return alert("вы угадали");
      }
      alert(this.listHint[i]);
    }
    alert("проиграли");
  },
};
riddle.askQuestion();

/*
Новый фильм "Мстители" только что вышел! В кассе кинотеатра много людей,
стоящих в огромной очереди. Каждый из них имеет по одной купюре, номиналом
100, 50 или 25 $.
Билет "Мстители" стоит 25 $.
Вася сейчас работает клерком. Он хочет продать билет каждому человеку в этой
очереди.
Может ли Вася продать билет каждому человеку и дать сдачу, если у него
изначально нет денег и он продает билеты строго в порядке очереди?
Верните YES, если Вася сможет продать билет каждому человеку и дать сдачу.
В противном случае верните NO.
*/

function tickets(people) {
  // let moneyVasy = 0;
  const billVasya = {
    25: 0,
    50: 0,
    100: 0,
  };
  for (const billPerson of people) {
    if (billPerson === 25) {
      billVasya[25]++;
    } else if (billPerson === 50) {
      if (billVasya[25] === 0) {
        return "NO";
      }
      billVasya[50]++;
      billVasya[25]--;
    } else if (billPerson === 100) {
      if (billVasya[50] >= 1 && billVasya[25] >= 1) {
        billVasya[100]++;
        billVasya[50]--;
        billVasya[25]--;
      } else if (billVasya[25] >= 3) {
        billVasya[100]++;
        billVasya[25] -= 3;
      } else {
        return "NO";
      }
    }
  }
  return "YES";
}
console.log(tickets([25, 50, 25, 100])); // "YES"
console.log(tickets([25, 25, 25, 100])); // "YES"
console.log(tickets([25, 25, 50])); // "YES"
console.log(tickets([25, 100])); // "NO" (У Васи нет сдачи со 100)
console.log(tickets([25, 25, 50, 50, 100])); // "NO"
console.log(tickets([25, 25, 25, 25, 25, 100, 100])); // "NO"
console.log(tickets([25, 25, 50, 100, 25, 50, 25, 100, 25, 25, 25, 100])); // "YES"
console.log(tickets([25, 25, 25, 100, 25, 25, 50, 100, 25, 25, 25, 100])); // "YES"
console.log(
  tickets([25, 25, 25, 25, 25, 25, 25, 50, 50, 50, 100, 100, 100, 100])
); // => "NO"
console.log(tickets([25, 25, 50])); // "YES"
console.log(tickets([25, 100])); // "NO"
console.log(tickets([25, 25, 50, 50, 100])); // "NO"
console.log(tickets([25, 50, 50])); // "NO"
console.log(tickets([25, 25, 25, 25, 25, 50, 100])); // "YES"
console.log(tickets([25, 100])); // "NO"
