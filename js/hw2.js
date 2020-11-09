export const hw2 = () => {

    document.getElementById("task2.1").onclick = function basics11() {
        const year = +prompt(`Введіть Ваш вік`);
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
        const symbol = +prompt(`Введіть число від 0 до 9`);
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
        const number = prompt(`Введіть трьохзначне число`);
        if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) {
            alert(`У введеному Вами числі є схожі числа`);
        } else {
            alert(`У веденому Вами числі схожих чисел немає`);
        }
    };

    document.getElementById("task2.4").onclick = function basics14() {
        const year = prompt(`Введіть рік Вашого народження`);
        if (year % 4 == 0 || year % 400 == 0 && year % 100 !== 0) {
            alert(`Рік Вашого народження є високосним`);
        } else {
            alert(`Рік Вашого народження не є високосним`);
        }
    };

    document.getElementById("task2.5").onclick = function basics15() {
        const number = prompt(`введіть 5-ти значне число`);
        if (number[0] == number[4] && number[1] == number[3]) {
            alert(`Ви ввели панцифрове число`);
        } else {
            alert(`Ви ввели - звичайне число`);
        }
    };

    document.getElementById("task2.6").onclick = function basics16() {
        const sum = prompt(`Введіть суму у USD для обміну`);
        const currency = prompt(`Оберіть валюту: EUR, UAH, AZN`);
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
        const sumSpend = prompt(`Введіть потрачену Вами суму в нашому магазині`);
        if (sumSpend >= 200 && sumSpend <= 299) {
            alert(`Ваша знижка становить 3%, та сума до оплати становить ` + (sumSpend - sumSpend * discountOne) + ` грн`);
        } else if (sumSpend >= 300 && sumSpend <= 499) {
            alert(`Ваша знижка становить 5%, та сума до оплати становить ` + (sumSpend - sumSpend * discountSecond) + ` грн`);
        } else if (sumSpend > 500) {
            alert(`Ваша знижка становить 7%, та сума до оплати становить ` + (sumSpend - sumSpend * discountThird) + ` грн`);
        }
    };

    document.getElementById("task2.8").onclick = function basics18() {
        const circleLength = prompt(`Введіть довжину кола`);
        const circleDiameter = circleLength / 3.14;
        const squarePerimeter = prompt(`Введіть перимент квадрата`);
        const squareSide = squarePerimeter / 4;
        if (squareSide > circleDiameter) {
            alert(`Ура... Ваше коло поміщається у квадрат `);
        } else {
            alert(`Нажаль... Коло не поміщається у квадрат`);
        }
    };

    document.getElementById("task2.9").onclick = function basics19() {
        const questionOne = prompt(`Вам подобається Зеленський? 1 - так; 2 - ні; 3 - а хто це?`);
        const questionTwo = prompt(`Ви голосували за Зеленського? 1 - так; 2 - ні; 3 - утримуюся від відповіді)`);
        const questionThird = prompt(`Ви б обрали клоуна на другий термін? 1 -так; 2 - ні; 3 - лише його `);
        let points = 0;
        if (questionOne == 3) {
            points += 2;
        }
        if (questionTwo == 2) {
            points += 2;
        }
        if (questionThird == 2) {
            points += 2;
        }
        alert(`Ви щирий патріот ` + points);
    };

    document.getElementById("task2.10").onclick = function basics20() {
        const date = new Date(prompt(`Введіть будь-яку дату yyyy-mm-dd`));
        date.setDate(date.getDate() + 1);
        alert(date);
    };
};