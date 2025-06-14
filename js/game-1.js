function guessNumber() {
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    alert("Я загадал число от 1 до 100. Попробуй угадать!");

    while (true) {
        const userInput = prompt("Введи свою догадку:");

        if (userInput === null) {
            alert('Игра отменена.');
            break;
        }
        attempts++;

        const guess = Number(userInput);
        if (isNaN(guess)) {
            alert("Пожалуйста, введи число!");
            continue;
        }
        
        if (guess === secretNumber) {
            alert(`Поздравляю! Ты угадал число ${secretNumber} за ${attempts} попыток.`);
            break;
        } else if (guess < secretNumber) {
            alert("Мое число больше. Попробуй еще раз!");
        } else {
            alert("Мое число меньше. Попробуй еще раз!");
        }
    }
}



