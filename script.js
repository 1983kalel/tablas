let currentQuestion = {};

function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    currentQuestion = {
        num1: num1,
        num2: num2,
        answer: num1 * num2
    };
    document.getElementById('question').textContent = `${num1} x ${num2} = ?`;
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value);
    const messageElement = document.getElementById('message');

    if (userAnswer === currentQuestion.answer) {
        messageElement.textContent = '¡Excelente! ¡Lo has logrado! 🎉';
        messageElement.style.color = '#4ecdc4';
        setTimeout(() => {
            generateQuestion();
            document.getElementById('answer').value = '';
            messageElement.textContent = '';
        }, 1500);
    } else {
        messageElement.textContent = 'Inténtalo otra vez. ¡Tú puedes! 💪';
        messageElement.style.color = '#ff6b6b';
    }
}

generateQuestion();
