function reverseString(str) {
    return str.split('').reverse().join('');
}

function reverseGame() {
    
    alert('Добро пожаловать в игру "Переверни текст"!');
    const userInput = prompt('Введите текст, который нужно перевернуть:');
    
    if (userInput === null || userInput.trim() === '') {
        alert('Вы не ввели текст! Попробуйте еще раз.');
        return;
    }
    
    const reversedText = reverseString(userInput);
    
    alert(`Оригинальный текст: ${userInput}\nПеревернутый текст: ${reversedText}`);
    
    const playAgain = confirm('Хотите перевернуть другой текст?');
    if (playAgain) {
        reverseGame();
    } else {
        alert('Спасибо за игру! До свидания!');
    }
}