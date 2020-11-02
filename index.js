"use strict"
document.getElementById("task1.1").onclick = function basics1() {
    const name = prompt(`Введіть Ваше ім'я`);
    alert('Привіт ' + name);
};

document.getElementById("task1.2").onclick = function basics2() {
    const birthYear = prompt(`Введіть Ваш рік народження`);
    const year = 2020;
    let result = year - birthYear;
    alert('Вам ' + result + ' років');
};

document.getElementById("task1.3").onclick = function basics3() {
    const side = prompt(`Введіть довжину сторони квадрата "см"`);
    let result = side * 4;
    alert(`Периметр квадрата становить ` + result + ` см`);

};

document.getElementById("task1.4").onclick = function basics4() {
    const radius = prompt(`Введіть довжину радіуса кола`);
    let result = radius ** 2;
    alert(`Площа кола становить ` + result + ` см`);
};

document.getElementById("task1.5").onclick = function basics5() {
    const distance = prompt(`Введіть вістань між містами у "км"`);
    const time = prompt(`Введіть час, який ви готові потратити на подолання відстанні у "год"`);
    let speed = distance / time;
    alert(`Ви повинні рухатися зі швидкістю ` + speed + ` км/год`);
};

document.getElementById("task1.6").onclick = function basics6() {
    const amount = prompt(`Введіть бажану суму американських доларів, для конвертації`);
    const euroRate = 0.84;
    let result = amount * euroRate;
    alert(`Ви отримаєте ` + result + ` Euro`);
};

document.getElementById("task1.7").onclick = function basics7() {
    const memory = prompt(`Введіть об'єм флешки у "Gb"`);
    let memoryMb = memory * 1024;
    let filmInclud = memoryMb / 820;
    alert(`На Вашу флешку об'ємом ` + memory + ` Gb. ` + `Вміститься ` + Math.floor(filmInclud) + ` фільмів об'ємом 820 Mb`);
};

document.getElementById("task1.8").onclick = function basics8() {
    const money = prompt(`Введіть суму грошей, яку Ви готові потратити "грн"`);
    const price = prompt(`Введіть ціну плитку шоколаду "грн"`);
    let ChocolateCount = money / price; //кількість шоколадок
    let spendMoney = Math.floor(ChocolateCount) * price;
    let restMoney = money - spendMoney;
    alert(`Маючи наявну суму гроше, Ви можете придбати ` + Math.floor(ChocolateCount) + ` плитки шоколаду. Та у Вас залишиться ` + restMoney + ` грн`);
};

document.getElementById("task1.9").onclick = function basics9() {
    const number = prompt(`Введіть будь-яке число`);
    alert(('' + number).split('').reverse().join(''));
};

document.getElementById("task1.10").onclick = function basics10() {
    const sum = prompt(`Введіть суму яку бажаєте інвестувати`);
    const interest = 0.0042;
    let monthIncome = ((sum * interest) * 2);
    alert(`Якщо Ви заінвестуєте ` + sum + ` грн. Ваш дохід за два місяці складе ` + monthIncome + ` грн`);
};

document.getElementById("task2.1").onclick = function basics11() {
    let year = +prompt(`Введіть Ваш вік`);
    if (year >= 0 & year <= 12) {
        alert(`Ви ще динина`);
    } else if (year >= 13 & year <= 18) {
        alert(`Ви вже підліток`);
    } else if (year >= 19 & year <= 60) {
        alert(`Ви вже доросла людина`);
    } else if (year > 60) {
        alert(`Ви вже пенсійного віку`);
    }
};
document.getElementById("task2.2").onclick = function basics12() {
    let symbol = +prompt(`Введіть число від 0 до 9`);
    switch (symbol) {
        case 0:
            alert(`Під 0 знаходиться символ  )  `);
            break;
        case 1:
            alert(` Під 1 знаходиться символ  !  `);
            break;
        case 2:
            alert(`Під 2 знаходиться символ  " `);
            break;
        case 3:
            alert(`Під 3 знаходиться символ  #`);
            break;
        case 4:
            alert(`Під 4 знаходиться символ  ;`);
            break;
        case 5:
            alert(`Під 5 знаходиться символ  %`);
            break;
        case 6:
            alert(`Під 6 знаходиться символ  ^`);
            break;
        case 7:
            alert(`Під 7 знаходиться символ  &`);
            break;
        case 8:
            alert(`Під 8 знаходиться символ  *`);
            break;
        case 9:
            alert(`Під 9 знаходиться символ  (`);
            break;
    }
};

document.getElementById("task2.3").onclick = function basics13() {
    let number = prompt(`Введіть трьохзначне число`);
    if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) {
        alert(`У введеному Вами числі є схожі числа`);
    } else {
        alert(`У веденому Вами числі схожих чисел немає`);
    }
};
document.getElementById("task2.4").onclick = function basics14() {
    let year = prompt(`Введіть рік Вашого народження`);
    if (year % 4 == 0 || year % 400 == 0 && year % 100 !== 0) {
        alert(`Рік Вашого народження є високосним`);
    } else {
        alert(`Рік Вашого народження не є високосним`);
    }
};
document.getElementById("task2.5").onclick = function basics15() {
    let number = prompt(`введіть 5-ти значне число`);
    if (number[0] == number[4] && number[1] == number[3]) {
        alert(`Ви ввели панцифрове число`);
    } else {
        alert(`Ви ввели - звичайне число`);
    }
};
document.getElementById("task2.6").onclick = function basics16() {
    let sum = prompt(`Введіть суму у USD для обміну`);
    let currency = prompt(`Оберіть валюту: EUR, UAH, AZN`);
    const euroRate = 0.85;
    const uanRate = 28.36;
    const aznRate = 1.70;
    switch (currency) {
        case "EUR":
            alert('Ви отримаєте ' + sum * euroRate + ` Євро`);
            break;
        case "eur":
            alert('Ви отримаєте ' + sum * euroRate + ` Євро`);
            break;
        case "UAH":
            alert('Ви отримаєте ' + sum * uanRate + ` Гривень`);
            break;
        case "uah":
            alert('Ви отримаєте ' + sum * uanRate + ` Гривень`);
            break;
        case "AZN":
            alert('Ви отримаєте ' + sum * aznRate + ` Азербайджанських манатів`);
            break;
        case "azn":
            alert('Ви отримаєте ' + sum * aznRate + ` Азербайджанських манатів`);
            break;
    }
};

document.getElementById("task2.7").onclick = function basics17() {
    const discountOne = 0.03;
    const discountSecond = 0.05;
    const discountThird = 0.07;
    let sumSpend = prompt(`Введіть потрачену Вами суму в нашому магазині`);
    if (sumSpend >= 200 && sumSpend <= 299) {
        alert(`Ваша знижка становить 3%, та сума до оплати становить ` + (sumSpend - sumSpend * discountOne) + ` грн`);
    } else if (sumSpend >= 300 && sumSpend <= 499) {
        alert(`Ваша знижка становить 5%, та сума до оплати становить ` + (sumSpend - sumSpend * discountSecond) + ` грн`);
    } else if (sumSpend > 500) {
        alert(`Ваша знижка становить 7%, та сума до оплати становить ` + (sumSpend - sumSpend * discountThird) + ` грн`);
    }
};
document.getElementById("task2.8").onclick = function basics18() {
    let circleLength = prompt(`Введіть довжину кола`);
    const circleDiameter = circleLength / 3.14;
    let squarePerimeter = prompt(`Введіть перимент квадрата`);
    const squareSide = squarePerimeter / 4;
    if (squareSide > circleDiameter) {
        alert(`Ура... Ваше коло поміщається у квадрат `)
    } else {
        alert(`Нажаль... Коло не поміщається у квадрат`)
    }
};
document.getElementById("task2.9").onclick = function basics19() {
    let questionOne = prompt(`Вам подобається Зеленський? 1 - так; 2 - ні; 3 - а хто це?`);
    let questionTwo = prompt(`Ви голосували за Зеленського? 1 - так; 2 - ні; 3 - утримуюся від відповіді)`);
    let questionThird = prompt(`Ви б обрали клоуна на другий термін? 1 -так; 2 - ні; 3 - лише його `);
    let points = 0;
    if (questionOne == 3) {
        points += 2
    }
    if (questionTwo == 2) {
        points += 2
    }
    if (questionThird == 2) {
        points += 2
    }
    alert(`Ви щирий патріот ` + points)
};
document.getElementById("task2.10").onclick = function basics20() {
    let date = new Date(prompt(`Введіть будь-яку дату yyyy-mm-dd`));
    date.setDate(date.getDate() + 1);
    alert(date);
};
// 3.1 Подсчитать сумму всех чисел в заданном пользователем диапазоне.
document.getElementById("task3.1").onclick = function basics21() {
    let startRange = +prompt(`Enter start of the range`, ``);
    const endRange = +prompt(`Enter end of the range`, '');
    let sum = 0;

    while (startRange <= endRange) {
        sum += startRange;
        startRange++;
    }

    alert(sum);
};

// 3.2 Запросить 2 числа и найти только наибольший общий делитель.
document.getElementById("task3.2").onclick = function basics22() {
    let num1 = +prompt(`Enter any number`, ``);
    let num2 = +prompt(`Enter any number`, ``);
    while (num1 !== 0 && num2 !== 0) {
        num1 > num2 ? num1 %= num2 : num2 %= num1;
    }
    alert(num1 + num2);
};

// 3.3 Запросить у пользователя число и вывести все делители этого числа.
document.getElementById("task3.3").onclick = function basics23() {
    const num = +prompt(`Enter any number`, ``);
    let i = 0;
    while (i++ <= num) {
        if (num % i == 0) {
            alert(i);
        }
    }
};

// 3.4 Определить количество цифр в введенном числе.
document.getElementById("task3.4").onclick = function basics24() {
    let countNum = +prompt(`Enter any number`, `1234`);
    let i = 0;
    if (countNum == 0) {
        i++;
    }
    for (; countNum > 1 || countNum < -1; i++) {
        countNum /= 10;
    }
    alert(i);
};

// 3.5 Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем
document.getElementById("task3.5").onclick = function basics25() {
    let positiveNum = 0;
    let negativeNum = 0;
    let zeroNum = 0;
    let oddNum = 0;
    let evenNum = 0;
    for (let i = 1; i <= 10; i++) {
        let num = +prompt(`Enter ten numbers. Number: ${i}`);
        if (num == 0) {
            zeroNum += 1;
        } else if (num < 0) {
            negativeNum += 1;
        } else {
            positiveNum += 1;
        }
        if (num % 2 == 0) {
            evenNum += 1;
        } else if (num % 2 !== 0) {
            oddNum += 1;
        } else {
            alert(`incorect number`);
        }
    }
    alert(`You enter: null = ${zeroNum}; positive = ${positiveNum}; negative = ${negativeNum}; odd numbers = ${oddNum}; even numbers = ${evenNum}; `)

}

// 3.6 Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.
document.getElementById("task3.6").onclick = function basics26() {
    while (true) {
        alert(`Let's calculate a little?`)
        const firstNum = +prompt(`Enter first number`, `1`);
        const operation = prompt(`Enter operation you want to do`, `+ , - , * , / `);
        const secondNum = +prompt(`Enter second number`, `2`);
        let result = 0;
        if (operation == '+') {
            result = firstNum + secondNum;
            alert(result);
        } else if (operation == '-') {
            result = firstNum - secondNum;
            alert(result);
        } else if (operation == '*') {
            result = firstNum * secondNum;
            alert(result);
        } else {
            result = firstNum / secondNum;
            alert(result);
        }
        const ask = confirm(`Do you want to do one more operation?`);
        if (!ask) {
            break;
        }
    }
};
// 3.7 Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).
document.getElementById("task3.7").onclick = function basics27() {
    let num = prompt(`Enter number`, '3');
    let step = +prompt(`Enter step number`, '2')
    let arr = num.split('');

    for (let i = 0; i < step; i++) {
        arr.push(arr.shift());
    }
    alert(arr.join ``);
}
// 3.8 Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.
document.getElementById("task3.8").onclick = function basics28() {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sundey'];
    let count = 0;
    while (confirm(`It's ${days[count]}. Do you want to see next day?`)) {
        count = (count + 1) % days.length;
    }
};