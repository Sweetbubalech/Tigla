javascript
Copy
document.querySelectorAll('.language-switcher button').forEach(button => {
    button.addEventListener('click', () => {
        const lang = button.getAttribute('data-lang');
        document.querySelectorAll('#content [data-lang]').forEach(element => {
            if (element.getAttribute('data-lang') === lang) {
                element.style.display = 'block'; // Показываем выбранный язык
            } else {
                element.style.display = 'none'; // Скрываем остальные языки
            }
        });
    });
});