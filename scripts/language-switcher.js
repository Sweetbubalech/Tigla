function changeLanguage(lang) {
    document.querySelectorAll("[data-lang]").forEach((element) => {
      element.style.display = "none";
    });

    document
      .querySelectorAll(`[data-lang="${lang}"]`)
      .forEach((element) => {
        element.style.display = "block";
      });

    localStorage.setItem("language", lang);
  }
  const savedLanguage = localStorage.getItem("language") || "ru";
  changeLanguage(savedLanguage);