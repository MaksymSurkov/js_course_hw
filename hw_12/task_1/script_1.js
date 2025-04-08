"use strict"
// * Задача 1. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів та порівнянь чисел під час сортування бульбашкою*

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
	let change, compare = 0, changed = 0, endIndex = numbersArr.length; // compare - счетчик сравнений, changed - счетчик переставлений элементов
	do {
		change = false;
		for (let i = 1; i < endIndex; i++) {
			if (numbersArr[i-1]>numbersArr[i]) {
				let tmp = numbersArr[i - 1];
				numbersArr[i - 1] = numbersArr[i];
				numbersArr[i] = tmp;
				change = true;
				changed += 1;
			}
			compare += 1; // считаю только сколько раз сравнивались друг с другом элементы
		}
		endIndex--
	} while (change);

	// Выводим отсортированный массив в консоль для наглядности
	console.log(numbersArr, compare, changed);
}

