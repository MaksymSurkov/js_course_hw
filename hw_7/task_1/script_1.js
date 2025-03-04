"use strict"
// * Задача 1. Створити функцію, яка за номером місяця повертає пору року, до якої відноситься цей місяць.*

if (confirm('Почати тестування?')) {
	let numberOfMonth = parseInt(prompt(`Введите номер месяца`));
	function getTimeOfYear(num) {
		let timeOfYear;
		switch (num) {
			case 12: 
			case 1: 
			case 2: timeOfYear = 'зима'
				break;
			case 3: 
			case 4: 
			case 5: timeOfYear = 'весна'
				break;
			case 6: 
			case 7:
			case 8: timeOfYear = 'лето'
				break;
			case 9: 
			case 10:
			case 11: timeOfYear = 'осень'
				break;
			default:
				timeOfYear = 'такого номера месяца не существует'
		}
		return timeOfYear;
	}
	document.write(`<p class="block">Название времени года "${getTimeOfYear(numberOfMonth)}"</p>`)
}
