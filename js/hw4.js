export const hw4 = () => {

    document.getElementById("task4.1").onclick = function basics31() {
        alert(`Привіт. Введіть два числа`);
        const firstNum = +prompt(`Ведіть перше число`, '30');
        const secondNum = +prompt(`Введіть друге число`, '40');

        function checkNum(firstNum, secondNum) {
            if (firstNum > secondNum) {
                return `1`;
            } else if (firstNum < secondNum) {
                return `-1`;
            }
            return `0`;
        }
        alert(checkNum(firstNum, secondNum));
    };

    document.getElementById("task4.2").onclick = function basics32() {
        const a = +prompt(`Введіть число`, '10');

        function factorial(a) {
            return (a != 1) ? a * factorial(a - 1) : 1;
        }
        alert(factorial(a));
    };

    document.getElementById("task4.3").onclick = function basics33() {

        const a = +prompt(`Введіть перше число`, '5');
        const b = +prompt(`Введіть друге число`, '3');
        const c = +prompt(`Введіть третє число`, '10');

        function oneNum() {
            const one = [a, b, c];
            alert(one.join(''));
        }

        oneNum();
    };

    document.getElementById("task4.4").onclick = function basics34() {

        const a = +prompt(`Введіть довжину`, '30');
        const b = +prompt(`Введіть ширину`, '20');

        function square(a, b) {


            if (!b) {
                const one = a * a;
                return one;
            } else {
                const two = a * b;
                return two;
            }
        }

        alert(square(a, b));
    };

    document.getElementById("task4.5").onclick = function basics35() {

        const num = +prompt(`Введіть будь-яке число`, '10');

        function numPerfect(a) {

            if (a === 0) {
                return false;
            }
            let b = 0;
            for (let i = 1; i < a; i++) {
                if (a % i === 0) {
                    b += i;
                }
            }
            return b === a;
        }
        alert(`The number your enter is perfec: ${numPerfect(num)}`);
    };

    document.getElementById("task4.6").onclick = function basics36() {
        const startRange = +prompt(`Введіть мінімальне значення діапазону`, '20');
        const endRange = +prompt(`Ведіть максимальне значення діапазону`, '30');

        function numPerfect(a) {

            if (a === 0) {
                return false;
            }
            let b = 0;
            for (let i = 1; i < a; i++) {
                if (a % i === 0) {
                    b += i;
                }
            }
            return b === a;
        }

        function perfectNumInRange(min, max) {
            const num = [];
            for (let i = min; i < max; i++) {
                if (numPerfect(i)) {
                    num.push(i);
                }
            }
            return num;
        }
        alert(`У заданому діапазоні, досконалими числами є: ${perfectNumInRange(startRange, endRange)}`);
    };

    document.getElementById("task4.7").onclick = function basics37() {

        function time() {
            const time = new Date();
            const a = time.getHours();
            const b = time.getMinutes();
            const c = time.getSeconds();

            alert(`Напевне у Вас зараз на годиннику: ${a} : ${b} : ${c}`);
        }
        time();
    };

    document.getElementById("task4.8").onclick = function basics38() {

        const hours = +prompt(`Введіть години`, '12');
        const minutes = +prompt(`введіть хвилини`, '33');
        const seconds = +prompt(`введіть секунди`, '33');

        function totalSeconds(hh, mm = 0, ss = 0) {
            return hh * 3600 + mm * 60 + ss;
        }
        alert(totalSeconds(hours, minutes, seconds) + ' секунд');
    };
    document.getElementById("task4.9").onclick = function basics39() {

        const num = +prompt(`Введіть суму секунд, для переведення у годину`, '66666');

        function time() {
            const a = Math.floor(num / 60 / 60);
            const b = Math.floor(num / 60 - a * 60);
            const c = num % 60;

            alert(`${a}hh : ${b}mm : ${c}ss`);
        }
        time();
    };

    document.getElementById("task4.10").onclick = function basics40() {

        let firstDate = prompt(`Введіть першу дату у форматі год:хв:с`, `14, 20, 40`).split(', ');
        let secondDate = prompt(`Введіть другу дату у форматі год:хв:с`, `23, 15, 33`).split(', ');

        function totalSeconds(hh, mm = 0, ss = 0) {
            return hh * 3600 + mm * 60 + Number(ss);
        }
        firstDate = totalSeconds(firstDate[0], firstDate[1], firstDate[2]);
        secondDate = totalSeconds(secondDate[0], secondDate[1], secondDate[2]);

        const newDate = firstDate - secondDate;

        function time(ss = 0) {
            const a = Math.floor(ss / 60 / 60);
            const b = Math.floor(ss / 60 - a * 60);
            const c = ss % 60;

            const formatString = [
                a.toString().padStart(2, `0`),
                b.toString().padStart(2, `0`),
                c.toString().padStart(2, `0`)
            ].join(`:`);
            return formatString;
        }
        alert(time(newDate));
    };
};