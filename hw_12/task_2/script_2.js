"use strict"
// * Задача 2. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів та порівнянь чисел під час сортування змішуванням.*

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
	let leftIndex = 0;
	let rightIndex = numbersArr.length - 1;
	let compare = 0;
	let changed = 0;
	while (leftIndex < rightIndex) {
		//--- проходимось зліва-направо
		let change = false;
		for (let i = leftIndex + 1; i <= rightIndex; i++) {
			if (numbersArr[i - 1] > numbersArr[i]) {
				let temp = numbersArr[i - 1];
				numbersArr[i - 1] = numbersArr[i];
				numbersArr[i] = temp;
				change = true;
				changed += 1;
			}
			compare += 1;
		}
		rightIndex--
		if (change === false) break
		//---- проходимось справа-наліво
		change = false;
		for (let i = rightIndex; i > leftIndex; i--) {
			if (numbersArr[i - 1] > numbersArr[i]) {
				let temp = numbersArr[i - 1];
				numbersArr[i - 1] = numbersArr[i];
				numbersArr[i] = temp;
				change = true;
				changed += 1;
			}
			compare += 1;
		}
		leftIndex++
		if (change === false) break
	}

	// Выводим отсортированный массив в консоль для наглядности
	console.log(numbersArr, compare, changed);
}

