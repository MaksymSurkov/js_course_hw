"use strict"
// * Задача 2. Дано масив, який зберігає кількість відвідувачів магазину протягом тижня. Вивести на екран:
// ●	номери днів, протягом яких кількість відвідувачів була меншою за 20;
// ●	номери днів, коли кількість відвідувачів була мінімальною;
// ●	номери днів, коли кількість відвідувачів була максимальной;
// ●	загальну кількість клієнтів у робочі дні та окремо загальну кількість днів на вихідних.

if (confirm('Почати тестування?')) {
	// Функция ввода количества посетителей магазина за неделю
	function getStoreVisitors (days) {
		let result = [];
		for (let i = 1; i <= days; i++) {
			let visitor = prompt(`Введите количество посетителей магазина за ${i} день`)
			result.push(visitor);
		}
		return result;
	}

	// Функция находит минимальное значение и возвращает его
	function getMinDayVisit(days) {
		let min = Infinity;
		for (let i = 0; i < days.length; i++) {
			if (days[i] < min) {
				min = days[i];
			}
		}
		return min;
	}
	
	// Функция находит максимальное значение и возвращает его
	function getMaxDayVisit(days) {
		let max = -Infinity;
		for (let i = 0; i < days.length; i++) {
			if (days[i] > max) {
				max = days[i];
			}
		}
		return max;
	}
	
	let totalVisitors = getStoreVisitors(7); // Массив с количеством посетителей по дням

	// 1.номери днів, протягом яких кількість відвідувачів була меншою за 20;
	for (let i = 0, day = 1; i < totalVisitors.length; i++, day++) {
		if (totalVisitors[i] < 20) {
			document.write(`<p>${day} день: ${totalVisitors[i]} посетителей</p>`);
		}
	}

	// 2.номери днів, коли кількість відвідувачів була мінімальною;
	let minDayVisit = getMinDayVisit(totalVisitors); // Минимальное количество посетителей за день
	let countMinVisitorsDays = []; // решил все дни закидывать в массив, что бы не выводить N раз document.write
	for (let i = 0, day = 1; i < totalVisitors.length; i++, day++) {
		if (totalVisitors[i] === minDayVisit) {
			countMinVisitorsDays.push(day)
		}
	}
	document.write(`<p style = "margin-top: 5px;">В ${countMinVisitorsDays} дни, количество посетителей было минимальным: ${minDayVisit}</p>`);

	// 3.номери днів, коли кількість відвідувачів була максимальной;
	let maxDayVisit = getMaxDayVisit(totalVisitors); // Максимальное количество посетителей за день
	let countMaxVisitorsDays = []; // аналогично как и с минимальным
	let totalWorkDaysVisitors = 0;
	let totalWeekendVisitors = 0;
	for (let i = 0, day = 1; i < totalVisitors.length; i++, day++) {
		if (totalVisitors[i] === maxDayVisit) {
			countMaxVisitorsDays.push(day)
		}
		// 4.загальну кількість клієнтів у робочі дні та окремо загальну кількість днів на вихідних.
		if (day < 6) {
			totalWorkDaysVisitors += parseFloat(totalVisitors[i]); 
		}
		if (day >= 6) {
			totalWeekendVisitors += parseFloat(totalVisitors[i]);
		}
	}
	console.log(totalWorkDaysVisitors);
	document.write(`<p style = "margin-top: 5px;">В ${countMaxVisitorsDays} дни, количество посетителей было максимальным: ${maxDayVisit}</p>`);
	document.write(`<p style = "margin-top: 5px;">Общее количество посетителей в буднии дни: ${totalWorkDaysVisitors}</p>`);
	document.write(`<p style = "margin-top: 5px;">Общее количество посетителей в выходные дни: ${totalWeekendVisitors}</p>`);
}
