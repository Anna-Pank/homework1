function simpleArithmetic() {
    const operations = [
        { symbol: '+', calculate: (a, b) => a + b },
        { symbol: '-', calculate: (a, b) => a - b },
        { symbol: '*', calculate: (a, b) => a * b },
        { symbol: '/', calculate: (a, b) => a / b }
    ];
    
    let score = 0;
    const totalRounds = 5;
    const maxNumber = 10;
    
    alert('Добро пожаловать в арифметическую игру!');
    alert(`Решите ${totalRounds} примеров.`);
    
    for (let round = 1; round <= totalRounds; round++) {
        const operation = operations[Math.floor(Math.random() * operations.length)];
        
        let a, b;
        
        switch(operation.symbol) {
            case '+':
                a = Math.floor(Math.random() * maxNumber) + 1;
                b = Math.floor(Math.random() * maxNumber) + 1;
                break;
            case '-':
                a = Math.floor(Math.random() * maxNumber) + 1;
                b = Math.floor(Math.random() * a) + 1;
                break;
            case '*':
                a = Math.floor(Math.random() * maxNumber) + 1;
                b = Math.floor(Math.random() * maxNumber) + 1;
                break;
            case '/':
                b = Math.floor(Math.random() * maxNumber) + 1;
                const multiplier = Math.floor(Math.random() * maxNumber) + 1;
                a = b * multiplier;
                break;
        }
        
        const correctAnswer = operation.calculate(a, b);
        
        const question = `Реши пример: ${a} ${operation.symbol} ${b} = ?`;
        const userInput = prompt(question);
        
        if (userInput === null) {
            alert('Игра отменена.');
            return;
        }
        
        const userAnswer = parseFloat(userInput);
        
        if (isNaN(userAnswer)) {
            alert('Вы ввели не число!');
        } else if (Math.abs(userAnswer - correctAnswer) < 0.001) {
            alert('✅ Правильно!');
            score++;
        } else {
            confirm(`❌ Неверно. Правильный ответ: ${correctAnswer}`);
        }
    }
    
    alert(`Игра окончена! Ваш результат: ${score} из ${totalRounds}`);
}
