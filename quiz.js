document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const answers = {
        question1: 'Гриффиндор',
        question2: 'Кроша'
    };
    let score = 0;
    const userAnswers = {
        question1: this.question1.value,
        question2: this.question2.value
    };

    for (const question in answers) {
        if (userAnswers[question].toLowerCase() === answers[question].toLowerCase()) {
            score++;
        }
    }

    document.getElementById("result").innerHTML = `Вы ответили правильно на ${score} из ${Object.keys(answers).length} вопросов.`;
});