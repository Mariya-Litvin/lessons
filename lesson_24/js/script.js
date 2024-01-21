"use strict";

// Текст з ефектом друку

const text = "Hello world!";
let template = ``;

function createText(someText) {
  for (let i = 0; i < someText.length; ++i) {
    let item = someText[i];
    const delay = 0.1 * i; // Лінійне збільшення затримки

    if (item === " ") {
      item = "&#160;";
    }

    template += `<span style="animation-delay: ${delay}s">${item}</span>`;
  }
}

createText(text);

const page = document.querySelector(".page");
page.insertAdjacentHTML("beforeend", template);

//---------------------------------------------------------------

// Відповіді на задачі

// Задача №1
// Що потрапить в консоль?

let someVar = 0;
++someVar;

// Після префіксного інкременту someVar = 1

if (someVar) {
  console.log(someVar);
}

// У консоль потрапить число 1, так як інструкція if переведе 1 до true
// (число 1 це true), а значить виконається код, що є у дужках.

//-----------------------------------------------------------------------

// Задача №2
// За допомогою циклу FOR виведіть в консоль 10 рядків:
// Пункт №1
// Пункт №2
// і т.д.

for (let i = 1; i <= 10; ++i) {
  console.log(`Пункт №${i}`);
}

// Задаємо циклу for, щоб він на кожному колі циклу від 1 до 10 включно,
//  додавав 1 і виводив у консоль за допомогою
//  інтерполяції результат кожного кола циклу.

//-----------------------------------------------------------------------------

// Задача №3
// Що потрапить в консоль ?

if (2 * 20 <= 10 || (30 / 2 < 5 && 10 <= "10") || 20 === "20") {
  console.log("000");
}

// У консолі буде пусто, бо жоден із виразів не задовольнить умову if
// 1) if (false || (false && true) || false)
// 2) if (false || false || false)
// Логічний оператор "Або" шукає перший true і зупиняється на ньому,
// або якщо усе false, то виводить останній false.

//-------------------------------------------------------

// Задача №4
// Створіть функцію, яка повертає результат ділення числа a на число b з додаванням рядка "Результат ділення: "
// Викличте функцію передаючі різні значення, у тому числі не передаючи зовсім.
// Функція не має повертати NaN, Infinite або помилку

function getResultDivision(a, b) {
  a = parseFloat(a);
  b = parseFloat(b);
  if (b == 0 || isNaN(a) || isNaN(b) || !isFinite(a) || !isFinite(b)) {
    return console.log(`Результат ділення відобразити неможливо`);
  } else {
    let result = a / b;
    return console.log(`Результат ділення: ${result}`);
  }
}

// У цій задачі за допомогою логічного оператора "або" я перевіряю, якшо b == 0(будь то число 0 чи рядок "0"), або a чи b є не числовим значенням, або a чи b не є кінечним числом, то виводимо у консоль, що "Результат ділення відобразити неможливо", а якшо все добре, то ділимо a/b і резульат ділення виводимо у консоль.

getResultDivision();
getResultDivision(0, "0");
getResultDivision(NaN, 4);
getResultDivision(2, Infinity);
getResultDivision(NaN, NaN);
getResultDivision(Infinity, -Infinity);
getResultDivision(5, -Infinity);
getResultDivision(7, 7);
getResultDivision(2, 10);
getResultDivision(2, -10);
getResultDivision(2, "20");
getResultDivision(2, "abc15");
getResultDivision(2, "12px");
getResultDivision("55.212px", "100");
getResultDivision(10, "2gg");
getResultDivision(8, 0);
getResultDivision("abc", 5);

//-----------------------------------------------------

// Задача №5
// Створіть масив даних - 5 елементів, один з яких число 10
// Обробіть масив за допомогою методу перебору
// Перевіряйте елемент на відповідність числу 10, та у разі відповідності, виводьте в консоль

let someArray = ["10", "Петро", true, 7, 10];
someArray.forEach((element) => {
  if (element === 10) {
    console.log(element);
  }
});

// За допомогою циклу forEach перебираємо кожен елемент масиву і за допомогою інстукції if та оператора строгої рівності "===" перевіряємо чи дорівнює кожен елемент масиву числу 10.
