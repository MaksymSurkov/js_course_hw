"use strict"
// * Задача 1. Користувач вводить кількість елементів. Створити масив, що складається з вказаної кількості елементів заповнених нулями. *

if (confirm('Почати тестування?')) {
	let userNumber = parseInt(prompt('Введите количество элементов'));
	function createArray(items, fill) {
		let arr = new Array(items).fill(fill);
		return arr;
	}
	let newArr = createArray(userNumber, 0)
	document.write(`${newArr}`)
}
