"use strict"
// * Задача 3. Створити функцію, яка за номером дня дозволяє з’ясувати чи є цей день робочим.*

if (confirm('Почати тестування?')) {
	let numberOfDay = parseInt(prompt(`Введите номер дня недели`));
	function getDayCategory(num) {
		let dayCategory;
		switch (num) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5: dayCategory = 'рабочий'
				break;
			case 6:
			case 7: dayCategory = 'Выходной'
				break;
			default:
				dayCategory = 'такого дня не существует'
		}
		return dayCategory;
	}
	document.write(`<p class="block">Это день - "${getDayCategory(numberOfDay)}"</p>`)
}
