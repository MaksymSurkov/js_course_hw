"use strict"
// * Задача 6. З клавіатури вводиться номер дня тижня. Вивести на екран назву дня.*
// Шаг 0 - Обозначение
// номер дня недели - numberOfDay
// название дня недели - nameOfDay

// Шаг 1 - Вводим необходимые значения
let numberOfDay = parseInt(prompt(`Введите номер дня недели`));
let nameOfDay;

// Шаг 2 - Розв"язок заадачі
switch (numberOfDay) {
	case 1: nameOfDay = 'понедельник'
		break;
	case 2: nameOfDay = 'вторник'
		break;
	case 3: nameOfDay = 'среда'
		break;
	case 4: nameOfDay = 'четверг'
		break;
	case 5: nameOfDay = 'пятница'
		break;
	case 6: nameOfDay = 'суббота'
		break;
	case 7: nameOfDay = 'воскресенье'
		break;
	default:
		nameOfDay = 'такого дня недели не существует'
}
document.write(`<p class="block">Название дня "${nameOfDay}"</p>`)





