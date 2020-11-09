export const hw1 = () => {
    document.getElementById("task1.1").onclick = function basics1() {
        const name = prompt(`Введіть Ваше ім'я`);
        alert('Привіт ' + name);
    };

    document.getElementById("task1.2").onclick = function basics2() {
        const birthYear = prompt(`Введіть Ваш рік народження`);
        const year = 2020;
        const result = year - birthYear;
        alert('Вам ' + result + ' років');
    };

    document.getElementById("task1.3").onclick = function basics3() {
        const side = prompt(`Введіть довжину сторони квадрата "см"`);
        const result = side * 4;
        alert(`Периметр квадрата становить ` + result + ` см`);

    };

    document.getElementById("task1.4").onclick = function basics4() {
        const radius = prompt(`Введіть довжину радіуса кола`);
        const result = radius ** 2;
        alert(`Площа кола становить ` + result + ` см`);
    };

    document.getElementById("task1.5").onclick = function basics5() {
        const distance = prompt(`Введіть вістань між містами у "км"`);
        const time = prompt(`Введіть час, який ви готові потратити на подолання відстанні у "год"`);
        const speed = distance / time;
        alert(`Ви повинні рухатися зі швидкістю ` + speed + ` км/год`);
    };

    document.getElementById("task1.6").onclick = function basics6() {
        const amount = prompt(`Введіть бажану суму американських доларів, для конвертації`);
        const euroRate = 0.84;
        const result = amount * euroRate;
        alert(`Ви отримаєте ` + result + ` Euro`);
    };

    document.getElementById("task1.7").onclick = function basics7() {
        const memory = prompt(`Введіть об'єм флешки у "Gb"`);
        const memoryMb = memory * 1024;
        const filmInclud = memoryMb / 820;
        alert(`На Вашу флешку об'ємом ` + memory + ` Gb. ` + `Вміститься ` + Math.floor(filmInclud) + ` фільмів об'ємом 820 Mb`);
    };

    document.getElementById("task1.8").onclick = function basics8() {
        const money = prompt(`Введіть суму грошей, яку Ви готові потратити "грн"`);
        const price = prompt(`Введіть ціну плитку шоколаду "грн"`);
        const ChocolateCount = money / price;
        const spendMoney = Math.floor(ChocolateCount) * price;
        const restMoney = money - spendMoney;
        alert(`Маючи наявну суму гроше, Ви можете придбати ` + Math.floor(ChocolateCount) + ` плитки шоколаду. Та у Вас залишиться ` + restMoney + ` грн`);
    };

    document.getElementById("task1.9").onclick = function basics9() {
        const number = prompt(`Введіть будь-яке число`);
        alert(('' + number).split('').reverse().join(''));
    };

    document.getElementById("task1.10").onclick = function basics10() {
        const sum = prompt(`Введіть суму яку бажаєте інвестувати`);
        const interest = 0.0042;
        const monthIncome = ((sum * interest) * 2);
        alert(`Якщо Ви заінвестуєте ` + sum + ` грн. Ваш дохід за два місяці складе ` + monthIncome + ` грн`);
    };
};