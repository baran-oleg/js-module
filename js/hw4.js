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
};