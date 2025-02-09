"use strict"
// * Задача 7.	З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься*
// Шаг 0 - Обозначение
// номер месяца - numberOfMonth
// время года введеного номера месяца - timeOfYear

// Шаг 1 - Вводим необходимые значения
let numberOfMonth = parseInt(prompt(`Введите номер месяца`));
let timeOfYear;

// Шаг 2 - Розв"язок заадачі
switch (numberOfMonth) {
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
document.write(`<p class="block">Название времени года "${timeOfYear}"</p>`)





