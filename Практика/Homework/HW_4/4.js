"use strict";

/*
Необязательное задание. 
Необходимо вывести горку в консоль (используя цикл for), как показано на
рисунке, только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx
*/

for (let i = ""; i.length < 20; console.log((i += "x")));

for (let i = 20; i >= 1; console.log("x".repeat(i)), i--);
