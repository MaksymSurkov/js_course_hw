"use strict"
// * Задача 1. Створити клас, що дозволяє виконувати такі операції над масивами: знаходження кількості додатних, кількості від’ємних, кількість входжень деякого числа (статичні методи).

if (confirm('Почати тестування?')) {
	class ArrayAction {
		static getPositiveCount(...items) {
			return items.reduce((prevItem, item) => item >= 0 ? prevItem += 1 : prevItem, 0);
		}
		static getNegativeCount(...items) {
			return items.reduce((prevItem, item) => item < 0 ? prevItem += 1 : prevItem, 0);
		}
		static howMany(arr, value) {
			return arr.reduce((prevItem, item) => item === value ? prevItem += 1 : prevItem, 0);
		}
	}

	let posCount = ArrayAction.getPositiveCount(5, 15, -35, -32, 0, 45);
	let negativeCount = ArrayAction.getNegativeCount(5, 15, -35, -32, 0, 45);
	const arr = [5, 15, -35, -32, 0, 45, 5];
	//let someItem = ArrayAction.howMany(arr, 5);

	console.log(posCount);
	console.log(negativeCount);
	console.log(ArrayAction.howMany(arr, 5));
}