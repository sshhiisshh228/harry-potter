document.getElementById("loginBtn").addEventListener("click", function() {
    const login = prompt("Введите логин:");
    const birthDate = prompt("Введите дату рождения (гггг-мм-дд):");
    const gender = prompt("Введите пол (мужской/женский):");

    if (login && birthDate && (gender === 'мужской' || gender === 'женский')) {
        document.querySelector('.auth').innerHTML = `<span>${login}</span> <button id="logoutBtn">Выйти</button>`;
    }
});

document.addEventListener("click", function(event) {
    if (event.target.id === 'logoutBtn') {
        document.querySelector('.auth').innerHTML = `<button id="loginBtn">Войти</button>`;
    }
});
