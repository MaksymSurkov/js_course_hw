"use strict"
// * Задача 5. Дано масив елементів. Знайти добуток додатних елементів *

if (confirm('Почати тестування?')) {
	const userArr = [-500, -231, 25, -123, 54, 85, -985, 32, -198]

	function getMultiplyPositivElements(arr) {
		let result = 1;
		for (const item of arr) {
			if(item > 0) result *= item;
		}
		return result;
	}

	let MultiplyPositivElements = getMultiplyPositivElements(userArr);
	document.write(`добуток додатних елементів: ${MultiplyPositivElements}`);
}
