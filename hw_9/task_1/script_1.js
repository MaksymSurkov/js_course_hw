"use strict"
// * Задача 1. Користувач вводить кількість елементів. Створити масив, що складається з вказаної кількості елементів заповнених нулями. *

if (confirm('Почати тестування?')) {
	let userNumber = parseInt(prompt('Введите количество элементов'));
	function createArray(items, fillValue) {
		let arr = new Array(items).fill(fillValue);
		return arr;
	}
	let newArr = createArray(userNumber, 0)
	document.write(`${newArr}`)
}
