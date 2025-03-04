"use strict"
// * Задача 5. Створити функцію, яка для 3 заданих чисел знаходить одночасно декілька результатів: кількість парних, кількість додатних, кількість більших за 100. *

if (confirm('Почати тестування?')) {

	function getData (num1, num2, num3) {
		let pairCount = 0, positiveNum = 0, moreThen100 = 0;
		if (num1 % 2 === 0) {
			pairCount++
		}
		if (num1 >= 0) {
			positiveNum++
		}
		if (num1 > 100) {
			moreThen100++
		}
		if (num2 % 2 === 0) {
			pairCount++
		}
		if (num2 >= 0) {
			positiveNum++
		}
		if (num2 > 100) {
			moreThen100++
		}
		if (num3 % 2 === 0) {
			pairCount++
		}
		if (num3 >= 0) {
			positiveNum++
		}
		if (num3 > 100) {
			moreThen100++
		}
		return { pairCount, positiveNum, moreThen100 };
	}
	
	let num1 = parseInt(prompt(`Введите число`));
	let num2 = parseInt(prompt(`Введите число`));
	let num3 = parseInt(prompt(`Введите число`));

	let result = getData(num1, num2, num3)

	document.write(`<p class="block">Количество парных чисел: ${result.pairCount}</p>`);
	document.write(`<p class="block">Количество положительных чисел: ${result.positiveNum}</p>`);
	document.write(`<p class="block">Количество чисел больше чем 100: ${result.moreThen100}</p>`);
}
