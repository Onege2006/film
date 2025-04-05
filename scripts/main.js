document.addEventListener("DOMContentLoaded", () => {
  const languageButtons = document.querySelectorAll("[data-lang-switch]");

  // Загружаем язык из localStorage
  const savedLanguage = localStorage.getItem("language") || "en";
  switchLanguage(savedLanguage);

  // Привязываем обработчик к кнопкам переключения языка
  languageButtons.forEach(button => {
    button.addEventListener("click", () => {
      const selectedLanguage = button.dataset.langSwitch;
      switchLanguage(selectedLanguage);
      localStorage.setItem("language", selectedLanguage); // Сохраняем язык
    });
  });

  function switchLanguage(lang) {
    if (translations[lang]) {
      document.querySelectorAll("[data-translate]").forEach(el => {
        const key = el.dataset.translate;
        if (translations[lang][key]) {
          el.textContent = translations[lang][key];
        }
      });
    } else {
      console.error("Language not supported:", lang);
    }
  }
});
// Получение выбранного языка из localStorage или установка по умолчанию
const userLang = localStorage.getItem("lang") || "en";
setLanguage(userLang);

// Функция для смены языка
function setLanguage(lang) {
  const elements = document.querySelectorAll("[data-translate]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-translate");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Сохранить текущий язык в localStorage
  localStorage.setItem("lang", lang);
}

// Переключение языка при выборе
document.querySelectorAll(".lang-selector").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const selectedLang = e.target.getAttribute("data-lang");
    setLanguage(selectedLang);
  });
});
