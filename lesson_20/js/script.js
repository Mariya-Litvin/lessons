//--------- Зміна мови сайту на абревіатуру при розширенні екрану менше 480px

// Викликаємо функцію при завантаженні сторінки
window.addEventListener("load", adjustSelectOptions);

// Викликаємо функцію при кожному зміні розміру вікна
window.addEventListener("resize", adjustSelectOptions);

function adjustSelectOptions(event) {
  const viewportWidth = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );
  const selectOption = document.querySelector(".header__select");
  const options = Array.from(selectOption.options);
  if (viewportWidth <= 480) {
    options.forEach((element) => {
      let language = element.text;
      //   console.log(option);
      let abbreviation = getAbbreviation(language);
      if (abbreviation) {
        element.text = abbreviation;
      }
    });
  } else {
    options.forEach((element) => {
      element.text = element.getAttribute("value") || "";
    });
  }
}

function getAbbreviation(language) {
  switch (language) {
    case "English (United States)":
      return "EN";
    case "Ukrainian":
      return "UA";
    case "Italian":
      return "IT";
    case "German":
      return "DE";
    case "Polish":
      return "PL";
    default:
      return null;
  }
}

//-------Закриття рядка пошуку при відправленні форми------

const form = document.querySelector(".form-search");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (document.documentElement.classList.contains("search-open")) {
    document.documentElement.classList.remove("search-open");
  }
  form.reset();
});

document.addEventListener("click", documentAction);
function documentAction(e) {
  const targetElement = e.target;
  // Відкриття рядка пошуку на розширенні до 700px

  if (targetElement.closest(".button-header__search")) {
    document.documentElement.classList.toggle("search-open");

    // Показати пароль
  } else if (targetElement.closest(".form-login__box")) {
    const inputPass = document.querySelector("#password");
    const icon = document.querySelector(".form-login__icon");
    const text = document.querySelector(".form-login__text-password");

    if (inputPass.getAttribute("type") === "password") {
      inputPass.setAttribute("type", "text");
      text.textContent = "Hide";
      icon.classList.remove("icon-show");
      icon.classList.add("icon-hide");
    } else {
      inputPass.setAttribute("type", "password");
      text.textContent = "Show";
      icon.classList.remove("icon-hide");
      icon.classList.add("icon-show");
    }
  }
}
