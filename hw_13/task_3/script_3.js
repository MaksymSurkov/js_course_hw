"use strict"
// * Задача 3. З використанням замикань розробити ітератор, тобто функцію, що буде поступово за окремими викликами видавати по
// *одне значення від заданого мінімального до заданого максимального. Якщо значення досягне максимального, то наступним буде мінімальне значення.*
// *З використанням цієї функції реалізувати перебір номерів місяців.*

if (confirm('Почати тестування?')) {
	// function showMonth(number) {
	// 	let monthName;
	// 	function getMonthName(index) {
	// 		switch (index % 12) {
	// 			case 0: return 'Январь';
	// 			case 1: return 'Февраль';
	// 			case 2: return 'Март';
	// 			case 3: return 'Апрель';
	// 			case 4: return 'Май';
	// 			case 5: return 'Июнь';
	// 			case 6: return 'Июль';
	// 			case 7: return 'Август';
	// 			case 8: return 'Сентябрь';
	// 			case 9: return 'Октябрь';
	// 			case 10: return 'Ноябрь';
	// 			case 11: return 'Декабрь';
	// 			default: return '';
	// 		}
	// 	}
	// 	for (let i = 0; i < number; i++) {
	// 		setTimeout(() => {
	// 			monthName = getMonthName(i);
	// 			console.log(monthName);
	// 		}, i * 1000);
	// 	}
	// }

	// showMonth(20);
	
	function showMonth(number) {
		let currentMonth = 1; // начинаем с первого месяца
	
		function getMonthName(index) {
			switch (index) {
				case 1: return 'Январь';
				case 2: return 'Февраль';
				case 3: return 'Март';
				case 4: return 'Апрель';
				case 5: return 'Май';
				case 6: return 'Июнь';
				case 7: return 'Июль';
				case 8: return 'Август';
				case 9: return 'Сентябрь';
				case 10: return 'Октябрь';
				case 11: return 'Ноябрь';
				case 12: return 'Декабрь';
				default: return 'Ошибка';
			}
		}
	
		let step = 0;
	
		const iterator = setInterval(() => {
			const name = getMonthName(currentMonth);
			console.log(name);
	
			currentMonth = currentMonth < 12 ? currentMonth + 1 : 1;
			step++;
	
			if (step >= number) {
				clearInterval(iterator);
			}
		}, 1000);
	}
	
	showMonth(20);
}