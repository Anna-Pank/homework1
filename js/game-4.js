const quiz = [
    {
        question: "Какой цвет небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2,
        textAnswers: ["синий"]
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2,
        textAnswers: ["семь", "7"]
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2,
        textAnswers: ["пять", "5"]
    }
];

function normalizeAnswer(answer) {
    return answer.toString().toLowerCase().trim();
}

function isAnswerCorrect(userAnswer, question) {
    if (parseInt(userAnswer) === question.correctAnswer) {
        return true;
    }
    
    const normalizedUserAnswer = normalizeAnswer(userAnswer);
    return question.textAnswers.some(
        correctAnswer => normalizeAnswer(correctAnswer) === normalizedUserAnswer
    );
}

function gameQuiz() {
    let score = 0;
    let cancelled = false;

    const welcome = confirm("Добро пожаловать в викторину!\nОтветьте на 3 вопроса.");
    if (!welcome) {
        alert("Игра отменена. До свидания!");
        return;
    }

    for (let i = 0; i < quiz.length; i++) {
        const currentQuestion = quiz[i];
        let questionText = `${currentQuestion.question}\n`;
        questionText += currentQuestion.options.join('\n');

        const userInput = prompt(questionText);
        
        if (userInput === null) {
            cancelled = true;
            const quit = confirm("Вы действительно хотите выйти?");
            if (quit) {
                alert(`Игра прервана.`);
                return;
            } else {
                i--;
                continue;
            }
        }

        if (isAnswerCorrect(userInput, currentQuestion)) {
            score++;
            alert("✅ Правильно!");
        } else {
            alert(`❌ Неправильно!`);
        }
    }

    if (!cancelled) {
        alert(`🎉 Викторина завершена!\nВаш результат: ${score} из ${quiz.length}`);
        
        const playAgain = confirm("Хотите сыграть еще раз?");
        if (playAgain) {
            gameQuiz();
        } else {
            alert("Спасибо за игру!");
        }
    }
}