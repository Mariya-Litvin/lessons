"use strict";

// Задача №1
// Дано в html: три елементи з класом item.
// При кліку на кожен з елментів додати клас active,
// при повторному кліку прибрати клас

//------- 1 Варіант (Делегування подій) --------------

document.addEventListener("click", documentAction);

function documentAction(e) {
  const targetElement = e.target.closest(".item");
  if (targetElement) targetElement.classList.toggle("active");
}

//---------2 варіант-------------------------------

// const elements = document.querySelectorAll(".item");
// if (elements.length) {
//   elements.forEach((element) => {
//     element.addEventListener("click", addClass);
//   });
// }

// function addClass(e) {
//   const targetElement = e.target.closest(".item");
//   if (targetElement) {
//     targetElement.classList.toggle("active");
//   }
// }

//--------------------------------------------------------

// Задача №2
// Дано в css/scss: body прозорий
// При повному завантаженню сторінки додати клас до body який прибирає прозорість.

window.addEventListener("load", pageLoaded);

function pageLoaded() {
  document.body.classList.add("opacity");
}
//-------------------------------------------------------------

// Задача №3
// Дано в html: header main footer
// Пи наведенні курсору на header змінювати колір фону у footer.
// Коли курсор йде з header повертати початковий фон для footer.

const header = document.querySelector("header");
const footer = document.querySelector("footer");
if (header) {
  header.addEventListener("mouseenter", toggleColorFooter);
  header.addEventListener("mouseleave", toggleColorFooter);
}

function toggleColorFooter() {
  if (footer) {
    footer.classList.toggle("color");
  }
}

//------------------------------------------------------------

// Задача №4
// Дано в html: текст, елемент з класом item, текст. Так, що елемент з класом item за межами в'юпотрта.
// Створити функцію яка будує інтервал який буде змінювати контент в елементі item виводячи цифру яка збільшується на одиницю: 1 2 3 ... і т.д.
// Затримка між зміною числа, та до якого числа має працювати інтервал має задаватись в дата атрибутах елемента item.
// Функція має запустатить коли ми доскролюємо до елементу item (його видно), і не запускатись повторно.

// const counterElement = document.querySelector(".item-element");

function setElementInterval(element) {
  // if (!element) return;

  const startCounter = parseInt(element.dataset.start, 10);
  const endCounter = parseInt(element.dataset.end, 10);
  const intervalCounter = parseInt(element.dataset.interval, 10);

  let counter = startCounter;
  let timer = setInterval(() => {
    // console.log(counter);
    if (counter === endCounter) {
      clearInterval(timer);
    }
    element.textContent = counter;
    ++counter;
  }, intervalCounter);
}

let options = {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 0.3,
};

let callback = (entries, observer) => {
  entries.forEach((entry) => {
    const targetElement = entry.target;
    if (entry.isIntersecting) {
      setElementInterval(targetElement);
      observer.unobserve(targetElement);
    }
  });
};

let observer = new IntersectionObserver(callback, options);

let target = document.querySelector(".item-element");
observer.observe(target);
