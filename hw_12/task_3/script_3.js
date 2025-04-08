"use strict"
// * Задача 3. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів та порівнянь чисел під час сортування включеннями.*

if (confirm('Почати тестування?')) {
	// функция для генерирования массива из рандомных значений
	function getRandomArr(length, min, max) {
		const arr = [];
		for (let i = 0; i < length; i++) {
			const randNum = Math.floor(Math.random() * (max - min + 1)) + min;
			arr.push(randNum);
		}
		return arr;
	}

	// генерируем массив
	let numbersArr = getRandomArr(30, 1, 100);

	// выводим в консоль для наглядности
	console.log(numbersArr);

	// Сортируем
	let compare = 0;
	let changed = 0;
	for (let k = 0; k < numbersArr.length; k++) {
		const currentElement = numbersArr[k];
		let i = k - 1;
		while (i >= 0 && numbersArr[i] > currentElement) {
			numbersArr[i + 1] = numbersArr[i];
			i = i - 1;
			changed += 1;
		}
		compare += 1;
		numbersArr[i + 1] = currentElement;
	}

	// Выводим отсортированный массив в консоль для наглядности
	console.log(numbersArr, compare, changed);
}

