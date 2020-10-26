function basics1() {
    let name = prompt(`Введіть Ваше ім'я`);
    alert('Привіт ' + name);
}

function basics2() {
    let birthYear = prompt(`Введіть Ваш рік народження`);
    const year = 2020;
    let result = year - birthYear;
    alert('Вам ' + result + ' років');
}

function basics3() {
    let side = prompt(`Введіть довжину сторони квадрата "см"`);
    let result = side * 4;
    alert(`Периметр квадрата становить ` + result + ` см`);

}

function basics4() {
    let radius = prompt(`Введіть довжину радіуса кола`);
    let result = radius ** 2;
    alert(`Площа кола становить ` + result + ` см`);
}

function basics5() {
    let distance = prompt(`Введіть вістань між містами у "км"`);
    let time = prompt(`Введіть час, який ви готові потратити на подолання відстанні у "год"`);
    let speed = distance / time;
    alert(`Ви повинні рухатися зі швидкістю ` + speed + ` км/год`);
}

function basics6() {
    let amount = prompt(`Введіть бажану суму американських доларів, для конвертації`);
    const euroRate = 0.84;
    let result = amount * euroRate;
    alert(`Ви отримаєте ` + result + ` Euro`);
}

function basics7() {
    let memory = prompt(`Введіть об'єм флешки у "Gb"`);
    let memoryMb = memory * 1024;
    let filmInclud = memoryMb / 820;
    alert(`На Вашу флешку об'ємом ` + memory + ` Gb. ` + `Вміститься ` + Math.floor(filmInclud) + ` фільмів об'ємом 820 Mb`);
}

function basics8() {
    let money = prompt(`Введіть суму грошей, яку Ви готові потратити "грн"`);
    let price = prompt(`Введіть ціну плитку шоколаду "грн"`);
    let ChocolateCount = money / price; //кількість шоколадок
    let spendMoney = Math.floor(ChocolateCount) * price;
    let restMoney = money - spendMoney;
    alert(`Маючи наявну суму гроше, Ви можете придбати ` + Math.floor(ChocolateCount) + ` плитки шоколаду. Та у Вас залишиться ` + restMoney + ` грн`);
}

function basics9() {
    let number = prompt(`Введіть будь-яке число`);
    alert(('' + number).split('').reverse().join(''));
}

function basics10() {

}