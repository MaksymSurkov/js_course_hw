"use strict"
// * Задача 2. Створити функцію, яка за номером місяця повертає його назву.*

if (confirm('Почати тестування?')) {
	let numberOfMonth = parseInt(prompt(`Введите номер месяца`));
	function getNameOfMonth(num) {
		let monthName;
		switch (num) {
			case 1: monthName = 'Январь'
				break;
			case 2: monthName = 'Февраль'
				break;
			case 3: monthName = 'Март'
				break;
			case 4: monthName = 'Апрель'
				break;
			case 5: monthName = 'Май'
				break;
			case 6: monthName = 'Июнь'
				break;
			case 7: monthName = 'Июль'
				break;
			case 8: monthName = 'Август'
				break;
			case 9: monthName = 'Сентябрь'
				break;
			case 10: monthName = 'Октябрь'
				break;
			case 11: monthName = 'Ноябрь'
				break;
			case 12: monthName = 'Декабрь'
				break;
			default:
				monthName = 'такого месяца не существует'
		}
		return monthName;
	}
	document.write(`<p class="block">Название времени года "${getNameOfMonth(numberOfMonth)}"</p>`)
}
