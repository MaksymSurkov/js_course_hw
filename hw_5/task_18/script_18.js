"use strict"
// * Задача 18. Користувача поступово вводить показники температури протягом року. Знайти середню температуру. *

if (confirm('Почати тестування?')) {

	let totalTemperature = 0;

	for (let i = 1; i<=12 ; i ++) {
		let monthTempValue = parseFloat(prompt(`Введите среднюю темпратуру за ${i} месяц (°C)!`));
		totalTemperature += monthTempValue;
	}

	let avgYearTemp = totalTemperature / 12;
	document.write(`<p class = "block">Средняя годовая температура составляет ${(avgYearTemp).toFixed(2)} °C</p>`)
}