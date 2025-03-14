"use strict"
// * Задача 2. Користувач вводить кількість елементів. Створити масив, у якому перша половина заповнена 1-цями, а друга заповнена 7-ками. *

if (confirm('Почати тестування?')) {
	let userNumber = parseInt(prompt('Введите количество элементов'));

	function createArray(items, fill) {
		let arr = new Array(items).fill(fill);
		return arr;
	}

	function fillArray(arr, value, start, end) {
		arr.fill(value, start, end)
		return arr;
	}

	let halfArr = Math.floor(userNumber / 2);

	let userArr = fillArray(createArray(userNumber, 1), 7, halfArr)
	
	document.write(`${userArr}`);
}
