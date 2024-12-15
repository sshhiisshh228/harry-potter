document.addEventListener('DOMContentLoaded', function () {
    // Логика для авторизации
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            // Логика авторизации
            const username = document.getElementById('username').value;
            // Сохранить данные пользователя (можно использовать localStorage)
            localStorage.setItem('username', username);
            // Перенаправить на главную страницу
            window.location.href = 'index.html';
        });
    }

    // Логика для теста
    const quizForm = document.getElementById('quizForm');
    if (quizForm) {
        quizForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const answer1 = quizForm.answer1.value.toLowerCase();
            const resultDiv = document.getElementById('result');
            if (answer1 === 'рон') {
                resultDiv.innerHTML = 'Правильно!';
            } else {
                resultDiv.innerHTML = 'Неправильно. Попробуйте еще раз.';
            }
        });
    }

    // Логика слайдера
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? 'block' : 'none';
        });
    }

    showSlide(currentSlide);
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 3000); // Менять слайд каждые 3 секунды
});