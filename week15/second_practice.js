// 2. На этой недели создадим веб-страницу, на которой пользователь может ввести температуру для нескольких городов, после чего программа найдёт и выведет температуру в каждом городе, максимальную и минимальную температуру на странице.
    
const cities = ["Москва", "Ереван", "Тбилиси", "Астана"];
const temperatures = [];
const list = document.querySelector('.list');
const max = document.querySelector('.max');
const min = document.querySelector('.min');


for (city of cities) {
    let inputTemperature = Number(window.prompt(`Укажите температуру в ${city}`));
    list.innerHTML +=`
    <li>Температура в ${city}: ${inputTemperature} &#8451;</li>`;
    temperatures.push(inputTemperature);
    console.log(temperatures);
}

let maxTemperature = temperatures[0];
let minTemperature = temperatures[0]

for (let i = 1; i < temperatures.length; i++) {
    if (temperatures[i] > maxTemperature) {
        maxTemperature = temperatures[i]
    }
    if (temperatures[i] < minTemperature) {
        minTemperature = temperatures[i]
    }
console.log(maxTemperature);
console.log(minTemperature);
    max.innerHTML =`Максимальная температура: ${maxTemperature} &#8451;`;
    min.innerHTML =`Минимальная температура: ${minTemperature} &#8451;`;
}