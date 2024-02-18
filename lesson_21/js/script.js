//-------Закриття рядка пошуку при відправленні форми------

// const form = document.querySelector(".form-search");
// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   if (document.documentElement.classList.contains("search-open")) {
//     document.documentElement.classList.remove("search-open");
//   }
//   form.reset();
// });

// document.addEventListener("click", documentAction);
// function documentAction(e) {
//   const targetElement = e.target;
//   // Відкриття рядка пошуку на розширенні до 700px

//   if (targetElement.closest(".button-header__search")) {
//     document.documentElement.classList.toggle("search-open");
//   }
// }

// Відкриття-закриття меню-бургер

const icon = document.querySelector(".icon-menu");
icon.addEventListener("click", function () {
  document.documentElement.classList.toggle("menu-open");
});
