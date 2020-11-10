export const hw5 = () => {
    document.getElementById("task5.1").onclick = function basics31() {

        const car = {
            producer: `Volvo`,
            model: `XC 60`,
            year: `2017`,
            speed: `120`
        };

        for (let key in car) {
            alert(key);
            alert(car[key]);

        }
        const distance = +prompt(`Введіть тротяжність вашого маршруту в км`, '660');

        const timeTrip = (a) => {
            const timeforDist = a / car.speed;
            alert(`${timeforDist} год на подолання відстані`);
            const timePause = Math.floor(timeforDist / 4);
            alert(`${timePause} раз будемо робити перерив`);
            const totalTime = timeforDist + timePause + 'год займе Ваша подорож';
            return totalTime;
        };
        alert(timeTrip(distance));
    };
};