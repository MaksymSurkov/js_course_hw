"use strict"
// * Задача 3. Користувач вводить кількість елементів. Створити масив, у якому перші 5 елементів заповнені 1-цями, а інші до кінця масиву заповнені 7-ками. *

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

	let userArr = fillArray(createArray(userNumber, 1), 7, 5);
	document.write(`${userArr}`);
}
