// Відкриття-закриття меню-бургер

const icon = document.querySelector(".icon-menu");
icon.addEventListener("click", function () {
  document.documentElement.classList.toggle("menu-open");
});

// Динамічний адаптив

class DynamicAdapt {
  constructor(type) {
    this.type = type;
  }

  init() {
    // массив объектов
    this.оbjects = [];
    this.daClassname = "_dynamic_adapt_";
    // массив DOM-элементов
    this.nodes = [...document.querySelectorAll("[data-da]")];

    // наполнение оbjects объктами
    this.nodes.forEach((node) => {
      const data = node.dataset.da.trim();
      const dataArray = data.split(",");
      const оbject = {};
      оbject.element = node;
      оbject.parent = node.parentNode;
      оbject.destination = document.querySelector(`${dataArray[0].trim()}`);
      оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
      оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
      оbject.index = this.indexInParent(оbject.parent, оbject.element);
      this.оbjects.push(оbject);
    });

    this.arraySort(this.оbjects);

    // массив уникальных медиа-запросов
    this.mediaQueries = this.оbjects
      .map(
        ({ breakpoint }) =>
          `(${this.type}-width: ${breakpoint}px),${breakpoint}`
      )
      .filter((item, index, self) => self.indexOf(item) === index);

    // навешивание слушателя на медиа-запрос
    // и вызов обработчика при первом запуске
    this.mediaQueries.forEach((media) => {
      const mediaSplit = media.split(",");
      const matchMedia = window.matchMedia(mediaSplit[0]);
      const mediaBreakpoint = mediaSplit[1];

      // массив объектов с подходящим брейкпоинтом
      const оbjectsFilter = this.оbjects.filter(
        ({ breakpoint }) => breakpoint === mediaBreakpoint
      );
      matchMedia.addEventListener("change", () => {
        this.mediaHandler(matchMedia, оbjectsFilter);
      });
      this.mediaHandler(matchMedia, оbjectsFilter);
    });
  }

  // Основная функция
  mediaHandler(matchMedia, оbjects) {
    if (matchMedia.matches) {
      оbjects.forEach((оbject) => {
        // оbject.index = this.indexInParent(оbject.parent, оbject.element);
        this.moveTo(оbject.place, оbject.element, оbject.destination);
      });
    } else {
      оbjects.forEach(({ parent, element, index }) => {
        if (element.classList.contains(this.daClassname)) {
          this.moveBack(parent, element, index);
        }
      });
    }
  }

  // Функция перемещения
  moveTo(place, element, destination) {
    element.classList.add(this.daClassname);
    if (place === "last" || place >= destination.children.length) {
      destination.append(element);
      return;
    }
    if (place === "first") {
      destination.prepend(element);
      return;
    }
    destination.children[place].before(element);
  }

  // Функция возврата
  moveBack(parent, element, index) {
    element.classList.remove(this.daClassname);
    if (parent.children[index] !== undefined) {
      parent.children[index].before(element);
    } else {
      parent.append(element);
    }
  }

  // Функция получения индекса внутри родителя
  indexInParent(parent, element) {
    return [...parent.children].indexOf(element);
  }

  // Функция сортировки массива по breakpoint и place
  // по возрастанию для this.type = min
  // по убыванию для this.type = max
  arraySort(arr) {
    if (this.type === "min") {
      arr.sort((a, b) => {
        if (a.breakpoint === b.breakpoint) {
          if (a.place === b.place) {
            return 0;
          }
          if (a.place === "first" || b.place === "last") {
            return -1;
          }
          if (a.place === "last" || b.place === "first") {
            return 1;
          }
          return 0;
        }
        return a.breakpoint - b.breakpoint;
      });
    } else {
      arr.sort((a, b) => {
        if (a.breakpoint === b.breakpoint) {
          if (a.place === b.place) {
            return 0;
          }
          if (a.place === "first" || b.place === "last") {
            return 1;
          }
          if (a.place === "last" || b.place === "first") {
            return -1;
          }
          return 0;
        }
        return b.breakpoint - a.breakpoint;
      });
      return;
    }
  }
}

// Создаем экземпляр класса DynamicAdapt с типом 'max'
const dynamicAdapt = new DynamicAdapt("max");

// Вызываем метод init() для этого экземпляра
dynamicAdapt.init();

// Зміна типу input type="text" на input type="date"

const inputDate = document.querySelector("input[name='date']");

// только так работает на iphone
inputDate.addEventListener("focus", () => {
  // input.style.backgroundImage = "none";
  inputDate.style.display = "none"; // Скрыть поле ввода текста
  const dateInput = document.createElement("input");
  dateInput.setAttribute("type", "date");
  dateInput.setAttribute("name", "date");
  dateInput.setAttribute("class", "input");
  dateInput.style.backgroundImage = "none";
  inputDate.parentNode.insertBefore(dateInput, inputDate); // Вставить новое поле ввода перед оригинальным
  dateInput.focus(); // Фокусировка на новом поле ввода даты
});

// Зміна типу input type="text" на input type="time"

const inputTime = document.querySelector("input[name='time']");

inputTime.addEventListener("focus", () => {
  // input.style.backgroundImage = "none";
  inputTime.style.display = "none"; // Скрыть поле ввода текста
  const dateInput = document.createElement("input");
  dateInput.setAttribute("type", "time");
  dateInput.setAttribute("name", "time");
  dateInput.setAttribute("class", "input");
  inputTime.parentNode.insertBefore(dateInput, inputTime); // Вставить новое поле ввода перед оригинальным
  dateInput.focus(); // Фокусировка на новом поле ввода даты
});

// input.addEventListener("focus", () => {
//   input.style.backgroundImage = "none";
// });

// input.addEventListener("blur", () => {
//   input.style.backgroundImage = `url("../img/icons/icon-calendar.svg")`;
// });
