document.addEventListener("DOMContentLoaded", function () {
    const burgerIcon = document.getElementById("burger-icon");
    const mobileNav = document.getElementById("mobile-nav");

    burgerIcon.addEventListener("click", function () {
      mobileNav.classList.toggle("active"); // Добавляем или удаляем класс "active"
    });
  });