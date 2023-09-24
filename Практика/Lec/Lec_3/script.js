function helloName(name) {
  console.log(name);
}

helloName("Dmitriy");

let count = 5;

function counter() {
  return count++;
}

counter();

sayHello();

function sayHello() {
  alert("Привет");
  alert("Нажали на кнопку");
}

const hello2 = () => {
  alert("Привет 2");
};

hello2();

// Игра в загадки

let userAnswer = prompt("Зимой и летом одним цветом");

if (userAnswer === "елка") {
  console.log("Угадал");
} else {
  console.log("Не угадал");
}

let userAnswer2 = prompt(
  "Сидит дед во 100 шуб одет, кто его раздевает тот слезы проливает"
);

if (userAnswer2 === "лук") {
  console.log("Угадал");
} else {
  console.log("Не угадал");
}

function askQuestion(answer, question) {
  const userAnswer = prompt(question);

  if (userAnswer.toLowerCase() === answer) {
    console.log("Угадал");
  } else {
    console.log("Не угадал");
  }
}

askQuestion(
  "лук",
  "Сидит дед во 100 шуб одет, кто его раздевает тот слезы проливает"
);
askQuestion("елка", "Зимой и летом одним цветом");


function puzzle() {
    askQuestion(
        "лук",
        "Сидит дед во 100 шуб одет, кто его раздевает тот слезы проливает"
      );
      askQuestion("елка", "Зимой и летом одним цветом");      
}
