export const hw3 = () => {
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
        alert(`You enter: null = ${zeroNum}; positive = ${positiveNum}; negative = ${negativeNum}; odd numbers = ${oddNum}; even numbers = ${evenNum}; `);

    };

    // 3.6 Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.
    document.getElementById("task3.6").onclick = function basics26() {
        while (true) {
            alert(`Let's calculate a little?`);
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
        let step = +prompt(`Enter step number`, '2');
        let arr = num.split('');

        for (let i = 0; i < step; i++) {
            arr.push(arr.shift());
        }
        alert(arr.join ``);
    };
    // 3.8 Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.
    document.getElementById("task3.8").onclick = function basics28() {
        const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sundey'];
        let count = 0;
        while (confirm(`It's ${days[count]}. Do you want to see next day?`)) {
            count = (count + 1) % days.length;
        }
    };

    // 3.9 Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.
    document.getElementById("task3.9").onclick = function basics29() {
        for (let i = 2; i <= 9; i++) {
            for (let j = 1; j <= 10; j++) {
                console.log(`${i} * ${j} = ${i*j}`);
            }

        }
        alert(`Open console`);
    };
    // 3.10 Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом: каждую итерацию цикла делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя «Ваше число > N, < N или == N?». В зависимости от того, что указал пользователь, уменьшаете диапазон. Начальный диапазон от 0 до 100, поделили пополам и получили 50. Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.
    document.getElementById("task3.10").onclick = function basics30() {
        alert('Загадайте число від 1 до 100');
        let startNum = 0;
        let endNum = 100;
        while (true) {
            let N = Math.floor(startNum + (endNum - startNum) / 2);
            let guessNum = prompt(`Ваше число >, < або = ${N}`, ">,<,=");
            if (guessNum == "<") {
                endNum = N - 1;
            } else if (guessNum == ">") {
                startNum = N + 1;
            } else if (guessNum == "=") {
                alert(`Гра завершенна. Думаю, Ваше число ${N}`);
                break;
            }
        }
    };
};