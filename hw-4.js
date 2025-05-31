for (let i = 0; i < 2; i++) {
    console.log("Привет");
}

for (let a = 1; a <= 5; a++) {
    console.log(a);
}

for (let b = 7; b <= 22; b++) {
    console.log(b);
}

const obj = {
    Коля: 200,
    Вася: 300,
    Петя: 400
}
for (const key in obj) {
    console.log(`${key} - зарплата ${obj[key]} долларов`);
}

let c = 1000;
while (c > 50) {
    console.log(c);
    c = c / 2;
}
let sum = 5


for (let d = 2; d <= 31; d += 7) {
    console.log("Сегодня пятница, ${d}-е число. Необходимо подготовить отчет.");
}