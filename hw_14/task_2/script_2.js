"use strict"
// * Задача 2. Розробити функцію, у яку передають об’єкт (день, місяць, рік). Визначити, який буде рік через N місяців.

if (confirm('Почати тестування?')) {
	let userDate = {
		day: 23,
		month: 5,
		year: 2023,
	}
	
	function getMonthInN({ month, year }, N) {
		return year + Math.floor((month - 1 + N) / 12);
	}

	document.write(getMonthInN(userDate, 8))

}